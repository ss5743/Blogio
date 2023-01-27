import { Injectable, Injector } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import firebase from 'firebase/compat';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { UserService } from '../roles/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  lUserId:string|undefined = '';
  isLoggedIn = false;
  constructor(private fireAuth: AngularFireAuth, private router:Router, private arouter: ActivatedRoute, private db: AngularFireDatabase, private userservice:UserService) { }

  getCurrentUserId():string|undefined{
    return this.lUserId
  }

  signUp(email:string, password:string,uname:string){
    this.isLoggedIn=true;
    this.fireAuth.createUserWithEmailAndPassword(email,password)
      .then(userCred=>{
         this.userservice.saveUser(userCred)
          .set({
            email:email,
            userid:userCred.user?.uid,
            username:uname
          })
          this.lUserId=userCred.user?.uid
          localStorage.setItem('token','true')
          this.router.navigate([userCred.user?.uid+'/aboutme/'])
        }, err=>{
          alert("Use valid email and password")
        })
    }
  

  signIn(email:string,password:string){
    this.isLoggedIn=true;
    this.fireAuth.signInWithEmailAndPassword(email,password)
      .then(userCred=>{
        // this.router.navigate([userCred.user?.uid+'/aboutme/'])
        this.router.navigate(['/home'])  
        this.lUserId=userCred.user?.uid
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
        this.lUserId=""
        this.router.navigate(['/login'])
      }, err=>{
        alert(err.message)
      })
  }

}
