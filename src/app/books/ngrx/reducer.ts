import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from '../store/ngrx/reducer';

export interface BooksState {
    store: fromStore.State
};

export interface State {
    books: BooksState;
}

export const reducers = {
    store: fromStore.reducer
};

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
*/
const getBooksState = createFeatureSelector<BooksState>('books');

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */
export const getStoreState = createSelector(
    getBooksState,
    (state: BooksState) => state.store
);
