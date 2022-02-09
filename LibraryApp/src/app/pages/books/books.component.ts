import { Component, OnInit } from '@angular/core';
import { BookService } from '../../shared/services/book/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  searchText = '';

  constructor(
    public bookService: BookService
  ) {

  }

  ngOnInit(): void {
    this.bookService.getBooks();
  }
}
