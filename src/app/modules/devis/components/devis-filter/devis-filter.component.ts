import { valueToMonth } from "@data/constants/filters";
import { extractLabelOptions } from "@data/constants/filters";
import { DevisFilter } from "@data/models/criteria.model";
import { devisSortBy, months, years } from "@data/constants/filters";
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-devis-filter",
  templateUrl: "./devis-filter.component.html",
  styleUrls: ["./devis-filter.component.css"],
})
export class DevisFilterComponent implements OnInit {
  @Output() filterDevis = new EventEmitter<DevisFilter>();
  @Input() defaultFilter: DevisFilter;

  form: FormGroup;
  sortBy = devisSortBy;
  months = months;
  years = years;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      sortBy: [this.defaultFilter?.sortBy],
      month: [this.defaultFilter?.month],
      year: [this.defaultFilter?.year],
      codeDevis: [this.defaultFilter?.codeDevis],
      refCli: [this.defaultFilter?.refCli, [Validators.minLength(4)]],
    });
  }

  onFilterDevis(): void {
    const filter: DevisFilter = <DevisFilter>this.form.value;
    this.filterDevis.emit(filter);
  }
}
