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
      // Sort the books so that active books come first
      this.books = books.sort((a, b) => (a.available === b.available ? 0 : a.available ? -1 : 1));
    });
  }
}
