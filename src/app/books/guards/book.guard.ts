import { mergeMap, catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { BookService } from 'app/books/services';

@Injectable()
export class BookGuard implements CanActivate {
  constructor(private _router: Router, private _bookService: BookService) {}

  private existBook(id: string): Observable<boolean> {
    return this._bookService.getBook(id).pipe(
      map(_ => true),
      catchError(_ => {
        this._router.navigate(['./404']);
        return of(false);
      })
    );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.existBook(next.params['id']);
  }
}
