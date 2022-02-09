import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from '@app/models/book.module';
import { User } from '@app/models/user.module';
import { BookService } from '@app/shared/services/book/book.service';
import { UserService } from '@app/shared/services/user/user.service';

@Component({
  selector: 'app-add-users-books',
  templateUrl: './add-users-books.component.html',
  styleUrls: ['./add-users-books.component.scss']
})
export class AddUsersBooksComponent implements OnInit {
  entityForm: FormGroup;

  @Input()
  user: User;

  constructor(
    public bookService: BookService,
    public userService: UserService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.bookService.getBooks();
    this.entityForm = this.fb.group({
      book: [null]
    });
  }

  submit() {
    this.userService.addBookForUser(this.user);
    this.bookService.bookBorrowed(this.entityForm.value.book, this.user);
  }

}
