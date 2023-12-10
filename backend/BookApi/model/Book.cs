using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Book
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    
    [BsonElement("name")]
    public string Name { get; set; }
    
    [BsonElement("author")]
    public string Author { get; set; }
    
    [BsonElement("cover")]
    public string Cover { get; set; }
    
    [BsonElement("available")]
    public bool Available { get; set; }
    
    [BsonElement("checkoutDate")]
    public DateTime checkoutDate { get; set; }

    [BsonElement("returnDate")]
    public DateTime returnDate { get; set; }

    [BsonElement("requestedBy")]
    public string RequestedBy { get; set; }
}