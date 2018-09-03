import { UserServices } from './../shared/user.services';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Response } from "@angular/http";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  data: any;

  account_validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
      
     
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions' }
    ]
    }
    

  signUpForm = new FormGroup({
    name: new FormControl(null, Validators.compose([
      
      Validators.maxLength(25),
      Validators.minLength(5),
      
      Validators.required
    ])),
    email: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    password: new FormControl(null,  Validators.compose([
      Validators.minLength(5),
      Validators.required,
    ])),
    role: new FormControl("audience", Validators.required),
  });

  constructor(private us: UserServices) { }

  ngOnInit() {
  }

  onSubmit(){
    

     this.us.newRegister(this.signUpForm.value)
       .subscribe((response: any) => {
         this.data = response;
         Swal(response.message,"","success");
         console.log("dataaaaa",this.data)
       },(error:any) => {
        Swal(error.error.message,"","error");
        console.log("eroorrr",error)
       });
  }



}
