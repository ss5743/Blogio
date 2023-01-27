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
    return this.auth.isLoggedIn
  }
  


  ngOnInit(): void {
    
  }

  loggingOut(){
    this.auth.logOut()
  }

}
