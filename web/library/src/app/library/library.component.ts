import { Component } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent {
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.books = books;
      this.orderLibrary();
    });
  }

  orderLibrary() {
    this.books = this.books.sort((a, b) => (a.available === b.available ? 0 : a.available ? -1 : 1));
  }

  refreshLibrary(updatedBook: Book) {
    console.log("Received event", updatedBook);
    const index = this.books.findIndex(book => book.id === updatedBook.id);

    if (index !== -1) {
      this.books[index] = updatedBook;
    }

    this.orderLibrary();
  }
}
