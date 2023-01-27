import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  saveUser(user: firebase.auth.UserCredential){
    return this.db.object('/users/' + user.user?.uid)
  }

  get(usid:string){
    return this.db.object('/users'+usid)
  }
}
