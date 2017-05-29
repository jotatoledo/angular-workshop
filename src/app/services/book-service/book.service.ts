import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { extractData, handleError } from '../util';
import { BookQuery, BookDetail } from '../../models';

/**
 * API specification: https://developers.google.com/books/docs/v1/using
 */
@Injectable()
export class BookService {
  private _endPoint: string;
  constructor(
    private _http: Http
  ) {
    this._endPoint = 'https://www.googleapis.com/books/v1/volumes';
  }

  queryBooks(filter: string): Observable<BookQuery> {
    return this._http.get(`${this._endPoint}`, {
      search: this.queryParams(filter)
    })
      .map(extractData)
      .catch(handleError)
      .delay(300);
  }

  private queryParams(filter: string, startIndex = 0, maxResults = 10): URLSearchParams {
    const params = new URLSearchParams();
    params.set('q', filter);
    params.set('startIndex ', startIndex.toString());
    params.set('maxResults ', maxResults.toString());
    return params;
  }

  getBook(id: string): Observable<BookDetail> {
    return this._http.get(`${this._endPoint}/${id}`)
      .map(extractData)
      .catch(handleError)
      .delay(300);
  }
}
