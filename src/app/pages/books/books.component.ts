import { Component, OnInit } from '@angular/core';
import { BookService } from '../../shared/services/book/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public books = this.bookService.getBook();
  searchText = '';

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void { }
}
