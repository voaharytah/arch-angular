import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-filter-list",
  templateUrl: "./filter-list.component.html",
  styleUrls: ["./filter-list.component.css"],
})
export class FilterListComponent implements OnInit {
  @Input() filters: string;
  @Output() filterData = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
}
