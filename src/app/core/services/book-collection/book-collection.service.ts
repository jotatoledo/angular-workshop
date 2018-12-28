import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BookDetail, BookPresentation } from '@ws/models';

@Injectable()
export class BookCollectionService {
  private readonly collection: BookPresentation[];
  constructor() {
    this.collection = [];
  }

  addToCollection(book: BookDetail) {
    const index = this.collection.findIndex(b => b.id === book.id);
    if (index === -1) {
      const newElement: BookPresentation = {
        id: book.id,
        volumeInfo: book.volumeInfo
      };
      this.collection.push(newElement);
    }
  }

  removeFromCollection(id: string) {
    const index = this.collection.findIndex(b => b.id === id);
    if (index !== -1) {
      this.collection.splice(index, 1);
    }
  }

  isInCollection(id: string): Observable<boolean> {
    const inCollection = this.collection.find(b => b.id === id);
    return of(inCollection !== undefined);
  }

  getCollection(): Observable<BookPresentation[]> {
    return of(this.collection);
  }
}
