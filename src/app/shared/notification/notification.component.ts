import { Component, OnInit } from '@angular/core';
import {MatBottomSheet} from '@angular/material';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  openNotifications() {
    this.bottomSheet.open(BottomSheetComponent);
  }

}
