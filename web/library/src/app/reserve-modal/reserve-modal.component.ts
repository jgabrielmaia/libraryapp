import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-reserve-modal',
  templateUrl: './reserve-modal.component.html',
  styleUrls: ['./reserve-modal.component.css'],
})
export class ReserveModalComponent {
  email: string = '';
  returnDate: Date | null = null;
  minDate: Date | null = null;
  maxDate: Date | null = null;

  constructor(
    public dialogRef: MatDialogRef<ReserveModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { book: Book },
    public bookService: BookService
  ) {
    const today = new Date();
    this.minDate = today;
    this.maxDate = new Date(
      today.getFullYear(), 
      today.getMonth() + 3, 
      today.getDate());
  }

  reserveBook() {
    const currentDate = new Date();

    const isoDateString = currentDate.toISOString();

    const updatedBook: Book = {
      ...this.data.book,
      available: false,
      checkoutDate: isoDateString,
      requestedBy: this.email,
      returnDate: this.returnDate?.toISOString(),
    };

    this.bookService.updateBook(updatedBook).subscribe(_ => this.dialogRef.close(updatedBook));
  }
}
