import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { ObjectId } from 'mongodb';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://127.0.0.1:5281/api';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books`);
  }

  addBook(newBook: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}/books`, newBook);
  }

  updateBook(updatedBook: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/books/${updatedBook.id}`, updatedBook);
  }

  isBookAvailable(bookId: ObjectId, isAvailable: boolean): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/books/${bookId}/availability`, isAvailable);
  }
}
