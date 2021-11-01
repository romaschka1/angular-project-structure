import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() { }

  // Override request domain from "localhost" to your custom value
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    const apiReq = req.clone({ url: environment.API_URL + req.url });

    return next.handle(apiReq);
  }
}
