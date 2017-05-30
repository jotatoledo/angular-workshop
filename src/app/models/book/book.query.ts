import { BookPresentation } from './book.presentation';

export interface BookQuery {
    totalItems: number;
    kind: string;
    items: BookPresentation[];
}

export const DEFAULT_BOOK_QUERY_RESULT: BookQuery = {
    items: [],
    kind: null,
    totalItems: 0
};
