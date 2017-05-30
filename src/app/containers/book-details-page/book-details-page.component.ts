import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BookService } from '../../services';
import { BookDetail } from '../../models';

@Component({
  selector: 'ws-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.css']
})
export class BookDetailsPageComponent {
  book$: Observable<BookDetail>;
  constructor(
    private _bookService: BookService,
    private _route: ActivatedRoute
  ) {
    this.book$ = this._bookService.getBook(this.bookId);
  }

  private get bookId(){
    return this._route.snapshot.params['id'];
  }

  handleAdd(event: string) {

  }

  handleRemove(event: string) {

  }
}
