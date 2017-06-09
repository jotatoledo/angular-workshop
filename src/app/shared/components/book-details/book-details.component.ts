import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { BookDetail } from 'app/models';

@Component({
  selector: 'ws-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent {
  @Input() book: BookDetail;
  @Input() inCollection: boolean;
  @Output() add = new EventEmitter<BookDetail>();
  @Output() remove = new EventEmitter<string>();

  handleAdd() {
    this.add.emit(this.book);
  }

  handleRemove() {
    this.remove.emit(this.id);
  }

  /**
    * Tip: Utilize getters to keep templates clean
    */
  get id() {
    return this.book.id;
  }

  get title() {
    return this.book.volumeInfo.title;
  }

  get subtitle() {
    return this.book.volumeInfo.subtitle;
  }

  get description() {
    return this.book.volumeInfo.description;
  }

  get thumbnail() {
    return this.book.volumeInfo.imageLinks
      && this.book.volumeInfo.imageLinks.smallThumbnail;
  }
}
