import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../../models/user.module';
import { Book } from '../../../models/book.module';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[];
  readonly baseUrl = 'http://localhost:5000/api/books'
  formData: Book = new Book();

  constructor(private http: HttpClient) { }

  postBook() {
    return this.http.post(this.baseUrl, this.formData);
  }

  getBooks() {
    this.http.get(this.baseUrl)
      .toPromise()
      .then(res => this.books = res as Book[])
  }

  removeBook(book: Book) {
    console.log(book);
    if (book.is_borrowed == false) {
      this.http.delete(this.baseUrl + "/" + book.id)
        .subscribe(() => console.log('Delete successful'));
      window.alert("The book is deleted");
    }
    else {
      window.alert("The book is on loan, it cannot be deleted");
    }
  }

  bookBorrowed(book: Book, user: User) {
    book.userid = user.id;
    book.is_borrowed = true;
    this.http.put(this.baseUrl + "/" + book.id, book)
      .subscribe(() => console.log('Book is edit'));
  }

  bookIsBack(book: Book) {
    book.userid = -1;
    book.is_borrowed = false;
    this.http.put(this.baseUrl + "/" + book.id, book)
      .subscribe(() => console.log('Book is edit'));
  }
}
