import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BookPresentation } from 'app/models';

@Component({
  selector: 'ws-book-preview-list',
  templateUrl: './book-preview-list.component.html',
  styleUrls: ['./book-preview-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookPreviewListComponent {
  @Input() books: BookPresentation[];

  get empty(): boolean {
    return this.books.length === 0;
  }
}