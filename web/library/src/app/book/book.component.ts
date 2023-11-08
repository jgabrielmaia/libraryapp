import { Component, Input } from '@angular/core';
import { Book } from '../model/book'; // Import the Book interface
import { RentModalComponent } from '../rent-modal/rent-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  constructor(private dialog: MatDialog) { }

  @Input() book = {} as Book;

  formatUtcTimestamp(utcTimestamp: number) {
    const date = new Date(utcTimestamp);
    return date.toISOString(); // Format as ISO date string or use a different format
  }

  openRentModal() {
    const dialogRef = this.dialog.open(RentModalComponent, {
      width: '300px',
      data: { book: this.book },
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
      }
    });
  }
}
