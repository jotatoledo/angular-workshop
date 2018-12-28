import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ws-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent {
  @Output() search = new EventEmitter<string>();


  handleSearch(event: string) {
    this.search.emit(event);
  }
}
