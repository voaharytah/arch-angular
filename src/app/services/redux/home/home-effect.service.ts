import { DelaisProduitDto } from "./../../../data/models/home.model";
import {
  homeFactory,
  delaisProduitFactory,
} from "./../../factory/home/home.factory";
import { mergeMap, map, catchError } from "rxjs/operators";
import {
  getPartner,
  getPartnerSuccess,
  getDelaisProduit,
  delaisProduitSuccess,
} from "./home.actions";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { HomeService } from "../../bdl-service/home/home.service";
import { EMPTY } from "rxjs";
import { HomeState, HomeDto } from "@app/data/models/home.model";

@Injectable()
export class HomeEffectService {
  constructor(private actions$: Actions, private service: HomeService) {}

  partner$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPartner),
      mergeMap(() =>
        this.service.getPartner().pipe(
          map((result: HomeDto) => {
            const partner: HomeState = homeFactory(result);
            return getPartnerSuccess({ partner });
          }),
          catchError((err) => EMPTY)
        )
      )
    )
  );

  delaisProdui$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getDelaisProduit),
      mergeMap(() =>
        this.service.getDelaisProduit().pipe(
          map((result: DelaisProduitDto) => {
            const homeState: HomeState = delaisProduitFactory(result);
            return delaisProduitSuccess({ partner: homeState });
          }),
          catchError((err) => EMPTY)
        )
      )
    )
  );
}
