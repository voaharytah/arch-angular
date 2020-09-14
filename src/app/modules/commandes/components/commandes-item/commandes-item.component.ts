import { Component, OnInit, Input } from "@angular/core";
import { Commande } from "@app/data/models/commandes.model";

@Component({
  selector: "app-commandes-item",
  templateUrl: "./commandes-item.component.html",
  styleUrls: ["./commandes-item.component.css"],
})
export class CommandesItemComponent implements OnInit {
  @Input() commandes: Commande;

  constructor() {}

  ngOnInit(): void {}
}
