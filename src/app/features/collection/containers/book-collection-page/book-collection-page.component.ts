import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { BookPresentation } from '@ws/models';
import { BookCollectionService } from '@ws/core';

@Component({
  selector: 'ws-book-collection-page',
  templateUrl: './book-collection-page.component.html',
  styleUrls: ['./book-collection-page.component.scss']
})
export class BookCollectionPageComponent {
  books$: Observable<BookPresentation[]>;
  constructor(private _collectionService: BookCollectionService) {
    this.books$ = this._collectionService.getCollection();
  }
}
