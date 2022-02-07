import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../../../models/book.module';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [];
  readonly baseUrl = 'http://localhost:5263/api/books'
  formData: Book = new Book();

  constructor(private http: HttpClient) { }

  postBook() {
    return this.http.post(this.baseUrl, this.formData);
  }

  addBook(book: Book) {
    this.books.push(book);
  }

  getBook() {
    return this.books;
  }

  removeBook(book: Book) {
    if (book.count_borrowed == 0) {
      this.books = this.books.filter(item => item !== book);
      window.alert("The book is deleted");
    }
    else {
      window.alert("The book is on loan, it cannot be deleted");
    }
  }

  bookBorrowed(book: Book) {
    let index = this.books.indexOf(book);
    this.books[index].count_borrowed = this.books[index].count_borrowed + 1;
  }

  bookIsBack(book: Book) {
    let index = this.books.indexOf(book);
    this.books[index].count_borrowed = this.books[index].count_borrowed - 1;
  }
}
