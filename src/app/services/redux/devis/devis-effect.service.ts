import { exhaustMap, map, catchError } from "rxjs/operators";
import {
  getDevis,
  getDevisSuccess,
  getDevisDetail,
  getDevisDetailSuccess,
  getDevisPdf,
  getDevisPdfSuccess,
} from "./devis.actions";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DevisService } from "@services/bdl-service/devis/devis.service";
import { Injectable } from "@angular/core";
import { EMPTY } from "rxjs";

@Injectable()
export class DevisEffectService {
  constructor(private devisService: DevisService, private actions$: Actions) {}

  devis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getDevis),
      exhaustMap((action) =>
        this.devisService.getDevis(action.criteria).pipe(
          map((result) => getDevisSuccess({ devis: result.orders })),
          catchError((err) => EMPTY)
        )
      )
    )
  );

  devisDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getDevisDetail),
      exhaustMap((action) =>
        this.devisService.getDevisDetail(action.stat_id).pipe(
          map((result) => {
            return getDevisDetailSuccess({
              devisDetail: result.order_lines_detail,
            });
          }),
          catchError((err) => EMPTY)
        )
      )
    )
  );

  pdf$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getDevisPdf),
      exhaustMap((action) =>
        this.devisService.getPdf(action.params).pipe(
          map((result) => {
            const pdf = result.documents[0];
            const linkSource = `data:application/pdf;base64,${pdf.doc_base64}`;
            const downloadLink = document.createElement("a");
            const fileName = pdf.doc_name;
            downloadLink.href = linkSource;
            downloadLink.download = fileName;
            downloadLink.click();
            return getDevisPdfSuccess({ pdf });
          }),
          catchError((err) => EMPTY)
        )
      )
    )
  );
}
