import { CommandeService } from "./../../bdl-service/commandes/commande.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { getCommandes, getCommandesSuccess } from "./commandes.actions";
import { exhaustMap, map, catchError } from "rxjs/operators";
import { EMPTY } from "rxjs";

@Injectable()
export class CommandesEffectService {
  constructor(
    private actions$: Actions,
    private commandeService: CommandeService
  ) {}

  commandes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCommandes),
      exhaustMap((action) =>
        this.commandeService.getCommandes(action.criteria).pipe(
          map((result) => {
            console.log(result);
            return getCommandesSuccess({ commandes: result.orders });
          }),
          catchError((error) => EMPTY)
        )
      )
    )
  );
}
