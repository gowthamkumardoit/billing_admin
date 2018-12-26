import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      customerName: ['', Validators.required],
      companyName: [''],
      phone: [''],
      email: ['']
    });

    this.firstFormGroup = this.fb.group({
      companyName: ['', Validators.required],
      gstNo: ['', Validators.required],
      phone: ['', Validators.required],
      email: [''],
      doorNo_Floor: [''],
      street: [''],
      landMark: [''],
      city: [''],
      state: ['']

    });
    this.secondFormGroup = this.fb.group({
      cust_name: ['', Validators.required],
      cust_phone: ['', Validators.required],
      cust_email: [''],
      cust_doorNo_Floor: [''],
      cust_street: [''],
      cust_landMark: [''],
      cust_city: [''],
      cust_state: ['']
    });

    this.thirdFormGroup = this.fb.group({
      facebook: [''],
      twitter: ['']
    });
  }

  save() {
    console.log('save');
  }

}
