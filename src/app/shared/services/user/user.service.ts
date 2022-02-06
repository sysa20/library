import { Injectable } from '@angular/core';
import { Book } from '@app/models/book.module';
import { Subscriber } from 'rxjs';
import { User } from '../../../models/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];

  constructor() { }

  addUser(user: User) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }

  removeUser(user: User) {
    if (!user.has_lent) {
      this.users = this.users.filter(item => item !== user);
      window.alert("User is deleted");
    }
    else {
      window.alert("User cannot be deleted, has borrowed book");
    }
  }

  addBookForUser(book: Book, user: User) {
    let index = this.users.indexOf(user);
    user.lent_books?.push(book);
    user.has_lent = true;
    this.users[index] = user;
    window.alert("The book is borrowed for user");
  }

  getBookFromUser(book: Book, user: User) {
    let index = this.users.indexOf(user);
    let indexBook = user.lent_books?.indexOf(book);
    if (indexBook !== undefined) {
      user.lent_books?.splice(indexBook!);
      if (user.lent_books?.length! === 0) {
        user.has_lent = false;
      }
    }
    this.users[index] = user;
    window.alert("The book is back from user");
  }
}
