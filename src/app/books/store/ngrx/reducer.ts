import * as store from './actions';
import { BookQuery, BookDetail } from 'app/models/book';

export interface State {
    selected: BookDetail;
    filter: string;
    loading: boolean;
    store: BookQuery;
};

const initialState: State = {
    selected: null,
    filter: null,
    loading: false,
    store: {
        items: [],
        kind: null,
        totalItems: 0
    }
};

export function reducer(state = initialState, action: store.Actions): State {
    switch (action.type) {
        case store.SEARCH: {
            const filter = action.payload;
            return Object.assign({}, state, {
                filter,
                loading: true
            });
        }
        case store.SEARCH_COMPLETED: {
            const store = action.payload;
            return Object.assign({}, state, {
                store,
                loading: false
            });
        }
        case store.SEARCH_FAILED: {
            return Object.assign({}, state, {
                loading: false
            });
        }
        default: {
            return state;
        }
    }
}

export const getFilter = (s: State) => s.filter;
export const getResults = (s: State) => s.store.items;
export const getLoading = (s: State) => s.loading;
