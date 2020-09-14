import { DevisDetail, Pdf } from "@data/models/devis.model";
import { Devis } from "@data/models/devis.model";
import { Criteria } from "@data/models/criteria.model";
import { createAction, props } from "@ngrx/store";
import { PdfCriteria, DevisFilter } from "@app/data/models/criteria.model";

export const getDevis = createAction(
  "[DEVIS] - get devis",
  props<{ criteria: DevisFilter }>()
);

export const getDevisSuccess = createAction(
  "[DEVIS] - get devis success",
  props<{ devis: Array<Devis> }>()
);

export const getDevisDetail = createAction(
  "[DEVIS] - get devis detail",
  props<{ stat_id: number }>()
);

export const getDevisDetailSuccess = createAction(
  "[DEVIS] devis detail success",
  props<{ devisDetail: Array<DevisDetail> }>()
);

export const getDevisPdf = createAction(
  "[DEVIS] Devis pdf",
  props<{ params: PdfCriteria }>()
);

export const getDevisPdfSuccess = createAction(
  "[DEVIS] Devis pdf success",
  props<{ pdf: Pdf }>()
);

export const setDevisFilter = createAction(
  "[DEVIS] devis filter",
  props<{ filter: DevisFilter }>()
);
