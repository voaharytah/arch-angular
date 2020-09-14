import { SessionUtilsService } from "./../../utils/session-utils.service";
import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import * as loginActions from "./login.actions";
import { exhaustMap, catchError, map } from "rxjs/operators";
import { EMPTY } from "rxjs";
import { UserService } from "@app/services/bdl-service/user/user.service";
import { UserState } from "@app/data/models/user.model";

@Injectable()
export class LoginEffectService {
  constructor(
    private userService: UserService,
    private actions$: Actions,
    private sessionService: SessionUtilsService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginActions.login),
      exhaustMap((action) =>
        this.userService.login(action.credential).pipe(
          map(
            (result: UserState) => {
              const user: UserState = result;
              this.sessionService.setToken(user);
              return loginActions.loginSuccess({ user });
            },
            catchError((err) => EMPTY)
          )
        )
      )
    )
  );
}
