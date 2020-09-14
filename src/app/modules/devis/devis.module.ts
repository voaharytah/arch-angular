import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import * as devisReducer from "@services/redux/devis/devis.reducers";
import { DevisEffectService } from "@services/redux/devis/devis-effect.service";
import { DevisContainerComponent } from "./components/devis-container/devis-container.component";
import { DevisRoutingModule } from "./devis-routing.module";
import { DevisListComponent } from "./components/devis-list/devis-list.component";
import { DevisDetailComponent } from "./components/devis-detail/devis-detail.component";
import { DevisItemComponent } from "./components/devis-item/devis-item.component";
import { DevisFilterComponent } from "./components/devis-filter/devis-filter.component";
import { SharedModule } from "@app/shared/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    DevisContainerComponent,
    DevisListComponent,
    DevisDetailComponent,
    DevisItemComponent,
    DevisFilterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DevisRoutingModule,
    StoreModule.forFeature(devisReducer.featureKey, devisReducer.reducer),
    EffectsModule.forFeature([DevisEffectService]),
  ],
})
export class DevisModule {}
