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
      cover: ['', Validators.required],
      available: [true],
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
      console.log(newBook);
      this.bookService.addBook(newBook).subscribe((addedBook) => {
        // Handle success, e.g., display a message or reset the form
        this.newBookForm.reset();
        this.books.push(addedBook); // Add the new book to the list
      });
    }
  }

  onSaveBook(book: Book) {
    if(book.id != undefined){
      console.log({...book, available: !book.available})
      this.bookService.isBookAvailable(book?.id, !book.available).subscribe((addedBook) => {

      });
    }
  }
}
