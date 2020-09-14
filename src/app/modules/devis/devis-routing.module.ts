import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { DevisContainerComponent } from "./components/devis-container/devis-container.component";
import { DevisListComponent } from "./components/devis-list/devis-list.component";
import { DevisDetailComponent } from "./components/devis-detail/devis-detail.component";

const routes: Routes = [
  {
    path: "",
    component: DevisContainerComponent,
    children: [
      { path: "", component: DevisListComponent },
      { path: ":id", component: DevisDetailComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevisRoutingModule {}
