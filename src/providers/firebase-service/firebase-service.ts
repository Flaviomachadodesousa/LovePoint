import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class FirebaseServiceProvider {

  constructor(public db: AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider');
  }

}
