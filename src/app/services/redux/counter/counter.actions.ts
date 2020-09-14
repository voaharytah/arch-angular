import { Game } from "@app/data/models/score.model";
import { createAction, props } from "@ngrx/store";

export const homeScore = createAction("[SCORE] - home score");
export const awayScore = createAction("[SCORE] - away score");
export const reset = createAction("[SCORE] - reset score");
export const gameScore = createAction(
  "[SCORE] - game score",
  props<{ game: Game }>()
);
