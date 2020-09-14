import { Component, OnInit, Input } from "@angular/core";
import { Contact } from "@app/data/models/home.model";

@Component({
  selector: "app-contact-row",
  templateUrl: "./contact-row.component.html",
  styleUrls: ["./contact-row.component.css"],
})
export class ContactRowComponent implements OnInit {
  @Input() contact: Contact;
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
