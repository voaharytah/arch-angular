import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CounterRoutingModule } from "./counter-routing.module";
import * as GameReducer from "@services/redux/counter/counter.reducers";

import { CounterContainerComponent } from "./components/counter-container/counter-container.component";
import { StoreModule } from "@ngrx/store";

@NgModule({
  declarations: [CounterContainerComponent],
  imports: [
    CommonModule,
    CounterRoutingModule,
    StoreModule.forFeature(GameReducer.featureKey, GameReducer.reducer),
  ],
})
export class CounterModule {}
