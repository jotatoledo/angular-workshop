import { Component, isDevMode, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { BookService } from 'app/books/services';
import { BookQuery, DEFAULT_BOOK_QUERY_RESULT, BookPresentation } from 'app/models/book';
import { State } from '../../../ngrx';
import { getStoreLoading, getStoreResults, getStoreFilter, SearchAction } from '../../ngrx';

@Component({
  selector: 'ws-find-book-page',
  templateUrl: './find-book-page.component.html',
  styleUrls: ['./find-book-page.component.css']
})
export class FindBookPageComponent {
  loading$: Observable<boolean>;
  results$: Observable<BookPresentation[]>;
  filter$: Observable<string>;
  constructor(
    private _store: Store<State>,
    private _bookService: BookService
  ) {
    this.loading$ = _store.select(getStoreLoading);
    this.results$ = _store.select(getStoreResults);
    this.filter$ = _store.select(getStoreFilter);
  }

  handleSearch(event: string) {
    if (isDevMode()) {
      console.log('FindBookPageComponent -> handleSearch: ' + event);
    }
    this._store.dispatch(new SearchAction(event));
  }
}
