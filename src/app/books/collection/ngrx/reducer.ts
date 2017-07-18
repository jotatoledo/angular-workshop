import { BookPresentation, BookDetail } from 'app/models/book';
import * as fromCollection from './actions';

export interface State {
    selected: BookDetail;
    collection: { [id: string]: BookPresentation };
};

const initialState: State = {
    selected: null,
    collection: {}
};

export function reducer(state = initialState, action: fromCollection.Actions): State {
    switch (action.type) {
        case fromCollection.LOAD_COMPLETED: {
            const selected = action.payload;
            if (state.collection[selected.id]) {
                const collection = Object.assign({}, state.collection);
                collection[selected.id] = selected;
                return Object.assign({}, state, {
                    selected,
                    collection
                });
            }
            return Object.assign({}, state, {
                selected
            });
        }
        case fromCollection.ADD_BOOK: {
            return state;
        }
        default: {
            return state;
        }
    }
}
