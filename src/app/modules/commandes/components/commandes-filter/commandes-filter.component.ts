import {
  weekInYear,
  years,
  months,
  commandesFilter,
} from "@data/constants/filters";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-commandes-filter",
  templateUrl: "./commandes-filter.component.html",
  styleUrls: ["./commandes-filter.component.css"],
})
export class CommandesFilterComponent implements OnInit {
  @Input() defaultFilter: string;
  @Output() filterCommandes = new EventEmitter();
  form: FormGroup;
  commandesFilter = commandesFilter;
  months = months;
  years = years;
  weekInYear = weekInYear;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      filter: [""],
      month: [""],
      year: [""],
      sem_liv: [""],
      sortBy: [""],
      codeDevis: [""],
      refCli: [""],
    });
  }

  filter(): void {
    console.log(this.form.value);
  }
}
