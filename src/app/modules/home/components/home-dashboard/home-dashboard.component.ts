import {
  getPartner,
  getDelaisProduit,
} from "./../../../../services/redux/home/home.actions";
import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Game } from "../../../../data/models/score.model";
import { HomeState } from "@app/data/models/home.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-home-dashboard",
  templateUrl: "./home-dashboard.component.html",
  styleUrls: ["./home-dashboard.component.css"],
})
export class HomeDashboardComponent implements OnInit {
  partner$: Observable<HomeState>;

  constructor(private store: Store<{ home: any }>) {}

  ngOnInit(): void {
    this.partner$ = this.store.pipe(select("home"));
    this.partner$.subscribe((partner: HomeState) => {
      if (!partner.refCode) {
        this.store.dispatch(getPartner());
      }
      if (!partner.delaisProduit) {
        this.store.dispatch(getDelaisProduit());
      }
    });
  }
}
