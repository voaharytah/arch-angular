import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-discounts",
  templateUrl: "./discounts.component.html",
  styleUrls: ["./discounts.component.css"],
})
export class DiscountsComponent implements OnInit {
  items = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 50; i++) {
      this.items.push(`item- ${i}`);
    }
  }
}
