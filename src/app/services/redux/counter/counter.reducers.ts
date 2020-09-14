import { createReducer, on, Action } from "@ngrx/store";
import * as GameActions from "./counter.actions";
import { Game } from "../../../data/models/score.model";
import { environment } from "@env";

export const initialState: Game = {
  home: 0,
  away: 0,
};

const incrementHomeScore = (state) => ({ ...state, home: state.home + 1 });
const incrementAwayScore = (state) => ({ ...state, away: state.away + 1 });
const resetScore = (state) => ({ ...state, home: 0, away: 0 });
const setGameScore = (state, game) => ({
  ...state,
  home: game.home,
  away: game.away,
});

const counterReducerDef = createReducer(
  initialState,
  on(GameActions.homeScore, (state) => incrementHomeScore(state)),
  on(GameActions.awayScore, (state) => incrementAwayScore(state)),
  on(GameActions.gameScore, (state, { game }) => setGameScore(state, game)),
  on(GameActions.reset, (state) => resetScore(state))
);

export const featureKey = "game";
export const reducer = (state: Game, action: Action) => {
  return counterReducerDef(state, action);
};
