db = new Mongo().getDB('booksDB');
db.createCollection('books', { capped: false });
db.books.insert([
  {
    "title": "HomoDeus",
    "author": "Yuval Noah Harari",
    "requestedBy": "José Brito",
    "checkoutDate": "2023-11-13T00:00:00",
    "returnDate": "2023-12-13T00:00:00"
  },
  {
    "title": "Atomic Habits",
    "author": "James Clear",
    "requestedBy": "Diogo Espregueira",
    "checkoutDate": "2023-11-08T00:00:00",
    "returnDate": "2023-12-08T00:00:00"
  },
  {
    "title": "Rich Dad Poor Dad",
    "author": "Robert T. Kiyosaki",
    "requestedBy": "André Pinto",
    "checkoutDate": "2023-11-09T00:00:00",
    "returnDate": "2023-12-11T00:00:00"
  },
  {
    "title": "The 7 Habits of Highly Effective People",
    "author": "Stephen R. Covey",
    "requestedBy": "Diogo Ferreira",
    "checkoutDate": "2023-11-09T00:00:00",
    "returnDate": "2023-12-11T00:00:00"
  },
  {
    "title": "Principles",
    "author": "Ray Dalio",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "Leaders Eat Last",
    "author": "Simon Sinek",
    "requestedBy": "Luiza Moreira",
    "checkoutDate": "2023-11-20T00:00:00",
    "returnDate": "2023-12-20T00:00:00"
  },
  {
    "title": "Can't Hurt Me: Master Your Mind and Defy the Odds",
    "author": "David Goggins",
    "requestedBy": "João Moreira",
    "checkoutDate": "2023-11-07T00:00:00",
    "returnDate": "2023-12-07T00:00:00"
  },
  {
    "title": "Authentic Happiness",
    "author": "Martin Seligman",
    "requestedBy": "Vishad Vyas",
    "checkoutDate": "2023-11-08T00:00:00",
    "returnDate": "2023-12-08T00:00:00"
  },
  {
    "title": "What Makes a Leader (Not available yet)",
    "author": "Daniel Goleman",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "Empathy",
    "author": "Roman Krznaric",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "Blink",
    "author": "Malcom Gladwell",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "Rework",
    "author": "Jason Fried, David Heinemeier Hansson",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "The art of the start",
    "author": "Guy Kawasaki",
    "requestedBy": "Inês Ramos",
    "checkoutDate": "2023-11-23T00:00:00",
    "returnDate": "2023-12-25T00:00:00"
  },
  {
    "title": "Clean Code - A Handbook of Agile Software Craftsmanship",
    "author": "Robert C. Martin",
    "requestedBy": "Bernardo Lopes",
    "checkoutDate": "2023-11-10T00:00:00",
    "returnDate": "2023-12-11T00:00:00"
  },
  {
    "title": "Software Estimation: Demystifying the Black Art (Developer Best Practices)",
    "author": "Steve McConnell",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "Fundamentals of Software Architecture - An Engineering Approach",
    "author": "Mark Richards, Neal Ford",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "Go Design Patterns",
    "author": "Mario Castro Contreras",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "Design Patterns in C#",
    "author": "Steven John Metsker",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "NoEstimates: How To Measure Project Progress Without Estimating",
    "author": "Vasco Duarte",
    "requestedBy": "Filipe Figueiredo",
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "The Coaching Habit  (Not available yet)",
    "author": "Michael Bungay Stanier",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "Working with Emotional Intelligence",
    "author": "Daniel Goleman",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "Team Topologies: Organizing Business and Technology Teams for Fast Flow",
    "author": "Manuel Pais e Matthew Skelton",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "Pragmatic Developer",
    "author": "Andy Hunt, Dave Thomas",
    "requestedBy": "Vicente Espinha",
    "checkoutDate": "2023-11-10T00:00:00",
    "returnDate": "2023-12-11T00:00:00"
  },
  {
    "title": "The Kubernetes Book",
    "author": "Nigel Poulton",
    "requestedBy": "João Roque",
    "checkoutDate": "2023-11-06T00:00:00",
    "returnDate": "2023-12-06T00:00:00"
  },
  {
    "title": "Nudge",
    "author": "Richard H. Thaler e Cass R. Sunstein",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "Drive",
    "author": "Daniel Pink",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "Outliers",
    "author": "Malcom Gladwell",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "The Burnout Society",
    "author": "Byung-Chul Han",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "Who Moved My Cheese",
    "author": "Spencer Johnson",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "Thinking, Fast and Slow",
    "author": "Daniel Kahneman",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "Selling to Big Companies",
    "author": "Jill Konrath",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "The Sales Development Playbook",
    "author": "Trish Bertuzzi",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "HBR Guideline to Beating Burnout",
    "author": "Harvard Business Review Press",
    "requestedBy": "Ágata Faria",
    "checkoutDate": "2023-11-14T00:00:00",
    "returnDate": "2023-12-14T00:00:00"
  },
  {
    "title": "Creating Contagious Leadership: 5 Habits that Inspire a Leadership Culture",
    "author": "John Hersey",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "O Código do Sucesso",
    "author": "Ron Friedman",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  },
  {
    "title": "Manual de Vendas",
    "author": "Tom Hopkins",
    "requestedBy": NaN,
    "checkoutDate": null,
    "returnDate": null
  }
]);
