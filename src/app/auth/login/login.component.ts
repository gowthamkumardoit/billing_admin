import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private route: Router, private commonService: CommonService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  // Login Function
  login() {
    this.route.navigate(['/create-user']);
    this.commonService.loggedIn.next(true);
    this.snackBar.open( 'Logged In', 'close', { duration: 1000});
  }
}
