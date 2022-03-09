import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorHandleInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse): Observable<any> => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          errorMsg = `[Error] ${error.message}`;
        } else {
          errorMsg = `[Error ${error.status}] ${error.message}`;
        }
        return throwError(() => new Error(errorMsg));
      })
    );
  }
}
