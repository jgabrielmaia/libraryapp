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

  constructor(
    public dialogRef: MatDialogRef<ReserveModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { book: Book },
    public bookService: BookService
  ) {}

  reserveBook() {
    const currentDate = new Date();
    const isoDateString = currentDate.toISOString();

    const updatedBook: Book = {
      ...this.data.book,
      available: false,
      lastReservedDate: isoDateString,
      reservedBy: this.email,
    };

    this.bookService.updateBook(updatedBook).subscribe(_ =>this.dialogRef.close(updatedBook));
  }
}
