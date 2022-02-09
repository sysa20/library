import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '@app/models/book.module';

@Pipe({
  name: 'searchBook'
})
export class SearchBookPipe implements PipeTransform {

  transform(books: Book[], searchText: string): unknown {
    if (!books) {
      return [];
    }
    if (!searchText) {
      return books;
    }

    return books.filter((book: Book) =>
      book.book_name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    );
  }

}
