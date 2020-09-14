import { Commande } from "./../../../data/models/commandes.model";
import { Criteria, DevisFilter } from "./../../../data/models/criteria.model";
import { createAction, props } from "@ngrx/store";

export const getCommandes = createAction(
  "[COMMANDES] - commands list",
  props<{ criteria: DevisFilter }>()
);

export const getCommandesSuccess = createAction(
  "[COMMANDES] - get commandes success",
  props<{ commandes: Commande[] }>()
);
