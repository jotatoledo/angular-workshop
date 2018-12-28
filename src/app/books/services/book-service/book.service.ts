import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/Observable/of";
import { environment } from "environments/environment";
import { extractData, handleError } from "../util";
import { BookQuery, BookDetail, BookPresentation } from "app/models";

/**
 * API specification: https://developers.google.com/books/docs/v1/using
 */
@Injectable()
export class BookService {
  private _endPoint: string;
  private readonly collection: BookPresentation[];
  constructor(private _http: HttpClient) {
    this.collection = [];
    this._endPoint = environment.bookServiceEndPoint;
  }

  queryBooks(
    filter: string,
    startIndex = 0,
    maxResults = 20
  ): Observable<BookQuery> {
    const params = this.queryParams(filter, startIndex, maxResults);
    return this._http
      .get<BookQuery>(`${this._endPoint}`, {
        params
      })
      .map(extractData)
      .catch(handleError)
      .delay(300);
  }

  private queryParams(
    filter: string,
    startIndex: number,
    maxResults: number
  ): HttpParams {
    let params = new HttpParams();
    return params
      .set("q", filter)
      .set("startIndex", startIndex.toString())
      .set("maxResults", maxResults.toString());
  }

  getBook(id: string): Observable<BookDetail> {
    return this._http
      .get<BookDetail>(`${this._endPoint}/${id}`)
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
