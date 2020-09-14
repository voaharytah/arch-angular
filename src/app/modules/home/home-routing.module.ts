import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeContainerComponent } from "./components/home-container/home-container.component";
import { HomeDashboardComponent } from "./components/home-dashboard/home-dashboard.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { DiscountsComponent } from "./components/discounts/discounts.component";
import { AdressesComponent } from "./components/adresses/adresses.component";
import { AccountAddressComponent } from "./components/account-address/account-address.component";

const routes: Routes = [
  {
    path: "",
    component: HomeContainerComponent,
    children: [
      { path: "", component: HomeDashboardComponent },
      { path: "account-address", component: AccountAddressComponent },
      { path: "contacts", component: ContactsComponent },
      { path: "discount", component: DiscountsComponent },
      { path: "adresses", component: AdressesComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
