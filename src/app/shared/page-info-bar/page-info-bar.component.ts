import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-info-bar',
  templateUrl: './page-info-bar.component.html',
  styleUrls: ['./page-info-bar.component.scss']
})
export class PageInfoBarComponent implements OnInit {
  @Input() displayObj;
  constructor() { }

  ngOnInit() {
  }

}
