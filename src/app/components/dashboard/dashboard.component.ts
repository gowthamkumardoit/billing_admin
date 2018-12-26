import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayObj: any;
  constructor() { }

  ngOnInit() {
    this.displayObj = {name: 'Dashboard', icon: 'insert_chart', link: '/dashboard'};
  }

}
