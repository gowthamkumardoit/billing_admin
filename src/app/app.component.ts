import { Component, OnDestroy } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'billingAdmin';
  loggedIn: boolean;
  constructor(private commonService: CommonService) {
    this.commonService.loggedIn.subscribe((data: boolean) => {
      this.loggedIn = data;
    });
  }

  ngOnDestroy() {
    this.commonService.loggedIn.unsubscribe();
  }
}
