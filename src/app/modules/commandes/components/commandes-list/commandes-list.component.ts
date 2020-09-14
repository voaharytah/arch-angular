import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { getCommandes } from "@app/services/redux/commandes/commandes.actions";
import { DevisFilter } from "@app/data/models/criteria.model";
import { CommandeState, Commande } from "@app/data/models/commandes.model";
import { Observable } from "rxjs";
import { criteriaToString } from "@app/services/factory/criteria/criteria.factory";

@Component({
  selector: "app-commandes-list",
  templateUrl: "./commandes-list.component.html",
  styleUrls: ["./commandes-list.component.css"],
})
export class CommandesListComponent implements OnInit {
  commandes$: Observable<Commande[]>;
  commandes: Array<Commande> = [];
  showFilterForm = true;
  filterString = "";
  loading = true;
  pdf = "";

  defaultCriteria: DevisFilter = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    dossier_type: "COMMANDE",
    sortBy: "dateorder_1",
  };

  constructor(private store: Store<{ commandes: CommandeState }>) {}

  ngOnInit(): void {
    this.store.dispatch(getCommandes({ criteria: this.defaultCriteria }));
    this.loading = true;
    this.store
      .pipe(select("commandes"), select("commandes"))
      .subscribe((commandes) => {
        console.log(commandes, "<===========");
        this.commandes = commandes;
        this.loading = false;
      });
  }

  handleCommandesFilter(filter: DevisFilter): void {
    this.showFilterForm = false;
    this.filterString = criteriaToString(filter);
    this.loading = true;
    const { dossier_type } = this.defaultCriteria;
    this.store.dispatch(
      getCommandes({ criteria: { ...filter, dossier_type } })
    );
  }
}
