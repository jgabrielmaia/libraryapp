import { Component, Input } from '@angular/core';
import { Book } from '../model/book'; // Import the Book interface

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book = {} as Book;

  selected: boolean = false;

  selectBook() {
    this.selected = !this.selected;
  }

  formatUtcTimestamp(utcTimestamp: number) {
    const date = new Date(utcTimestamp);
    return date.toISOString(); // Format as ISO date string or use a different format
  }

}
