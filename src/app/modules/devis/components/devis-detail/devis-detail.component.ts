import { Observable } from "rxjs";
import { getDevisDetail } from "./../../../../services/redux/devis/devis.actions";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, Sanitizer } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { DevisState, DevisDetail } from "@app/data/models/devis.model";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import * as devisSelectors from "@services/redux/devis/devis.selectors";

@Component({
  selector: "app-devis-detail",
  templateUrl: "./devis-detail.component.html",
  styleUrls: ["./devis-detail.component.css"],
})
export class DevisDetailComponent implements OnInit {
  devisDetail: DevisDetail[] = [];
  stat_ids = [];
  currentIndex = 0;
  loading$: Observable<boolean>;
  src: SafeUrl[];
  indexImg: number;
  stat_id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(devisSelectors.devisLoading));
    this.getDevisDetails();
    this.store
      .pipe(select(devisSelectors.selectDevisState))
      .subscribe((devisState) => {
        this.devisDetail = devisState.devisDetail;
        this.stat_ids = devisState.devis.map((devis) => devis.stat_id);
        this.currentIndex = this.stat_ids.indexOf(this.stat_id);
      });
  }

  getDevisDetails(): void {
    this.route.paramMap.subscribe((params) => {
      this.stat_id = +params.get("id");
      this.stat_id &&
        this.store.dispatch(getDevisDetail({ stat_id: this.stat_id }));
    });
  }

  imgSrc(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(
      `data:image/png;base64,${url}`
    );
  }

  previous(): void {
    this.currentIndex--;
    if (this.currentIndex >= 0) {
      const stat_id = this.stat_ids[this.currentIndex];
      this.router.navigate([`/app/devis/${stat_id}`]);
    }
  }

  next(): void {
    this.currentIndex++;
    if (this.currentIndex < this.stat_ids.length) {
      const stat_id = this.stat_ids[this.currentIndex];
      this.router.navigate([`/app/devis/${stat_id}`]);
    }
  }

  imgPreview(indexImg: number): void {
    this.indexImg = indexImg;
    this.src = this.devisDetail.map((devis) => this.imgSrc(devis.image));
  }

  goToDevis(): void {
    this.router.navigate(["/app/devis"], {
      queryParams: { stat_id: this.stat_id },
    });
  }
}
