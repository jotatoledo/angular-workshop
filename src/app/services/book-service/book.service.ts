import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { extractData, handleError } from '../util';

@Injectable()
export class BookService {
  private _endPoint: string;
  constructor(
    private _http: Http
  ) {
    this._endPoint = '';
  }

  queryBooks(filter: string): Observable<any[]> {
    return this._http.get(`${this._endPoint}`)
      .map(extractData)
      .catch(handleError)
      .delay(300);
  }

  getBook(id: string): Observable<any> {
    return this._http.get(`${this._endPoint}`)
      .map(extractData)
      .catch(handleError)
      .delay(300);
  }
}
