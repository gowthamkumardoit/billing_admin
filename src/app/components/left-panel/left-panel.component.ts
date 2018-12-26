import { Component, OnInit } from '@angular/core';
import { SIDENAVLIST } from 'src/app/constants/side-nav.constants';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  sideNavList: any [] = SIDENAVLIST;
  constructor() { }

  ngOnInit() {
  }

}
