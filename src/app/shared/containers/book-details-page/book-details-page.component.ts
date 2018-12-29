import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tdHeadshakeAnimation } from '@covalent/core';
import { Observable } from 'rxjs';

import { BookDetail } from '@ws/models';
import { BookService, BookCollectionService } from '@ws/core';

@Component({
  selector: 'ws-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

  animations: [tdHeadshakeAnimation]
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

  toggleInCollectio(book: BookDetail, favorite: boolean) {
    if (favorite) {
      this._collectionService.removeFromCollection(book.id);
    } else {
      this._collectionService.addToCollection(book);
    }
    this.inCollection$ = this._collectionService.isInCollection(book.id);
  }
}
