import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BookDetail } from '../../models';

@Component({
  selector: 'ws-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.css']
})
export class BookDetailsPageComponent {
  @Input() book: BookDetail;
  @Input() inCollection: boolean;
  @Output() add = new EventEmitter<BookDetail>();
  @Output() remove = new EventEmitter<BookDetail>();

  handleAdd() {

  }

  handleRemove() {

  }
}
