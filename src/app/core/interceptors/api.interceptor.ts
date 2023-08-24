import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log(request.url);

    let url = request.url;
    if (url.includes('/product/')) url = url.replace('/product/', '/products/');
    console.log(url);

    request = request.clone({
      url: `${environment.baseURL}${url}`,
    });
    return next.handle(request);
  }
}
