import { createAction, props } from "@ngrx/store";
import * as User from "@app/data/models/user.model";

export const login = createAction(
  "[LOGIN] - login",
  props<{ credential: User.User }>()
);

export const loginSuccess = createAction(
  "[LOGIN] - login success",
  props<{ user: User.UserState }>()
);
