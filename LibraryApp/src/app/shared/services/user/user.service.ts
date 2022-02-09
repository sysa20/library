import { Injectable } from '@angular/core';
import { Book } from '@app/models/book.module';
import { Subscriber } from 'rxjs';
import { User } from '../../../models/user.module';
import { HttpClient } from '@angular/common/http';
import { LocationChangeEvent } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  user: User;
  lent_books: Book[] = [];
  readonly baseUrl = 'http://localhost:5000/api/users'
  formData: User = new User();
  readonly bookUrl = 'http://localhost:5000/api/books/user/';

  constructor(private http: HttpClient) { }

  postUser() {
    return this.http.post(this.baseUrl, this.formData);
  }

  getUsers() {
    this.http.get(this.baseUrl)
      .toPromise()
      .then(res =>
        this.users = res as User[])
  }

  getUser(id: number) {
    this.http.get(this.baseUrl + "/" + id)
      .toPromise()
      .then(res =>
        this.user = res as User)
  }

  getUserBooks(id: number) {
    this.http.get(this.bookUrl + id)
      .toPromise()
      .then(res => this.lent_books = res as Book[])
  }

  removeUser(user: User) {
    if (user.lent_books == 0) {
      this.http.delete(this.baseUrl + "/" + user.id)
        .subscribe(() => console.log('Delete successful'));
      window.alert("User is deleted");
    }
    else {
      window.alert("User cannot be deleted, has borrowed book");
    }
  }

  addBookForUser(user: User) {
    user.lent_books = user.lent_books + 1;
    this.http.put(this.baseUrl + "/" + user.id, user)
      .subscribe(() => console.log('User is edit'));
    window.alert("The book is borrowed for user");
  }

  getBookFromUser(user: User) {
    user.lent_books = user.lent_books - 1;
    this.http.put(this.baseUrl + "/" + user.id, user)
      .subscribe(() => console.log('User is edit'));
    window.alert("The book is back from user");
  }

  performFilter(filterBy: string): User[] {
    filterBy = filterBy.toLowerCase();
    return this.users.filter((user: User) =>
      user.first_name.toLowerCase().indexOf(filterBy) !== -1 ||
      user.last_name.toLowerCase().indexOf(filterBy) !== -1);
  }
}
