import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromLanguage from './reducer';

const getLanguageState = createFeatureSelector<fromLanguage.State>('language');

export const getCurrentLanguage = createSelector(getLanguageState, fromLanguage.getCurrentLanguage);
export const getLanguages = createSelector(getLanguageState, fromLanguage.getLanguages);
