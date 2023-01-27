import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string=''
  password:string=''
  // isSignedIn = false;
  constructor(private auth: AuthServiceService){}

  ngOnInit(): void {
    // if(localStorage.getItem('user')!==null)
    //   this.isSignedIn=true
    // else
    //   this.isSignedIn=false
    // console.log(this.auth.getCurrentUserId())
  }

  signingIn(){
    this.auth.signIn(this.email,this.password)
    // if(this.auth.isLoggedIn)
    //   this.isSignedIn=true
  }

  // logUserOut(){
  //   this.auth.logOut()
  //   this.isSignedIn=false
  // }
}
