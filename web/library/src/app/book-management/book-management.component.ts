import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css']
})
export class BookManagementComponent implements OnInit {
  newBookForm: FormGroup;
  books: Book[] = []; // This should be populated with books from your service.

  constructor(private fb: FormBuilder, private bookService: BookService) {
    this.newBookForm = this.fb.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      url: [''],
      cover: [''],
      available: [true],
      lastReservedDate: [null],
      reservedBy: [''],
    });
  }

  ngOnInit() {
    // Fetch the list of books from your service and populate the 'books' array.
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  onAddNewBook() {
    if (this.newBookForm.valid) {
      const newBook: Book = this.newBookForm.value;
      this.bookService.addBook(newBook).subscribe((addedBook) => {
        // Handle success, e.g., display a message or reset the form
        this.newBookForm.reset();
        this.books.push(addedBook); // Add the new book to the list
      });
    }
  }

  onSaveBook() {
    return true;
  }

  editBook(book: Book) {
    // Implement logic to open an edit form or navigate to an edit book component.
  }
}
