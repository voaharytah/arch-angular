export interface Commande {
  cli_code?: string;
  date_livraison?: string;
  date_vente?: string;
  date_modif?: string;
  delivery_status?: string;
  etat_livraison?: string;
  doc_pdf?: number;
  montant_ht?: number;
  montant_ttc?: number;
  ref_client?: string;
  dossier_no?: string;
  type_commande?: string;
}

export interface CommandeState {
  commandes?: Commande[];
}
