import { Devis } from "@data/models/devis.model";
import * as devisActions from "./devis.actions";
import { createReducer, on, Action } from "@ngrx/store";
import { DevisState } from "@app/data/models/devis.model";

const initialState: DevisState = {
  devis: [],
  devisDetail: [],
  pdf: {},
  filter: null,
};

const devis = createReducer(
  initialState,
  on(devisActions.getDevis, (state) => ({ ...state, loading: true })),
  on(devisActions.getDevisSuccess, (state, { devis }) => ({
    ...state,
    devis,
    loading: false,
  })),
  on(devisActions.getDevisDetail, (state) => ({ ...state, loading: true })),
  on(devisActions.getDevisDetailSuccess, (state, { devisDetail }) => ({
    ...state,
    devisDetail,
    loading: false,
  })),
  on(devisActions.getDevisPdfSuccess, (state, { pdf }) => ({ ...state, pdf })),
  on(devisActions.setDevisFilter, (state, { filter }) => ({ ...state, filter }))
);
export const featureKey = "devis";
export const reducer = (state, action: Action) => devis(state, action);
