import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';

@Injectable()
export class SearchService {
    private url: string = 'http://localhost:8080/shop/';

    constructor(private http: HttpClient) { }

    search(term: string) {
        console.log('search(', term, ')');
        return this.http
            .get(this.url + term)
            .pipe(
                retry(3), // retry a failed request up to 3 times
                tap(response => console.log(response)),
                catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    }
}
