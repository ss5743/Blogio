import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isLoggedIn = false;
  constructor(private fireAuth: AngularFireAuth, private router:Router) { }

  signUp(email:string, password:string){
    this.isLoggedIn=true;
    this.fireAuth.createUserWithEmailAndPassword(email,password)
      .then(res=>{
        localStorage.setItem('token','true')
        this.router.navigate(['/aboutme'])
      }, err=>{
        alert("Use valid email and password")
      })
  }

  signIn(email:string,password:string){
    this.isLoggedIn=true;
    this.fireAuth.signInWithEmailAndPassword(email,password)
      .then(res=>{
        this.router.navigate(['/aboutme'])
        localStorage.setItem('token','true')
      }, err=>{
        alert("Invalid email or  password")
      })
  }

  logOut(){
    this.isLoggedIn=false
    this.fireAuth.signOut()
      .then(res=>{
        localStorage.removeItem('token')
        this.router.navigate(['/login'])
      }, err=>{
        alert(err.message)
      })
  }

}
