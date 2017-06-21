import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { environment } from 'environments/environment';
import { extractData, handleError } from '../util';
import { BookQuery, BookDetail, BookPresentation } from 'app/models';

/**
 * API specification: https://developers.google.com/books/docs/v1/using
 */
@Injectable()
export class BookService {
  private _endPoint: string;
  private readonly collection: BookPresentation[];
  constructor(
    private _http: Http
  ) {
    this.collection = [];
    this._endPoint = environment.bookServiceEndPoint;
  }

  queryBooks(filter: string, startIndex = 0, maxResults = 20): Observable<BookQuery> {
    return this._http.get(`${this._endPoint}`, this.queryParams(filter, startIndex, maxResults))
      .map(extractData)
      .catch(handleError)
      .delay(300);
  }

  private queryParams(filter: string, startIndex: number, maxResults: number): RequestOptions {
    const params = new URLSearchParams();
    params.set('q', filter);
    params.set('startIndex', startIndex.toString());
    params.set('maxResults', maxResults.toString());
    return new RequestOptions({
      params: params
    });
  }

  getBook(id: string): Observable<BookDetail> {
    return this._http.get(`${this._endPoint}/${id}`)
      .map(extractData)
      .catch(handleError)
      .delay(300);
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
