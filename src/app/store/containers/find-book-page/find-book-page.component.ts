import { Component, isDevMode } from '@angular/core';
import { BookService } from 'app/books/services';
import { BookQuery, DEFAULT_BOOK_QUERY_RESULT } from 'app/models';

@Component({
  selector: 'ws-find-book-page',
  templateUrl: './find-book-page.component.html',
  styleUrls: ['./find-book-page.component.css']
})
export class FindBookPageComponent {
  loading = true;
  bookQueryResult: BookQuery;
  constructor(
    private _bookService: BookService
  ) {
    this.bookQueryResult = Object.assign({}, DEFAULT_BOOK_QUERY_RESULT);
  }

  handleSearch(event: string) {
    if (isDevMode()) {
      console.log('FindBookPageComponent -> handleSearch: ' + event);
    }
    if (!event || !event.length) { // true: the string is empty
      this.loading = true;
      this.bookQueryResult = Object.assign({}, DEFAULT_BOOK_QUERY_RESULT);
    } else {
      this.loading = false;
      this._bookService.queryBooks(event)
        .finally(() => this.loading = true)
        .subscribe(data => this.bookQueryResult = data);
    }
  }

  get books() {
    return this.bookQueryResult.items;
  }
}
