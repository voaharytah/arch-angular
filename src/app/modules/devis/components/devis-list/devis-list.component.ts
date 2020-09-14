import { ActivatedRoute } from "@angular/router";
import { DevisFilter } from "@data/models/criteria.model";
import { Devis } from "@data/models/devis.model";
import { Observable } from "rxjs";
import {
  getDevis,
  getDevisPdf,
  setDevisFilter,
} from "@services/redux/devis/devis.actions";
import { Store, select } from "@ngrx/store";
import { Component, OnInit, AfterViewInit } from "@angular/core";
import { criteriaToString } from "@app/services/factory/criteria/criteria.factory";
import * as devisSelectors from "@services/redux/devis/devis.selectors";

@Component({
  selector: "app-devis-list",
  templateUrl: "./devis-list.component.html",
  styleUrls: ["./devis-list.component.css"],
})
export class DevisListComponent implements OnInit {
  devis$: Observable<Devis[]>;
  devis: Array<Devis> = [];
  showFilterForm = false;
  filterString = "";
  loading$: Observable<boolean>;
  pdf = "";
  currentId;

  defaultCriteria: DevisFilter = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    dossier_type: "DEVIS",
    sortBy: "dateorder_1",
    codeDevis: "",
    refCli: "",
  };

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.setCurrentId();
    this.devis$ = this.store.pipe(select(devisSelectors.selectDevis));
    this.loading$ = this.store.pipe(select(devisSelectors.devisLoading));
    this.getDevis();
  }

  getDevis(): void {
    this.store
      .pipe(select(devisSelectors.selectDevisFilter))
      .subscribe((filter) => {
        filter &&
          (this.defaultCriteria = { ...this.defaultCriteria, ...filter });
        this.filterString = criteriaToString(this.defaultCriteria);
        this.store.dispatch(getDevis({ criteria: this.defaultCriteria }));
      });
  }

  setCurrentId(): void {
    this.route.queryParamMap.subscribe((params) => {
      params.get("stat_id") && (this.currentId = params.get("stat_id"));
    });
  }

  handleDevisFilter(filter: DevisFilter): void {
    this.showFilterForm = false;
    this.filterString = criteriaToString(filter);
    const { dossier_type } = this.defaultCriteria;
    this.store.dispatch(getDevis({ criteria: { ...filter, dossier_type } }));
    this.store.dispatch(setDevisFilter({ filter }));
  }

  getPdf(id: number): void {
    this.store.dispatch(
      getDevisPdf({ params: { doc_id: id, doc_type: "DEVIS" } })
    );
  }
}
