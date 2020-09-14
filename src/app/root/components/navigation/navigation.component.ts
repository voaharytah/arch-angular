import { Component, OnInit, HostListener } from '@angular/core';
import menus from '../../../data/constants/menus';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  nav = menus;
  currentKey = '';

  constructor() {}

  ngOnInit(): void {}

  get menus(): Array<any> {
    return Object.keys(this.nav);
  }
}
