import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    HostListener,
    ElementRef,
} from "@angular/core";

@Component({
    selector: "app-drop-down-nav",
    templateUrl: "./drop-down-nav.component.html",
    styleUrls: ["./drop-down-nav.component.css"],
})
export class DropDownNavComponent implements OnInit {
    toggle = false;
    @Input() menu: { label: string; subMenus: Array<string>; path: string };
    @Input() key = "";
    private wasInside = false;

    constructor() {}

    ngOnInit(): void {}

    @HostListener("click") clickInside(): void {
        this.wasInside = true;
    }

    @HostListener("document:click") clickout(): void {
        if (!this.wasInside) {
            this.toggle = false;
        }
        this.wasInside = false;
    }
}
