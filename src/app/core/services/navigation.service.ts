import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart, NavigationError, NavigationCancel } from '@angular/router';
import { TdLoadingService } from '@covalent/core';

@Injectable()
export class NavigationService {
  private id = 'app.loading';
  constructor(
    private _loadingService: TdLoadingService,
    private _router: Router,
  ) {  }

  public startWatching() {
    this.startLoading();
    this.resolveLoading();
  }

  private startLoading() {
    this._router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe(event => {
        this._loadingService.register(this.id);
      });
  }

  private resolveLoading() {
    this._router.events
      .filter(event => event instanceof NavigationCancel || event instanceof NavigationError || event instanceof NavigationEnd)
      .subscribe(event => {
        setTimeout(() => {
          this._loadingService.resolve(this.id);
        }, 300);
      });
  }
}
