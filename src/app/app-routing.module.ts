import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  // {path:'', component:AppComponent},
  {path:'signup', component:SignupComponent},
  {path:':id/aboutme', component:AboutMeComponent, canActivate:[AuthGuardService]},
  {path:'login', component:LoginComponent},
  {path:'home', component:UserHomeComponent, canActivate:[AuthGuardService]},
  {path:'aboutus', component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
