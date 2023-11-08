import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Book } from '../model/book';

@Component({
  selector: 'app-rent-modal',
  templateUrl: 'rent-modal.component.html',
})
export class RentModalComponent {
  email: string = '';

  constructor(public dialogRef: MatDialogRef<RentModalComponent>, @Inject(MAT_DIALOG_DATA) public data: { book: Book }) {}

  rentBook() {
    this.dialogRef.close({
      book: this.data.book,
      email: this.email,
      message: 'Book rented successfully',
    });
  }

  close() {
    this.dialogRef.close();
  }
}
