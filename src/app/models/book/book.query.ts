import { BookPresentation } from './book.presentation';

export interface BookQuery {
    totalItems: number;
    kind: string;
    items: BookPresentation[];
}
