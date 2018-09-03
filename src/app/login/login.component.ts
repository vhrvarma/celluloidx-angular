import { UserServices } from './../shared/user.services';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any;

  account_validation_messages = {
    
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    
    }

  loginForm = new FormGroup({
   
    email: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    password: new FormControl(null,  Validators.compose([
      Validators.minLength(5),
      Validators.required,
    ])),
    
  });

  constructor(private us:UserServices) { }

  ngOnInit() {
  }

  onSubmit() {
    
    this.us.login(this.loginForm.value)
     .subscribe((response) => {
       this.data= response;
      
       localStorage.setItem('token', this.data.userToken);
      
       Swal(response.message,"","success");
     },(error) => {
       this.data = error;
       Swal(error.error.message,"","error");
     })
  }

}
