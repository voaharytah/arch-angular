import { DevisFilter } from "./criteria.model";

export interface Devis {
  cli_code?: string;
  date_vente?: string;
  date_modif?: string;
  dossier_no?: string;
  montant_ht?: number;
  montant_ttc?: number;
  doc_pdf?: number;
  stat_id?: number;
  ref_client?: string;
  fac_name?: string;
}

export interface DevisDetail {
  id?: number;
  hauteur?: number;
  largeur?: number;
  ligne_no?: number;
  ptht_r?: number;
  puht_r?: number;
  qte?: number;
  sequence?: number;
  image?: string;
  name?: string;
  wp_article?: string;
  wp_repere?: string;
  art_desc_l1?: string;
}

export interface DevisState {
  devis?: Array<Devis>;
  devisDetail?: DevisDetail[];
  pdf: Pdf;
  filter?: DevisFilter;
  loading?: boolean;
}

export interface Pdf {
  doc_base64?: string;
  doc_name?: string;
}
