import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { BookDetail } from '@ws/models';
import { BookService, BookCollectionService } from '@ws/core';

@Component({
  selector: 'ws-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.scss']
})
export class BookDetailsPageComponent {
  inCollection$: Observable<boolean>;
  book$: Observable<BookDetail>;
  constructor(
    private _bookService: BookService,
    private _collectionService: BookCollectionService,
    private _route: ActivatedRoute
  ) {
    this.book$ = this._bookService.getBook(this.bookId);
    this.inCollection$ = this._collectionService.isInCollection(this.bookId);
  }

  private get bookId() {
    return this._route.snapshot.params['id'];
  }

  handleAdd(event: BookDetail) {
    this._collectionService.addToCollection(event);
    this.inCollection$ = this._collectionService.isInCollection(event.id);
  }

  handleRemove(event: string) {
    this._collectionService.removeFromCollection(event);
    this.inCollection$ = this._collectionService.isInCollection(event);
  }
}
