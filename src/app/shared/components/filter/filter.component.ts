import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"],
})
export class FilterComponent implements OnInit {
  @Input() showFilterInput;
  @Input() filterString;
  @Output() filterData = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleFilterData(): void {
    this.showFilterInput = !this.showFilterInput;
    this.filterData.emit();
  }
}
