import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ws-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent {
  constructor(private _location: Location) {}

  goBack() {
    this._location.back();
  }
}
