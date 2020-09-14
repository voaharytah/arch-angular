export interface Criteria {
  filter: string;
}

export interface DevisFilter {
  sortBy?: string;
  month?: number;
  year?: number;
  codeDevis?: string;
  refCli?: string;
  dossier_type?: string;
}

export interface PdfCriteria {
  doc_id: number;
  doc_type: string;
}
