import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '@app/shared/services/user/user.service';
import { User } from '@app/models/user.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from '@app/models/book.module';
import { BookService } from '@app/shared/services/book/book.service';

@Component({
  selector: 'app-delete-users-books',
  templateUrl: './delete-users-books.component.html',
  styleUrls: ['./delete-users-books.component.scss']
})
export class DeleteUsersBooksComponent implements OnInit {
  entityForm: FormGroup;
  books: Book[] | undefined;

  @Input()
  user: User;

  constructor(
    public userService: UserService,
    private fb: FormBuilder,
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.entityForm = this.fb.group({
      book: [null]
    });
    this.books = this.user.lent_books;
  }

  submit() {
    this.userService.getBookFromUser(this.entityForm.value.book, this.user);
    this.bookService.bookIsBack(this.entityForm.value.book);
  }
}
