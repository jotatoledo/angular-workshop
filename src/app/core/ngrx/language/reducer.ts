import * as language from './actions';

export interface State {
    currentLanguage: string;
    languages: string[];
}

const initialState: State = {
    currentLanguage: 'en',
    languages: ['en', 'de', 'es']
};

export function reducer(state = initialState, action: language.Actions): State {
    switch (action.type) {
        case language.SET_LANG: {
            const currentLanguage = action.payload;
            if (currentLanguage == null || currentLanguage === '' || state.languages.find(l => l === currentLanguage) === undefined) {
                return state;
            }
            return Object.assign({}, state, {
                currentLanguage
            });
        }
        default: {
            return state;
        }
    }
}

export const getCurrentLanguage = (s: State) => s.currentLanguage;
export const getLanguages = (s: State) => s.languages;
