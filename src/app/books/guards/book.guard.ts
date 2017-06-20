import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { BookService } from 'app/books/services';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class BookGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _bookService: BookService,
  ) { }

  private existBook(id: string): Observable<boolean> {
    return this._bookService.getBook(id)
      .mergeMap(() => {
        return of(true);
      })
      .catch(error => {
        // TODO refactor to navigate to relative path
        this._router.navigate(['./404']);
        return of(false);
      });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.existBook(next.params['id'] )
  }
}
