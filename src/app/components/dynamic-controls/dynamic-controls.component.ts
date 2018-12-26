import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DynamicControls } from 'src/app/models/dynamic-controls.model';
import { DYNAMIC_CONTROLS } from '../../constants/side-nav.constants';
@Component({
  selector: 'app-dynamic-controls',
  templateUrl: './dynamic-controls.component.html',
  styleUrls: ['./dynamic-controls.component.scss']
})
export class DynamicControlsComponent implements OnInit {
  controlsForm: FormGroup;
  subscriptionControl = new FormControl('', [Validators.required]);
  subscriptionType = [
    {name: 'Type 1', value: 'type1'},
    {name: 'Type 2', value: 'type2'},
    {name: 'Type 3', value: 'type3'},
    {name: 'Custom Type', value: 'custom'},
  ];
  disableControls: boolean;
  dynamicControls = DYNAMIC_CONTROLS;
  displayObj: any;
  constructor(private fb: FormBuilder) {

   }

  ngOnInit() {

    this.displayObj =   { name: 'Manage Dynamic Controls', icon: 'settings', link: '/manage-controls'};
    this.controlsForm = this.fb.group({
      dashboard: true,
      client: true,
      vendor: true,
      item: true,
      invoice: true,
      quotes: true,
      salesOrder: true,
      deliveryNotes: true,
      creditNotes: true,
      purchaseOrders: true,
      purchaseBill: true,
      jobCard: true,
      stocks: true,
      ledger: true,
      estimates: true,
      expenses: true,
      report: true,
      preferences: true,
      help: true
    });
    this.disableControls = true;
  }
  onSelectType(value) {
    if (value === 'custom') {
      this.disableControls = false;
      this.controlsForm.patchValue( {
        dashboard: false,
        client: false,
        vendor: false,
        item: false,
        invoice: false,
        quotes: false,
        salesOrder: false,
        deliveryNotes: false,
        creditNotes: false,
        purchaseOrders: false,
        purchaseBill: false,
        jobCard: false,
        stocks: false,
        ledger: false,
        estimates: false,
        expenses: false,
        report: false,
        preferences: false,
        help: false
      });
    } else if (value === 'type1') {
      this.disableControls = true;
      this.controlsForm.patchValue( {
        dashboard: true,
        client: true,
        vendor: true,
        item: true,
        invoice: true,
        quotes: true,
        salesOrder: true,
        deliveryNotes: false,
        creditNotes: false,
        purchaseOrders: false,
        purchaseBill: false,
        jobCard: false,
        stocks: false,
        ledger: false,
        estimates: false,
        expenses: false,
        report: false,
        preferences: false,
        help: true
      });
    } else if (value === 'type2') {
      this.disableControls = true;
      this.controlsForm.patchValue( {
        dashboard: true,
        client: true,
        vendor: true,
        item: true,
        invoice: true,
        quotes: true,
        salesOrder: true,
        deliveryNotes: true,
        creditNotes: true,
        purchaseOrders: true,
        purchaseBill: true,
        jobCard: true,
        stocks: true,
        ledger: false,
        estimates: false,
        expenses: false,
        report: false,
        preferences: false,
        help: true
      });
    } else if (value === 'type3') {
      this.disableControls = true;
      this.controlsForm.patchValue( {
        dashboard: true,
        client: true,
        vendor: true,
        item: true,
        invoice: true,
        quotes: true,
        salesOrder: true,
        deliveryNotes: true,
        creditNotes: true,
        purchaseOrders: true,
        purchaseBill: true,
        jobCard: true,
        stocks: true,
        ledger: true,
        estimates: true,
        expenses: true,
        report: true,
        preferences: true,
        help: true
      });
    }
    this.controlsForm.updateValueAndValidity();
  }
  save() {
    console.log(this.controlsForm);
    console.log(this.subscriptionControl.value);
  }
}
