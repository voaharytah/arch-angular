import { Injectable } from "@angular/core";
import { ApiCallerService } from "../apiCaller/api-caller.service";
import { LoginData, User } from "../../../data/models/user.model";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
  constructor(private apiCaller: ApiCallerService<any>) {}

  login(credential: User): Observable<any> {
    const { email, password } = credential;
    const body: LoginData = {
      login_domain: `[[\"parent_id.id\", \">\", 0], [\"email\", \"=\", \"${email}\"],  [\"fpv_web_password\", \"=\", \"${password}\"],  [\"fpv_web_access\", \"=\", 1],  [\"type\", \"=\", \"contact\"]]`,
    };
    return this.apiCaller.post("login", body);
  }
}
