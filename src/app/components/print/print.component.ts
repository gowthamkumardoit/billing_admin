import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {
  displayObj: any;
  constructor() { }

  ngOnInit() {
    this.displayObj = {name: 'Print', icon: 'print', link: '/print'};
  }

}
