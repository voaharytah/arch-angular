import { createReducer, on } from "@ngrx/store";
import * as homeActions from "./home.actions";

const home = createReducer(
  {},

  on(homeActions.getPartnerSuccess, (state, { partner }) => ({
    ...state,
    advContact: partner.advContact,
    commercialContact: partner.commercialContact,
    refCode: partner.refCode,
    accountAddress: partner.accountAddress,
    contact: partner.contact,
  })),

  on(homeActions.delaisProduitSuccess, (state, { partner }) => ({
    ...state,
    delaisProduit: partner.delaisProduit,
  }))
);

export const featureKey = "home";
export const reducer = (state, action) => home(state, action);
