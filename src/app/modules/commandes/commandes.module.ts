import { CommandesEffectService } from "@services/redux/commandes/commandes-effect.service";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { SharedModule } from "@shared/shared.module";
import * as commandesReducer from "@services/redux/commandes/commandes.reducers";
import { CommandeRoutingModule } from "./commande-routing.module";
import { CommandesContainerComponent } from "./components/commandes-container/commandes-container.component";
import { CommandesListComponent } from "./components/commandes-list/commandes-list.component";
import { CommandesDetailComponent } from './components/commandes-detail/commandes-detail.component';
import { CommandesItemComponent } from './components/commandes-item/commandes-item.component';
import { CommandesFilterComponent } from './components/commandes-filter/commandes-filter.component';

@NgModule({
  declarations: [CommandesContainerComponent, CommandesListComponent, CommandesDetailComponent, CommandesItemComponent, CommandesFilterComponent],
  imports: [
    SharedModule,
    CommandeRoutingModule,
    StoreModule.forFeature(
      commandesReducer.featureKey,
      commandesReducer.reducer
    ),
    EffectsModule.forFeature([CommandesEffectService]),
  ],
})
export class CommandesModule {}
