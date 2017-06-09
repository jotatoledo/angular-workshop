import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BookPresentation } from 'app/models';

@Component({
  selector: 'ws-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookPreviewComponent {
  @Input() book: BookPresentation;

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

  get thumbnail(): string | boolean {
    if (this.book.volumeInfo.imageLinks) {
      return this.book.volumeInfo.imageLinks.smallThumbnail;
    }

    return false;
  }
}
