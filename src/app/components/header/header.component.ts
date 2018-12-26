import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean;
  constructor(private commonService: CommonService, private route: Router) { }

  ngOnInit() {
  }

  login() {
    this.commonService.loggedIn.subscribe((data: boolean) => {
      this.loggedIn = data;
    });
  }

}
