import { Router } from "@angular/router";
import { Devis } from "@data/models/devis.model";
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
} from "@angular/core";

@Component({
  selector: "app-devis-item",
  templateUrl: "./devis-item.component.html",
  styleUrls: ["./devis-item.component.css"],
})
export class DevisItemComponent implements OnInit, AfterViewInit {
  @Input() devis: Devis;
  @Input() currentId: number;
  @Output() pdf = new EventEmitter<number>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  devisDetail(id: string): void {
    this.router.navigate([`/app/devis/${id}`]);
  }

  ngAfterViewInit(): void {
    this.currentId &&
      document.getElementById(this.currentId.toString())?.scrollIntoView({
        behavior: "smooth",
      });
  }
}
