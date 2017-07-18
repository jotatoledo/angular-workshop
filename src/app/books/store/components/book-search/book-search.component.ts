import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';
import { TdSearchBoxComponent } from '@covalent/core';

@Component({
  selector: 'ws-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookSearchComponent {
  @ViewChild(TdSearchBoxComponent)
  box: TdSearchBoxComponent;

  private _filter: string;
  @Input('filter')
  get filter() { return this._filter; }
  set filter(value: string) {
    this._filter = value;
    this.box.value = value;
  }


  @Output()
  search = new EventEmitter<string>();


  handleSearch(event: string) {
    this.search.emit(event);
  }
}
