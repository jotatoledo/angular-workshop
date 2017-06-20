import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BookService } from 'app/books//services';
import { BookPresentation } from 'app/models';

@Component({
  selector: 'ws-book-collection-page',
  templateUrl: './book-collection-page.component.html',
  styleUrls: ['./book-collection-page.component.css']
})
export class BookCollectionPageComponent {
  books$: Observable<BookPresentation[]>;
  constructor(
    private _bookService: BookService
  ) {
    this.books$ = this._bookService.getCollection();
  }
}
