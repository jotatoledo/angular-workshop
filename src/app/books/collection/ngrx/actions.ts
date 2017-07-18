import { Action } from '@ngrx/store';

import { BookDetail } from 'app/models/book';

export const ADD_BOOK = '[Collection] Add book';
export const REMOVE_BOOK = '[Collection] Remove book';

export const LOAD = '[Collection] Load book';
export const LOAD_COMPLETED = '[Collection] Loaded';
export const LOAD_FAILED = '[Collection] Load failed';

export class LoadAction implements Action {
    readonly type = LOAD;
    constructor(public payload: string) { }
}

export class LoadCompletedAction implements Action {
    readonly type = LOAD_COMPLETED;
    constructor(public payload: BookDetail) { }
}

export class LoadFailedAction implements Action {
    readonly type = LOAD_FAILED;
    constructor(public payload: string) { }
}

export class AddBookAction implements Action {
    readonly type = ADD_BOOK;
    constructor(public payload: BookDetail) { }
}

export class RemoveBookAction implements Action {
    readonly type = REMOVE_BOOK;
    constructor(public payload: BookDetail) { }
}

export type Actions =
    LoadAction | LoadCompletedAction | LoadFailedAction |
    AddBookAction | RemoveBookAction;
