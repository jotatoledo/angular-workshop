import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { NavigationService } from '@ws/core';

@Component({
  selector: 'ws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(_navService: NavigationService, private _title: Title) {
    _navService.startWatching();
    this._title.setTitle('Angular Workshop -  Book Store');
  }
}
