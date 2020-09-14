import { HomeEffectService } from "./../../services/redux/home/home-effect.service";
import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import * as homeReducer from "@services/redux/home/home.reducers";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeContainerComponent } from "./components/home-container/home-container.component";
import { HomeDashboardComponent } from "./components/home-dashboard/home-dashboard.component";

import { DiscountsComponent } from "./components/discounts/discounts.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { AdressesComponent } from "./components/adresses/adresses.component";
import { AccountAddressComponent } from './components/account-address/account-address.component';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDashboardComponent,
    DiscountsComponent,
    ContactsComponent,
    AdressesComponent,
    AccountAddressComponent,
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
    StoreModule.forFeature(homeReducer.featureKey, homeReducer.reducer),
    EffectsModule.forFeature([HomeEffectService]),
  ],
})
export class HomeModule {}
