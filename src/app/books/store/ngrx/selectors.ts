import { createSelector } from '@ngrx/store';

import { getStoreState } from '../../ngrx';
import * as store from './reducer';

export const getStoreResults = createSelector(getStoreState, store.getResults);
export const getStoreLoading = createSelector(getStoreState, store.getLoading);
export const getStoreFilter = createSelector(getStoreState, store.getFilter);
