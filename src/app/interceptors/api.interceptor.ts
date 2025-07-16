import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpEventType,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        const method = req.method;
        if (event.type === HttpEventType.Response && method === 'POST') {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            data: {
              message: 'Richiesta salvata con successo!',
              type: 'success',
            },
          });
        }
      }),
      catchError((error: HttpErrorResponse) => {
        const method = req.method;
        if (method === 'POST')
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            data: {
              message: 'Errore durante il salvataggio della richiesta',
              type: 'error',
            },
          });

        return throwError(() => error);
      })
    );
  }
}
