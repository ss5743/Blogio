import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  //isSignedIn = false;
  email:string=''
  password:string=''

  constructor(private auth: AuthServiceService){}

  ngOnInit(): void {
    // if(localStorage.getItem('user')!==null)
    //   this.isSignedIn=true
    // else
    //   this.isSignedIn=false
  }

  signingUp(){
    this.auth.signUp(this.email,this.password)
    // if(this.auth.isLoggedIn)
    //   this.isSignedIn=true
  }

}
