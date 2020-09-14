import { SharedModule } from "./../../shared/shared.module";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import * as loginReducer from "@services/redux/login/login.reducers";
import { LoginEffectService } from "@services/redux/login/login-effect.service";
import { UserService } from "@services/bdl-service/user/user.service";
import { ApiCallerService } from "@services/bdl-service/apiCaller/api-caller.service";

import { LoginContainerComponent } from "./components/login-container/login-container.component";
import { LoginComponent } from "./components/login/login.component";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
  declarations: [LoginContainerComponent, LoginComponent],
  imports: [
    SharedModule,
    LoginRoutingModule,
    StoreModule.forFeature(loginReducer.featureKey, loginReducer.reducer),
    EffectsModule.forFeature([LoginEffectService]),
  ],
  providers: [UserService, ApiCallerService],
})
export class LoginModule {}
