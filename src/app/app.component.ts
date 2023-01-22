import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  
  // Courselist !: any[];
  // testingdbfirebase(){
  //   this.db.list('/courses').valueChanges().subscribe(res=>{
  //     this.Courselist = res;
  //     console.log(res)
  //     console.log(this.Courselist)
  //   })
  // }


  constructor(private db: AngularFireDatabase){
   
  }
}
