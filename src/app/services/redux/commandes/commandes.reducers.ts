import { createReducer, on } from "@ngrx/store";
import { getCommandesSuccess } from "./commandes.actions";
import { CommandeState } from "@app/data/models/commandes.model";

const initialState: CommandeState = {
  commandes: [],
};

const commandes = createReducer(
  initialState,
  on(getCommandesSuccess, (state, { commandes }) => ({ ...state, commandes }))
);

export const featureKey = "commandes";
export const reducer = (state, action) => commandes(state, action);
