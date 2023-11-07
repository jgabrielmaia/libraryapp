using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);

var client = new MongoClient("mongodb://localhost:27017");
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


app.MapPut("/api/books/{id}", async (string id, [FromBody] Book updatedBook) =>
{
    var existingBook = await collection.Find(b => b.Id == ObjectId.Parse(id)).FirstOrDefaultAsync();
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
    var result = await collection.DeleteOneAsync(b => b.Id == ObjectId.Parse(id));
    return result.DeletedCount == 1 ? Results.NoContent() : Results.NotFound("Book not found");
});
app.UseCors();

app.Run();