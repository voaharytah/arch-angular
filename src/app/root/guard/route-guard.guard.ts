import { SessionUtilsService } from "./../../services/utils/session-utils.service";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RouteGuardGuard implements CanActivate {
  constructor(
    private sessionService: SessionUtilsService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise((resolve) => {
      const token = this.sessionService.getToken();
      if (token) {
        resolve(true);
      } else {
        resolve(false);
        this.router.navigate(["/login"]);
      }
    });
  }
}
