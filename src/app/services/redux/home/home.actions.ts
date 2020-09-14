import { HomeState } from "./../../../data/models/home.model";
import { createAction, props } from "@ngrx/store";

export const getPartner = createAction("[HOME] - get partner");
export const getPartnerSuccess = createAction(
  "[HOME] - get partner success",
  props<{ partner: HomeState }>()
);
export const getDelaisProduit = createAction("[HOME] - delais produit");
export const delaisProduitSuccess = createAction(
  "[HOME] - delais produit success",
  props<{ partner: HomeState }>()
);
