using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Book
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public ObjectId Id { get; set; }
    
    [BsonElement("name")]
    public string Name { get; set; }
    
    [BsonElement("author")]
    public string Author { get; set; }
    
    [BsonElement("cover")]
    public string Cover { get; set; }
    
    [BsonElement("available")]
    public bool Available { get; set; }
    
    [BsonElement("lastRentedDate")]
    public DateTime LastRentedDate { get; set; }
}