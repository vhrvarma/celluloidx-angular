import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";

import { AuthService } from "./auth.service";

import { Observable } from "rxjs/Observable";
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    /* if (request.headers.get('reqType') == 'multipart/form-data') {
      console.log("multi")
      request = request.clone({
        setHeaders: {
          token: `${this.auth.getToken()}`,
          reqType:undefined
        }
      });
      console.log("fbdhfbhdfbdh",request);
      
    } else {
      console.log("single")
      request = request.clone({
        setHeaders: {
          token: `${this.auth.getToken()}` ,
          "Content-Type": "application/json" 
          
        }
      });
    } */
    request = request.clone({
      setHeaders: {
        token: `${this.auth.getToken()}` 
      }
    });
    console.log("sdcsdc", request);
    return next.handle(request);
  }
}
