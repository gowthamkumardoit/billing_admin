import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  displayObj: any;
  constructor() { }

  ngOnInit() {
    this.displayObj = {name: 'Payments', icon: 'attach_money', link: '/payments'};
  }

}
