import { CommandeService } from "./commandes/commande.service";
import { DevisService } from "./devis/devis.service";
import { HomeService } from "./home/home.service";
import { UserService } from "./user/user.service";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ApiCallerService } from "./apiCaller/api-caller.service";
import requestInterceptors from "./interceptors";

@NgModule({
  imports: [HttpClientModule],
  providers: [
    requestInterceptors,
    ApiCallerService,
    UserService,
    HomeService,
    DevisService,
    CommandeService,
  ],
})
export class BdlServiceModule {}
