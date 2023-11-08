import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Book } from '../model/book';

@Component({
  selector: 'app-reserve-modal',
  templateUrl: './reserve-modal.component.html',
  styleUrls: ['./reserve-modal.component.css']
})
export class ReserveModalComponent {
  email: string = '';

  constructor(public dialogRef: MatDialogRef<ReserveModalComponent>, @Inject(MAT_DIALOG_DATA) public data: { book: Book }) {}

  reserveBook() {
    this.dialogRef.close({
      book: this.data.book,
      email: this.email,
      message: 'Book reserved successfully',
    });
  }

  close() {
    this.dialogRef.close();
  }
}
