import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'ws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private _iconRegistry: MdIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _title: Title
  ) {
    this.registerIcons();
    this._title.setTitle('Angular Workshop -  Book Store');
  }

  private registerIcons() {
    this._iconRegistry.addSvgIconInNamespace('icons', 'heart',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/heart.svg'));
    this._iconRegistry.addSvgIconInNamespace('icons', 'github',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    this._iconRegistry.addSvgIconInNamespace('icons', 'bookshelf',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/bookshelf.svg'));
  }
}
