import { Component, Input } from '@angular/core';

@Component({
  selector: 'ws-empty-collection',
  templateUrl: './empty-collection.component.html',
  styleUrls: ['./empty-collection.component.css']
})
export class EmptyCollectionComponent {
  @Input() title = 'Collection empty';
  @Input() subtitle = 'There are no entries that matches your criteria';
}
