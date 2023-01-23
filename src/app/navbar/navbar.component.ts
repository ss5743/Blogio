import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthServiceService){}

  
  isLogged(){
    // if(localStorage.getItem('token')!==null)
    //   this.isLoggedIn = true
    // else
    //   this.isLoggedIn = false
    return this.auth.isLoggedIn
  }
  


  ngOnInit(): void {
    
  }

  loggingOut(){
    this.auth.logOut()
  }

}
