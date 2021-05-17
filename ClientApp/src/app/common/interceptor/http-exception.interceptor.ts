import {
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpErrorResponse,
  HttpInterceptor
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { ErrorDialogService } from "../services/error-dialog.service";
import { LoaderService } from "../services/loader.service";

import { Injectable } from "@angular/core";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private errorDialogService: ErrorDialogService,
    private loadingDialogService: LoaderService
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingDialogService.isLoading.next(true);
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorDialogService.openDialog("Looks like API service is down. Please try after sometime or contact support team.", error.status);
        return throwError(error);
      }),
      finalize(() => {
        this.loadingDialogService.isLoading.next(false);
      })
    ) as Observable<HttpEvent<any>>;
  }
}
