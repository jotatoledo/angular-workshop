import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private _title: Title
  ) {
    this._title.setTitle('Angular Workshop -  Book Store');
  }
}
