import { UserState } from "@app/data/models/user.model";
import { createReducer, on, Action } from "@ngrx/store";
import * as loginActions from "./login.actions";

const initialState: UserState = { email: "", token: "", permissions: [] };

const loginReducersDef = createReducer(
  initialState,
  on(loginActions.loginSuccess, (state, { user }) => ({
    ...state,
    email: user.email,
    token: user.token,
    permissions: user.permissions,
  }))
);

export const featureKey = "user";

export const reducer = (state: UserState, action: Action) =>
  loginReducersDef(state, action);
