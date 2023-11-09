import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/book'; // Import the Book interface
import { ReserveModalComponent } from '../reserve-modal/reserve-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  constructor(private dialog: MatDialog) { }

  @Input() book = {} as Book;
  @Output() bookUpdated = new EventEmitter<Book>();

  openReserveModal() {
    const dialogRef = this.dialog.open(ReserveModalComponent, {
      width: '300px',
      data: { book: this.book },
    });
  
    dialogRef.afterClosed().subscribe((updatedBook) => {
      if (updatedBook) {
        this.bookUpdated.emit(updatedBook);
      }
    });
  }
}
