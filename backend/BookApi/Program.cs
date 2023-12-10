using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.AddJsonFile($"appsettings.{builder.Environment.EnvironmentName}.json", optional: true, reloadOnChange: true);

var connectionString = builder.Configuration.GetConnectionString("MongoDBConnection");

var client = new MongoClient(connectionString);
var database = client.GetDatabase("booksDB");
var collection = database.GetCollection<Book>("books");

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder
            .SetIsOriginAllowed(_ => true)
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials();
    });
});

Console.WriteLine("Connection string", connectionString);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.MapGet("/api/books", async () =>
{
    var books = await collection.Find(_ => true).ToListAsync();
    return Results.Ok(books);
});

app.MapGet("/", (HttpContext context) =>
{
    context.Response.Headers["Location"] = "/api/books";
    return Results.StatusCode(StatusCodes.Status302Found);
});

app.MapPost("/api/books", async (HttpContext context, [FromBody] Book newBook) =>
{
    if (newBook == null)
    {
        return Results.BadRequest("Invalid book data");
    }

    // Let MongoDB generate a unique ObjectId for the new book
    newBook.Id = ObjectId.GenerateNewId().ToString();

    await collection.InsertOneAsync(newBook);

    // Return a 201 Created status code along with the location of the newly created resource.
    return Results.StatusCode(StatusCodes.Status201Created);
});

app.MapPut("/api/books/{id}", async (string id, [FromBody] Book updatedBook) =>
{
    var existingBook = await collection.Find(b => b.Id == id).FirstOrDefaultAsync();
    if (existingBook is null)
    {
        return Results.NotFound("Book not found");
    }

    updatedBook.Id = existingBook.Id;
    await collection.ReplaceOneAsync(b => b.Id == existingBook.Id, updatedBook);
    return Results.NoContent();
});

app.MapDelete("/api/books/{id}", async (string id) =>
{
    var result = await collection.DeleteOneAsync(b => b.Id == id);
    return result.DeletedCount == 1 ? Results.NoContent() : Results.NotFound("Book not found");
});

app.MapPut("/api/books/{id}/availability", async (string id, [FromBody] bool isAvailable) =>
{
    var existingBook = await collection.Find(b => b.Id == id).FirstOrDefaultAsync();
    if (existingBook is null)
    {
        return Results.NotFound("Book not found");
    }

    existingBook.Available = isAvailable;

    await collection.ReplaceOneAsync(b => b.Id == id, existingBook);

    return Results.NoContent();
});

app.UseCors();

app.Run();