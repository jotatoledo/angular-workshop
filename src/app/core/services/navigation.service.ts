import { Injectable } from '@angular/core';
import {
  Router, ActivatedRoute,
  NavigationEnd, NavigationStart,
  NavigationError, NavigationCancel
} from '@angular/router';
import { TdLoadingService } from '@covalent/core';

@Injectable()
export class NavigationService {
  constructor(
    private _loadingService: TdLoadingService,
    private _router: Router,
  ) {
    console.log('New nav service');
  }

  public startWatching() {
    this.registerLoadingBarOnNavStart();
    this.resolveLoadingBarOnNavEnd();
    this.resolveLoadingBarOnNavCancel();
    this.resolveLoadingBarOnNavError();
  }

  private registerLoadingBarOnNavStart() {
    this._router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe(event => {
        this._loadingService.register('app.loading');
      });
  }

  private resolveLoadingBarOnNavCancel() {
    this._router.events
      .filter(event => event instanceof NavigationCancel)
      .subscribe(event => {
        setTimeout(() => {
          this._loadingService.resolve('app.loading');
        }, 500);
      });
  }

  private resolveLoadingBarOnNavError() {
    this._router.events
      .filter(event => event instanceof NavigationError)
      .subscribe(event => {
        setTimeout(() => {
          this._loadingService.resolve('app.loading');
        }, 500);
      });
  }

  private resolveLoadingBarOnNavEnd() {
    this._router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        setTimeout(() => {
          this._loadingService.resolve('app.loading');
        }, 500);
      });
  }
}
