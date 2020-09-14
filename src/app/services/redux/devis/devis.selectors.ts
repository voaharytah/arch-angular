import { DevisState } from "@data/models/devis.model";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "@data/models/app.model";
import { featureKey } from "./devis.reducers";

export const selectDevisState = createFeatureSelector<AppState, DevisState>(
  featureKey
);

export const selectDevis = createSelector(
  selectDevisState,
  (devis: DevisState) => devis.devis
);

export const selectDevisDetail = createSelector(
  selectDevisState,
  (devis: DevisState) => devis.devisDetail
);

export const selectDevisFilter = createSelector(
  selectDevisState,
  (devis: DevisState) => devis.filter
);

export const devisLoading = createSelector(
  selectDevisState,
  (devis: DevisState) => devis.loading
);
