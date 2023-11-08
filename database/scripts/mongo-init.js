db = new Mongo().getDB("booksDB");

db.createCollection("books", { capped: false });

db.books.insert([
  {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover:
      "https://img.wook.pt/images/to-kill-a-mockingbird-harper-lee/MXw0NTI2NzM3fDI5NDI5Mzl8MTY0Njc1ODQ0ODAwMA==/500x",
    available: true,
    lastReservedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "1984",
    author: "George Orwell",
    cover:
      "https://img.bertrand.pt/images/1984-george-orwell/NDV8MjUzMjQ3NjN8MjE1NTAzNzl8MTYyOTcyOTI5MDAwMA==/500x",
    available: false,
    lastReservedDate: "2023-11-07T15:30:00.000Z",
    reservedBy: 'Reserver@Reservingbooks.com',
  },
  {
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781524879761/the-great-gatsby-9781524879761_hr.jpg",
    available: true,
    lastReservedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "Pride and Prejudice",
    author: "Jane Austen",
    cover:
      "https://cdn.kobo.com/book-images/08ba5a67-f48d-420e-be8e-6de7a73b7d85/1200/1200/False/pride-prejudice-13.jpg",
    available: false,
    lastReservedDate: "2023-11-07T15:30:00.000Z",
    reservedBy: 'Reserver@Reservingbooks.com',
  },
  {
    name: "The Catcher in the Rye",
    author: "J.D. Salinger",
    cover:
      "https://m.media-amazon.com/images/I/91ycNzZu1mL._AC_UF1000,1000_QL80_.jpg",
    available: true,
    lastReservedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    cover:
      "https://frugalbookstore.net/cdn/shop/products/sorcerer_s.jpg?v=1675226870",
    available: false,
    lastReservedDate: "2023-11-07T15:30:00.000Z",
    reservedBy: 'Reserver@Reservingbooks.com',
  },
  {
    name: "The Lord of the Rings: The Return of the King",
    author: "J.R.R. Tolkien",
    cover:
      "https://images.penguinrandomhouse.com/cover/9780593500507",
    available: true,
    lastReservedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "The Hobbit",
    author: "J.R.R. Tolkien",
    cover:
      "https://cdn.waterstones.com/bookjackets/large/9780/2611/9780261103344.jpg",
    available: false,
    lastReservedDate: "2023-11-07T15:30:00.000Z",
    reservedBy: 'Reserver@Reservingbooks.com',
  },
  {
    name: "Moby-Dick",
    author: "Herman Melville",
    cover:
      "https://www.guerraepaz.pt/wp-content/uploads/2023/03/capa_Moby-Dick__2-edicao_300dpi-scaled.jpg",
    available: true,
    lastReservedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "The Da Vinci Code",
    author: "Dan Brown",
    cover:
      "https://m.media-amazon.com/images/I/91Q5dCjc2KL._AC_UF1000,1000_QL80_.jpg",
    available: false,
    lastReservedDate: "2023-11-07T15:30:00.000Z",
    reservedBy: 'Reserver@Reservingbooks.com',
  },
  {
    name: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    cover:
      "https://eximia.co/wp-content/uploads/sites/2/2020/03/51d1qVhmAmL.jpg",
    available: true,
    lastReservedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides",
    cover:
      "https://m.media-amazon.com/images/I/81gtKoapHFL._AC_UF1000,1000_QL80_.jpg",
    available: false,
    lastReservedDate: "2023-11-07T15:30:00.000Z",
    reservedBy: 'Reserver@Reservingbooks.com',
  },
  {
    name: "Introduction to the Theory of Computation",
    author: "Michael Sipser",
    cover:
      "https://m.media-amazon.com/images/I/71rMsIS8vDL._AC_UF1000,1000_QL80_.jpg",
    available: true,
    lastReservedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "Cracking the Coding Interview",
    author: "Gayle Laakmann McDowell",
    cover:
      "https://www.bokay.pt/wp-content/uploads/2022/04/Cracking-the-Coding-Interview.png",
    available: true,
    lastReservedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "Code Complete: A Practical Handbook of Software Construction",
    author: "Steve McConnell",
    cover:
      "https://m.media-amazon.com/images/I/51HhdUfMzCL._SY445_SX342_.jpg",
    available: true,
    lastReservedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "The Pragmatic Programmer: Your Journey to Mastery",
    author: "Andrew Hunt and David Thomas",
    cover:
      "https://miro.medium.com/v2/resize:fit:384/1*WMCABpYvg7cZjh0DZZpvwg.jpeg",
    available: true,
    lastReservedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "The Mythical Man-Month: Essays on Software Engineering",
    author: "Frederick P. Brooks Jr.",
    cover:
      "https://m.media-amazon.com/images/I/71fCJWIx4UL._AC_UF1000,1000_QL80_.jpg",
    available: false,
    lastReservedDate: "2023-11-07T15:30:00.000Z",
    reservedBy: 'Reserver@Reservingbooks.com',
  },
  {
    name: "Structure and Interpretation of Computer Programs",
    author: "Harold Abelson and Gerald Jay Sussman",
    cover:
      "https://img.wook.pt/images/structure-and-interpretation-of-computer-programs-gerald-jay-sussman/MXwxODYyOTh8MjM1OTU2fDE2ODMwNTk5MTEwMDA=/500x",
    available: true,
    lastReservedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "The Art of Computer Programming",
    author: "Donald E. Knuth",
    cover:
      "https://m.media-amazon.com/images/I/61tIrzRmFdL._AC_UF1000,1000_QL80_.jpg",
    available: true,
    lastReservedDate: "2023-11-07T15:30:00.000Z",
  },
  {
    name: "Introduction to Algorithms",
    author:
      "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein",
    cover:
      "https://m.media-amazon.com/images/I/61TX9gJwCDL._AC_UF1000,1000_QL80_.jpg",
    available: false,
    lastReservedDate: "2023-11-07T15:30:00.000Z",
    reservedBy: 'Reserver@Reservingbooks.com',
  },
]);
