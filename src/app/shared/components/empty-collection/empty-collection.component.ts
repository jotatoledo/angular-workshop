import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ws-empty-collection',
  templateUrl: './empty-collection.component.html',
  styleUrls: ['./empty-collection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyCollectionComponent {
  @Input() title = 'Collection empty';
  @Input() subtitle = 'There are no entries that matches your criteria';
}
