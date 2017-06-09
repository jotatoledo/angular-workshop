import { Component, Input, isDevMode } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BookService } from 'app/services';
import { BookDetail } from 'app/models';

@Component({
  selector: 'ws-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.css']
})
export class BookDetailsPageComponent {
  inCollection$: Observable<boolean>;
  book$: Observable<BookDetail>;
  constructor(
    private _bookService: BookService,
    private _route: ActivatedRoute
  ) {
    this.book$ = this._bookService.getBook(this.bookId);
    this.inCollection$ = this._bookService.isInCollection(this.bookId);
  }

  private get bookId() {
    return this._route.snapshot.params['id'];
  }

  handleAdd(event: BookDetail) {
    if (isDevMode()) {
      console.log('BookDetailsPageComponent -> handleAdd: ' + event.id);
    }
    this._bookService.addToCollection(event);
    this.inCollection$ = this._bookService.isInCollection(event.id);
  }

  handleRemove(event: string) {
    if (isDevMode()) {
      console.log('BookDetailsPageComponent -> handleRemove: ' + event);
    }
    this._bookService.removeFromCollection(event);
    this.inCollection$ = this._bookService.isInCollection(event);
  }
}
