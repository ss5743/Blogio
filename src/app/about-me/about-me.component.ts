import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../roles/user.service';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  username:string|undefined
  email:string|undefined
  gender:string|undefined = "Select your gender"
  country:string|undefined
  intro:string|undefined

  constructor(private arouter: ActivatedRoute, private auth:AuthServiceService, private db: AngularFireDatabase, private router: Router){}

  ngOnInit(){
    // this.arouter.paramMap.subscribe(params=>{
    //   console.log(params)
    // })
    // console.log(this.auth.getCurrentUserId())
    this.getUsernameAndEmail()
  }

  getUsernameAndEmail(){
      // Below code to check if a single object is working in db
      // console.log(this.db.object('/users/'+'QIcYh8CYw4c3GxRf6YSXzlzM4mD2').valueChanges().subscribe((res:any)=>{
      //   this.username=res.username
      //   this.email=res.email
      //   console.log(this.username)
      // }))
      
      this.db.object('/users/'+this.auth.getCurrentUserId()).valueChanges().subscribe((res:any)=>{
      this.username=res.username
      this.email=res.email
      })
  }


  submit(data:any,values:NgForm){
    this.db.object('/users/'+this.auth.getCurrentUserId()).update(data)
    values.reset()
    this.router.navigate(['/home'])
  }

}
