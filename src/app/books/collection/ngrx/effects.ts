import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as fromCollection from './actions';
import { BookService } from '../../services';

@Injectable()
export class CollectionEffects {


    constructor(
        private _actions$: Actions,
        private _bookService: BookService
    ) { }
}
