import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"],
})
export class ContactsComponent implements OnInit {
  tab = 4;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  navigate(routeName: string): void {
    this.router.navigate(["../discount"], { relativeTo: this.route });
  }
}
