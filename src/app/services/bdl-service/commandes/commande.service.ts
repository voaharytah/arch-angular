import { Observable } from "rxjs";
import { ApiCallerService } from "./../apiCaller/api-caller.service";
import { Injectable } from "@angular/core";
import { Criteria, DevisFilter } from "@app/data/models/criteria.model";
import { createCriteria } from "@app/services/factory/criteria/criteria.factory";

@Injectable()
export class CommandeService {
  constructor(private apiCller: ApiCallerService<any>) {}

  getCommandes(filter: DevisFilter): Observable<any> {
    const criteria: Criteria = createCriteria(filter);
    return this.apiCller.post("get_documents2", criteria);
  }
}
