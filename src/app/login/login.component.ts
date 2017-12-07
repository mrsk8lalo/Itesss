import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import {FormBuilder, FormControl, FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cookie:String;
  myForm: FormGroup;
  sku: AbstractControl[];
  name: String;
  pass: String;
  remember: boolean;

  constructor(
    private router: Router,
    private location: Location,
    private cookieService: CookieService,
    private fb: FormBuilder) {

    this.myForm = fb.group({
      'name': ['', Validators.required],
      'pass': ['', Validators.required],
      'remember': ['', Validators.required],
    });

    this.sku = [this.myForm.controls['name'],this.myForm.controls['pass'],this.myForm.controls['remember']];
  }

  ngOnInit() {
    this.name=this.cookieService.get('name');
  }

  Validate_Form(): void {
   if( this.name == 'Usuario1' && this.pass == '12345') {
     if(this.remember == true) {
       this.cookieService.set('name',this.name.toString());
     }
     this.router.navigateByUrl('servicios');
   }
   else {
     this.name = 'invalido';
     this.pass = '';
   }
  }

}
