import { getPartner } from "./../../../../services/redux/home/home.actions";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { AccountAddress, HomeState } from "@app/data/models/home.model";
import { Store, select } from "@ngrx/store";

@Component({
  selector: "app-account-address",
  templateUrl: "./account-address.component.html",
  styleUrls: ["./account-address.component.css"],
})
export class AccountAddressComponent implements OnInit {
  homeState$: Observable<HomeState>;
  addresses: Array<{ label: string; value: string }> = [];

  constructor(private store: Store<{ home: HomeState }>) {}

  ngOnInit(): void {
    this.homeState$ = this.store.pipe(select("home"));
    this.homeState$.subscribe((homeState) => {
      if (!homeState.refCode) {
        this.store.dispatch(getPartner());
        return;
      }
      const { accountAddress } = homeState;
      Object.keys(accountAddress).forEach((key) =>
        this.addresses.push({ label: key, value: accountAddress[key] })
      );
    });
  }
}
