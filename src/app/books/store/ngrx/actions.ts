import { Action } from '@ngrx/store';

import { BookDetail, BookQuery } from 'app/models/book';

export const SEARCH = '[Store] Search';
export const SEARCH_COMPLETED = '[Search] Search complete';
export const SEARCH_FAILED = '[Search] Search failed';

export const LOAD = '[Store] Load';
export const LOAD_COMPLETED = '[Store] Load completed';
export const LOAD_FAILED = '[Store] Load failed';

export class SearchAction implements Action {
    readonly type = SEARCH;
    constructor(public payload: string) { }
}

export class SearchCompletedAction implements Action {
    readonly type = SEARCH_COMPLETED;
    constructor(public payload: BookQuery) { }
}

export class SearchFailedAction implements Action {
    readonly type = SEARCH_FAILED;
    constructor(public payload: string) { }
}

export type Actions = SearchAction | SearchCompletedAction | SearchFailedAction;
