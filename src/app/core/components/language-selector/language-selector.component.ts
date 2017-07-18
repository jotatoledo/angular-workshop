import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ws-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSelectorComponent {
  private _currentLanguage: string;
  @Input('currentLanguage')
  get currentLanguage() { return this._currentLanguage; }
  set currentLanguage(value: string) {
    console.log('set!');
    this._currentLanguage = value;
    this._translateService.use(value);
  }

  @Input()
  languages: string[];

  @Output()
  languageChange = new EventEmitter<string>();

  constructor(
    private _translateService: TranslateService
  ) { }

  handleLangeChange(languageSelected: string) {
    this.languageChange.emit(languageSelected);
  }
}
