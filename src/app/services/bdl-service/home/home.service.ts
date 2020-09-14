import { ApiCallerService } from "./../apiCaller/api-caller.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HomeDto } from "@app/data/models/home.model";

@Injectable()
export class HomeService {
  constructor(private httpCaller: ApiCallerService<any>) {}

  getPartner(): Observable<any> {
    return this.httpCaller.post("get_partner", {});
  }

  getDelaisProduit(): Observable<any> {
    return this.httpCaller.post("get_pdf_delais", {});
  }
}
