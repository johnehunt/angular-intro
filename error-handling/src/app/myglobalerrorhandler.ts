import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class MyGlobalErrorHandler implements ErrorHandler {
  constructor(
    // Because the ErrorHandler is created before the providers, 
    // we’ll have to use the Injector to get them.
    private injector: Injector,
) { }
  handleError(error) {
    console.log('MyGlobalErrorHandler: ', error);   
    if (error instanceof HttpErrorResponse) {
      console.log('Its a server error');
   } else {
     console.log('Its a client side error');   
     // Handle Client Error (Angular Error, ReferenceError...)
     const router = this.injector.get(Router);
     router.navigate(['/error'], { queryParams: {error: error} }); 
   } 
  }
}