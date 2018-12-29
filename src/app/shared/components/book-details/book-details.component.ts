import { Component, Input, ChangeDetectionStrategy, TemplateRef } from '@angular/core';

import { BookDetail } from '@ws/models';

@Component({
  selector: 'ws-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent {
  @Input() actionsTemplate: TemplateRef<any>;
  @Input() book: BookDetail;
  @Input() inCollection: boolean;

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
    return this.book.volumeInfo.description || '<i>No description available</i>';
  }

  get thumbnail() {
    return this.book.volumeInfo.imageLinks && this.book.volumeInfo.imageLinks.smallThumbnail;
  }

  get actionContext() {
    return {
      $implicit: this.book,
      inCollection: this.inCollection
    };
  }
}
