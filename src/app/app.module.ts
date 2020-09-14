import { BdlServiceModule } from "./services/bdl-service/bdl-service.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from "@root/components/page-not-found/page-not-found.component";
import { NavigationComponent } from "@root/components/navigation/navigation.component";
import { DropDownNavComponent } from "@root/components/drop-down-nav/drop-down-nav.component";
import { ContentLayoutComponent } from "@root/components/content-layout/content-layout.component";
import { AppComponent } from "@root/components/app.component";
import { EffectsModule } from "@ngrx/effects";
import { extModules } from "./build-specifics";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavigationComponent,
    DropDownNavComponent,
    ContentLayoutComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BdlServiceModule,
    StoreModule.forRoot({}),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    extModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
