import { Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';

/**
 * Extracts the information received as response from a HTTP request
 * @param res the response body
 */
export const extractData = (res: Response) => {
    const body = res.json();
    return body || {};
};

/**
 * Handles a possible error in the response of an HTTP request
 * @param error the error catched on a HTTP response
 */
export const handleError = (error: Response | any): Observable<string> => {
    let errMsg: string;
    if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.message || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} Details: ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    return _throw(errMsg);
};
