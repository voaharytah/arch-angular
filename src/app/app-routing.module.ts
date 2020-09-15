import { RouteGuardGuard } from "./root/guard/route-guard.guard";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes, Route } from "@angular/router";
import { PageNotFoundComponent } from "@root/components/page-not-found/page-not-found.component";
import { ContentLayoutComponent } from "@root/components/content-layout/content-layout.component";

const appRoutes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./modules/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "app",
    component: ContentLayoutComponent,
    canActivate: [RouteGuardGuard],
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("./modules/home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "devis",
        loadChildren: () =>
          import("./modules/devis/devis.module").then((m) => m.DevisModule),
      },
      {
        path: "commandes",
        loadChildren: () =>
          import("./modules/commandes/commandes.module").then(
            (m) => m.CommandesModule
          ),
      },
      {
        path: "counter",
        loadChildren: () =>
          import("./modules/counter/counter.module").then(
            (m) => m.CounterModule
          ),
      },
    ],
  },

  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
  providers: [RouteGuardGuard],
})
export class AppRoutingModule {}
