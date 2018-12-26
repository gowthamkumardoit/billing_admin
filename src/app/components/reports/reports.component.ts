import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  displayObj: any;
  constructor() { }

  ngOnInit() {
    this.displayObj =  {name: 'Reports', icon: 'public', link: '/reports'};
  }

}
