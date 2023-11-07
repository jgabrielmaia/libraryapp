db = new Mongo().getDB("booksDB");

db.createCollection("books", { capped: false });

db.books.insert([
  {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover:
      "https://cdn.kobo.com/book-images/d76d4df1-fc2c-4d72-9209-c3ee27176c95/1200/1200/False/the-only-one-left-1.jpg",
    available: true,
    lastRentedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "1984",
    author: "George Orwell",
    cover:
      "https://cdn.kobo.com/book-images/d76d4df1-fc2c-4d72-9209-c3ee27176c95/1200/1200/False/the-only-one-left-1.jpg",
    available: false,
    lastRentedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover:
      "https://cdn.kobo.com/book-images/d76d4df1-fc2c-4d72-9209-c3ee27176c95/1200/1200/False/the-only-one-left-1.jpg",
    available: true,
    lastRentedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "Pride and Prejudice",
    author: "Jane Austen",
    cover:
      "https://cdn.kobo.com/book-images/d76d4df1-fc2c-4d72-9209-c3ee27176c95/1200/1200/False/the-only-one-left-1.jpg",
    available: false,
    lastRentedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "The Catcher in the Rye",
    author: "J.D. Salinger",
    cover:
      "https://cdn.kobo.com/book-images/d76d4df1-fc2c-4d72-9209-c3ee27176c95/1200/1200/False/the-only-one-left-1.jpg",
    available: true,
    lastRentedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    cover:
      "https://cdn.kobo.com/book-images/d76d4df1-fc2c-4d72-9209-c3ee27176c95/1200/1200/False/the-only-one-left-1.jpg",
    available: false,
    lastRentedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    cover:
      "https://cdn.kobo.com/book-images/d76d4df1-fc2c-4d72-9209-c3ee27176c95/1200/1200/False/the-only-one-left-1.jpg",
    available: true,
    lastRentedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "The Hobbit",
    author: "J.R.R. Tolkien",
    cover:
      "https://cdn.kobo.com/book-images/d76d4df1-fc2c-4d72-9209-c3ee27176c95/1200/1200/False/the-only-one-left-1.jpg",
    available: false,
    lastRentedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "Moby-Dick",
    author: "Herman Melville",
    cover:
      "https://cdn.kobo.com/book-images/d76d4df1-fc2c-4d72-9209-c3ee27176c95/1200/1200/False/the-only-one-left-1.jpg",
    available: true,
    lastRentedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "The Da Vinci Code",
    author: "Dan Brown",
    cover:
      "https://cdn.kobo.com/book-images/d76d4df1-fc2c-4d72-9209-c3ee27176c95/1200/1200/False/the-only-one-left-1.jpg",
    available: false,
    lastRentedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    cover:
      "https://cdn.kobo.com/book-images/d76d4df1-fc2c-4d72-9209-c3ee27176c95/1200/1200/False/the-only-one-left-1.jpg",
    available: true,
    lastRentedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides",
    cover:
      "https://cdn.kobo.com/book-images/d76d4df1-fc2c-4d72-9209-c3ee27176c95/1200/1200/False/the-only-one-left-1.jpg",
    available: false,
    lastRentedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "Introduction to the Theory of Computation",
    author: "Michael Sipser",
    cover:
      "https://cdn.kobo.com/book-images/d76d4df1-fc2c-4d72-9209-c3ee27176c95/1200/1200/False/the-only-one-left-1.jpg",
    available: true,
    lastRentedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "Cracking the Coding Interview",
    author: "Gayle Laakmann McDowell",
    cover:
      "https://cdn.kobo.com/book-images/d76d4df1-fc2c-4d72-9209-c3ee27176c95/1200/1200/False/the-only-one-left-1.jpg",
    available: true,
    lastRentedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "Code Complete: A Practical Handbook of Software Construction",
    author: "Steve McConnell",
    cover:
      "https://cdn.kobo.com/book-images/d76d4df1-fc2c-4d72-9209-c3ee27176c95/1200/1200/False/the-only-one-left-1.jpg",
    available: true,
    lastRentedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "The Pragmatic Programmer: Your Journey to Mastery",
    author: "Andrew Hunt and David Thomas",
    cover:
      "https://cdn.kobo.com/book-images/d76d4df1-fc2c-4d72-9209-c3ee27176c95/1200/1200/False/the-only-one-left-1.jpg",
    available: true,
    lastRentedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "The Mythical Man-Month: Essays on Software Engineering",
    author: "Frederick P. Brooks Jr.",
    cover:
      "https://cdn.kobo.com/book-images/d76d4df1-fc2c-4d72-9209-c3ee27176c95/1200/1200/False/the-only-one-left-1.jpg",
    available: false,
    lastRentedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "Structure and Interpretation of Computer Programs",
    author: "Harold Abelson and Gerald Jay Sussman",
    cover:
      "https://cdn.kobo.com/book-images/d76d4df1-fc2c-4d72-9209-c3ee27176c95/1200/1200/False/the-only-one-left-1.jpg",
    available: true,
    lastRentedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "The Art of Computer Programming",
    author: "Donald E. Knuth",
    cover:
      "https://cdn.kobo.com/book-images/d76d4df1-fc2c-4d72-9209-c3ee27176c95/1200/1200/False/the-only-one-left-1.jpg",
    available: true,
    lastRentedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "Introduction to Algorithms",
    author:
      "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein",
    cover:
      "https://cdn.kobo.com/book-images/d76d4df1-fc2c-4d72-9209-c3ee27176c95/1200/1200/False/the-only-one-left-1.jpg",
    available: false,
    lastRentedDate: "2023-11-07T15:30:00.000Z",
  },
]);
