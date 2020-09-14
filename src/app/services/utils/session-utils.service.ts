import { UserState } from "./../../data/models/user.model";
import { map } from "rxjs/operators";
import { Store, select } from "@ngrx/store";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SessionUtilsService {
  constructor(private store: Store<{ user: UserState }>) {}

  userIsLogged(): Promise<boolean> {
    return new Promise((resolve, reject) =>
      this.store.pipe(select("user")).subscribe((user) => {
        user && user.token ? resolve(true) : resolve(false);
      })
    );
  }

  setToken(user: UserState): void {
    if (user && user.token) {
      localStorage.setItem("token", user.token);
    }
  }

  getToken(): string {
    return localStorage.getItem("token");
  }
}
