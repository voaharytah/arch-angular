import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SafeUrl } from "@angular/platform-browser";

@Component({
  selector: "app-img-preview",
  templateUrl: "./img-preview.component.html",
  styleUrls: ["./img-preview.component.css"],
})
export class ImgPreviewComponent implements OnInit {
  @Input() src: SafeUrl[] = [];
  @Input() index = 0;
  @Input() hide = true;
  @Output() hidePreview = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  previous(): void {
    if (this.index > 0) {
      this.index--;
    } else {
      this.index = this.src.length - 1;
    }
  }

  next(): void {
    if (this.index < this.src.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
  }
}
