import { SessionUtilsService } from "./../../utils/session-utils.service";
import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private sessionService: SessionUtilsService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.indexOf("login") < 0) {
      const token = this.sessionService.getToken();
      const req = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      return next.handle(req);
    }

    return next.handle(request);
  }
}
