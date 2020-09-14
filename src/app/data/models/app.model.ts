import { CommandeState } from "./commandes.model";
import { DevisState } from "./devis.model";

export interface AppState {
  devis?: DevisState;
  commandes?: CommandeState;
}
