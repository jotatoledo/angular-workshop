import { browser, by, element } from 'protractor';

export class WorkshopPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ws-root h1')).getText();
  }
}
