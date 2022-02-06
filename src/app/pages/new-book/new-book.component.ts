import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../models/book.module';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from '../../shared/services/book/book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {
  entity: Book = new Book();
  entityForm: FormGroup;

  constructor(
    private router: Router,
    private bookService: BookService
  ) {
    this.entityForm = new FormGroup({
      autor_first_name: new FormControl(),
      autor_last_name: new FormControl(),
      book_name: new FormControl(),
      count_borrowed: new FormControl(0)
    })
  }

  ngOnInit(): void { }

  submit(event: Event, entity: Book): void {
    event.preventDefault();
    entity.count_borrowed = 0;
    this.bookService.addBook(entity);
    window.alert('Your book has been added!');
    this.router.navigate(['./books']);
  }
}
