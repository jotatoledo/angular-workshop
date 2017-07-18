import { Action } from '@ngrx/store';

export const SET_LANG = '[Language] Set lang';

export class SetLangAction implements Action {
    readonly type = SET_LANG;
    constructor(public payload: string) { }
}

export type Actions = SetLangAction;
