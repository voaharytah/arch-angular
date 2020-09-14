import { PdfCriteria } from "./../../../data/models/criteria.model";
import { createCriteria } from "./../../factory/criteria/criteria.factory";
import { DevisFilter } from "@data/models/criteria.model";
import { Criteria } from "@data/models/criteria.model";
import { ApiCallerService } from "@services/bdl-service/apiCaller/api-caller.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class DevisService {
  constructor(private apiCaller: ApiCallerService<any>) {}

  getDevis(filter: DevisFilter): Observable<any> {
    const criteria: Criteria = createCriteria(filter);
    return this.apiCaller.post("get_documents2", criteria);
  }

  getDevisDetail(stat_id: number): Observable<any> {
    return this.apiCaller.post("get_document_detail", { stat_id });
  }

  getPdf(params: PdfCriteria): Observable<any> {
    const { doc_id, doc_type } = params;
    return this.apiCaller.post("get_pdf", { doc_id, doc_type });
  }
}
