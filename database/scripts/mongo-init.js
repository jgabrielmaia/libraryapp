db = new Mongo().getDB("booksDB");

db.createCollection("books", { capped: false });

db.books.insert([
  {
    name: "Homo Deus",
    author: "Yuval Noah Harari",
    cover:
      "https://m.media-amazon.com/images/I/71PuIuX-64L._AC_UF1000,1000_QL80_.jpg",
    available: true,
    checkoutDate: "2023-11-13T00:00:00.000Z",
    returnDate: "2023-11-12T00:00:00.000Z",
    requestedBy: "[REDACTED]",
  },
  {
    name: "Atomic Habits",
    author: "James Clear",
    cover:
      "https://m.media-amazon.com/images/I/812eE1lO0dL._AC_UF1000,1000_QL80_.jpg",
    available: true,
    checkoutDate: "2023-11-08T00:00:00.000Z",
    returnDate: "2023-12-08T00:00:00.000Z",
    requestedBy: "[REDACTED]",
  },
  {
    name: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    cover:
      "https://cdn.kobo.com/book-images/c81ea4de-cfb7-415d-8634-314aad041fdb/1200/1200/False/rich-dad-poor-dad-9.jpg",
    available: true,
    checkoutDate: "2023-11-08T00:00:00.000Z",
    returnDate: "2023-12-08T00:00:00.000Z",
    requestedBy: "[REDACTED]",
  },
  {
    name: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    cover:
      "https://m.media-amazon.com/images/I/71rmHeQeuRL._AC_UF1000,1000_QL80_.jpg",
    available: true,
    checkoutDate: "2023-11-08T00:00:00.000Z",
    returnDate: "2023-12-08T00:00:00.000Z",
    requestedBy: "[REDACTED]",
  },
  {
    name: "Principles",
    author: "Ray Dalio",
    cover:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781668010198/principles-9781668010198_hr.jpg",
    available: true,
  },
  {
    name: "Leaders Eat Last",
    author: "Simon Sinek",
    cover:
      "https://m.media-amazon.com/images/I/51ejdeSXFjL.jpg",
    available: true,
    checkoutDate: "2023-11-08T00:00:00.000Z",
    returnDate: "2023-12-08T00:00:00.000Z",
    requestedBy: "[REDACTED]",
  },
  {
    name: "Can't Hurt Me: Master Your Mind and Defy the Odds",
    author: "David Goggins",
    cover:
      "https://m.media-amazon.com/images/I/41amV20d1uL.jpg",
    available: true,
    checkoutDate: "2023-11-08T00:00:00.000Z",
    returnDate: "2023-12-08T00:00:00.000Z",
    requestedBy: "[REDACTED]",
  },
  {
    name: "Authentic Happiness",
    author: "Martin Seligman",
    cover:
      "https://m.media-amazon.com/images/I/51NYdZLOmgL.jpg",
    available: true,
    checkoutDate: "2023-11-08T00:00:00.000Z",
    returnDate: "2023-12-08T00:00:00.000Z",
    requestedBy: "[REDACTED]",
  },
  {
    name: "What Makes a Leader",
    author: "Daniel Goleman",
    cover:
      "https://cdn11.bigcommerce.com/s-yneuaokjib/images/stencil/1280x1280/products/16420/176505/10101_500__06122.1621329507.png?c=2",
    available: false,
    checkoutDate: "2023-11-08T00:00:00.000Z",
    returnDate: "2023-12-08T00:00:00.000Z",
    requestedBy: "[REDACTED]",
  },
  {
    name: "Empathy",
    author: "Roman Krznaric",
    cover:
      "https://www.romankrznaric.com/wp-content/uploads/2013/08/Empathy-pb-cover-with-border-1.jpg",
    available: false,
  },
  {
    name: "Blink",
    author: "Malcom Gladwell",
    cover:
      "https://m.media-amazon.com/images/I/81oMQeXD1PL._AC_UF1000,1000_QL80_.jpg",
    available: false,
    checkoutDate: "2023-11-08T00:00:00.000Z",
    returnDate: "2023-12-08T00:00:00.000Z",
    requestedBy: "[REDACTED]",
  },
  {
    name: "Rework",
    author: "Jason Fried, David Heinemeier Hansson",
    cover:
      "https://m.media-amazon.com/images/I/71SqvmjaM3L._AC_UF1000,1000_QL80_.jpg",
    available: false,
  },
  {
    name: "The art of the start",
    author: "Guy Kawasaki",
    cover:
      "https://m.media-amazon.com/images/I/71SNTwwXbVL._AC_UF1000,1000_QL80_.jpg",
    available: false,    requestedBy: "[REDACTED]",
  },
  {
    name: "Clean Code - A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    cover:
      "https://m.media-amazon.com/images/I/51E2055ZGUL._AC_UF1000,1000_QL80_.jpg",
    available: false,    requestedBy: "[REDACTED]",
  },
  {
    name: "Software Estimation: Demystifying the Black Art (Developer Best Practices)",
    author: "Steve McConnell",
    cover:
      "https://m.media-amazon.com/images/I/517E7sGoVTL.jpg",
    available: false,
  },
  {
    name: "Fundamentals of Software Architecture - An Engineering Approach ",
    author: "Mark Richards, Neal Ford",
    cover:
      "https://m.media-amazon.com/images/I/51RfC2gDwuL.jpg",
    available: false,
  },
  {
    name: "Go Design Patterns",
    author: "Mario Castro Contreras",
    cover:
      "https://m.media-amazon.com/images/I/61LNF+xZweL._AC_UF1000,1000_QL80_.jpg",
    available: false,
  },
  {
    name: "Design Patterns in C#",
    author: "Steven John Metsker",
    cover:
      "https://m.media-amazon.com/images/I/81HfZxBy3LL._AC_UF1000,1000_QL80_.jpg",
    available: false,
  },
  {
    name: "NoEstimates: How To Measure Project Progress Without Estimating",
    author: "Vasco Duarte ",
    cover:
      "https://m.media-amazon.com/images/I/415YVCUnNML.jpg",
    available: false,
  },
  {
    name: "The Coaching Habit",
    author: "Michael Bungay Stanier",
    cover:
      "https://m.media-amazon.com/images/I/71W-00OjIHL._AC_UF1000,1000_QL80_.jpg",
    available: false,
  },
  {
    name: "Working with Emotional Intelligence",
    author: "Daniel Goleman",
    cover:
      "https://m.media-amazon.com/images/I/71Uj--cjt4L._AC_UF1000,1000_QL80_.jpg",
    available: false,
  },
  {
    name: "Team Topologies: Organizing Business and Technology Teams for Fast Flow",
    author: "Manuel Pais e Matthew Skelton",
    cover:
      "https://m.media-amazon.com/images/I/61q+Xx8aHDL._AC_UF1000,1000_QL80_.jpg",
    available: false,
  },
  {
    name: "Pragmatic Developer",
    author: "Andy Hunt, Dave Thomas",
    cover:
      "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg",
    available: false,    requestedBy: "[REDACTED]",
  },
  {
    name: "The Kubernetes Book",
    author: "Nigel Poulton",
    cover:
      "https://m.media-amazon.com/images/I/610l7whFTFL._AC_UF350,350_QL50_.jpg",
    available: false,
  },
  {
    name: "Nudge",
    author: "Richard H. Thaler e Cass R. Sunstein",
    cover:
      "https://m.media-amazon.com/images/I/417hR76lG4S.jpg",
    available: false,
  },
  {
    name: "Drive",
    author: "Daniel Pink",
    cover:
      "https://m.media-amazon.com/images/I/81pUH8Q8GkL._AC_UF1000,1000_QL80_.jpg",
    available: false,
  },
  {
    name: "Outliers",
    author: "Malcom Gladwell",
    cover:
      "https://m.media-amazon.com/images/I/91lYcUJ8JsL._AC_UF1000,1000_QL80_.jpg",
    available: false,    requestedBy: "[REDACTED]",
  },
  {
    name: "The Burnout Society",
    author: "Byung-Chul Han",
    cover:
      "https://m.media-amazon.com/images/I/71sZBzlpXsL._AC_UF1000,1000_QL80_.jpg",
    available: false,    requestedBy: "[REDACTED]",
  },
  {
    name: "Who Moved My Cheese",
    author: "Spencer Johnson",
    cover:
      "https://m.media-amazon.com/images/I/51oe4MOB9fL.jpg",
    available: false,    requestedBy: "[REDACTED]",
  },
  {
    name: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    cover:
      "https://m.media-amazon.com/images/I/61fdrEuPJwL._AC_UF1000,1000_QL80_.jpg",
    available: true,
  },
  {
    name: "Selling to Big Companies",
    author: "Jill Konrath",
    cover:
      "https://m.media-amazon.com/images/I/81AaQ8JAbVL._AC_UF1000,1000_QL80_.jpg",
    available: true,
  },
  {
    name: "The Sales Development Playbook",
    author: "Trish Bertuzzi",
    cover:
      "https://m.media-amazon.com/images/I/51h3c+atulL.jpg",
    available: true,
  },
  {
    name: "HBR Guideline to Beating Burnout",
    author: "Harvard Business Review Press",
    cover:
      "https://m.media-amazon.com/images/I/51I0ija3DsL._AC_UF1000,1000_QL80_.jpg",
    available: false,    requestedBy: "[REDACTED]",
  },
  {
    name: "Creating Contagious Leadership: 5 Habits that Inspire a Leadership Culture",
    author: "John Hersey",
    cover:
      "https://m.media-amazon.com/images/I/41E2RD5BE6L._AC_UF1000,1000_QL80_.jpg",
    available: true,
  },
  {
    name: "O Código do Sucesso",
    author: "Ron Friedman",
    cover:
      "https://img.portoeditora.pt/images/o-codigo-do-sucesso-ron-friedman/NHwyNTExMzM3OXwyMTMwNjMzNnwxNjMyMTI4NzIyMDAw/300x",
    available: true,
  },
  {
    name: "Manual de Vendas",
    author: "Tom Hopkins",
    cover:
      "https://m.media-amazon.com/images/I/41S7jvThvPL._AC_UF1000,1000_QL80_.jpg",
    available: true,
  },
]);
