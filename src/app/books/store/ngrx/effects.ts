import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as fromStore from './actions';
import { BookService } from '../../services';

@Injectable()
export class StoreEffects {
    @Effect()
    search$: Observable<Action> = this._actions$
        .ofType(fromStore.SEARCH)
        .map(toPayload)
        .switchMap(f => this._booksService.queryBooks(f)
            .map(r => new fromStore.SearchCompletedAction(r))
            .catch(error => of(new fromStore.SearchFailedAction(error))));

    constructor(
        private _actions$: Actions,
        private _booksService: BookService) { }
}
