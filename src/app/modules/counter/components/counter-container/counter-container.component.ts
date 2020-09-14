import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import * as GameActions from "@services/redux/counter/counter.actions";
import { Game } from "@app/data/models/score.model";

@Component({
  selector: "app-counter-container",
  templateUrl: "./counter-container.component.html",
  styleUrls: ["./counter-container.component.css"],
})
export class CounterContainerComponent implements OnInit {
  count$: Observable<Game>;

  constructor(private store: Store<{ game: Game }>) {}

  ngOnInit(): void {
    this.count$ = this.store.pipe(select("game"));
  }

  incrementHomeScore(): void {
    this.store.dispatch(GameActions.homeScore());
  }

  incrementAwayScore(): void {
    this.store.dispatch(GameActions.awayScore());
  }

  resetScore(): void {
    this.store.dispatch(GameActions.reset());
  }

  setScore(): void {
    this.store.dispatch(
      GameActions.gameScore({ game: { home: 20, away: 25 } })
    );
  }
}
