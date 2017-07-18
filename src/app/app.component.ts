import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { NavigationService } from 'app/core/core.module';
import { State } from 'app/ngrx';
import { getCurrentLanguage, getLanguages, SetLangAction } from 'app/core/ngrx/language';

@Component({
  selector: 'ws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentLanguage$: Observable<string>;
  languages$: Observable<string[]>;

  constructor(
    private _store: Store<State>,
    private _translateService: TranslateService,
    private _navService: NavigationService,
    private _iconRegistry: MdIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _title: Title
  ) {
    this.currentLanguage$ = _store.select(getCurrentLanguage);
    this.languages$ = _store.select(getLanguages);
    _navService.startWatching();
    this._configurateTranslate();
    this._registerFlagIcons();
    this._registerIcons();
    this._title.setTitle('Angular Workshop -  Book Store');
  }

  handleLanguageChange(event: string) {
    console.log('lang:' + event);
    this._store.dispatch(new SetLangAction(event));
  }

  private _configurateTranslate() {
    const browserLang = this._translateService.getBrowserLang();
    this._store.dispatch(new SetLangAction(browserLang));
  }


  private _registerFlagIcons() {
    this._iconRegistry.addSvgIconInNamespace('flag', 'de',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/flags/de.svg'));
    this._iconRegistry.addSvgIconInNamespace('flag', 'en',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/flags/en.svg'));

    this._iconRegistry.addSvgIconInNamespace('flag', 'hu',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/flags/hu.svg'));

    this._iconRegistry.addSvgIconInNamespace('flag', 'es',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/flags/es.svg'));

    this._iconRegistry.addSvgIconInNamespace('flag', 'fr',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/flags/fr.svg'));
  }

  private _registerIcons() {
    this._iconRegistry.addSvgIconInNamespace('icons', 'heart',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/heart.svg'));
    this._iconRegistry.addSvgIconInNamespace('icons', 'github',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    this._iconRegistry.addSvgIconInNamespace('icons', 'bookshelf',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/bookshelf.svg'));
    this._iconRegistry.addSvgIconInNamespace('icons', 'angular',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/angular.svg'));
  }
}
