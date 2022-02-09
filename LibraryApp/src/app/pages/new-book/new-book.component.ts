import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.module';
import { NgForm } from '@angular/forms';
import { BookService } from '../../shared/services/book/book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  constructor(
    public bookService: BookService
  ) { }

  ngOnInit(): void { }

  onSubmit(form: NgForm) {
    this.bookService.postBook().subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }
    );
    window.alert('Your book has been added!');
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.bookService.formData = new Book();
  }
}
