import { CommandesListComponent } from "./components/commandes-list/commandes-list.component";
import { CommandesContainerComponent } from "./components/commandes-container/commandes-container.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: CommandesContainerComponent,
    children: [
      {
        path: "",
        component: CommandesListComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandeRoutingModule {}
