import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  displayObj: any;
  constructor() { }

  ngOnInit() {
    this.displayObj = {name: 'Manage Customers', icon: 'pageview', link: '/manage-customers'};
  }

}
