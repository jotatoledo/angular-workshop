import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BookQuery, BookDetail } from '@ws/models';
import { environment } from '@environment';

/**
 * API specification: https://developers.google.com/books/docs/v1/using
 */
@Injectable()
export class BookService {
  private _endPoint: string;
  constructor(private _http: HttpClient) {
    this._endPoint = environment.bookServiceEndPoint;
  }

  queryBooks(filter: string, startIndex = 0, maxResults = 20): Observable<BookQuery> {
    const params = this.queryParams(filter, startIndex, maxResults);
    return this._http.get<BookQuery>(`${this._endPoint}`, {
      params
    });
  }

  private queryParams(filter: string, startIndex: number, maxResults: number): HttpParams {
    let params = new HttpParams();
    return params
      .set('q', filter)
      .set('startIndex', startIndex.toString())
      .set('maxResults', maxResults.toString());
  }

  getBook(id: string): Observable<BookDetail> {
    return this._http.get<BookDetail>(`${this._endPoint}/${id}`);
  }
}
