import { isDevMode } from '@angular/core';
import { ActionReducerMap, ActionReducer, combineReducers, compose } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

import * as fromLanguage from '../core/ngrx/language/reducer';
import { environment } from 'environments/environment';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
    language: fromLanguage.State;
    // router: RouterReducerState
};

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
    language: fromLanguage.reducer,
    // router: routerReducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    if (isDevMode()) {
        return developmentReducer(state, action);
    }
    return productionReducer(state, action);
};


