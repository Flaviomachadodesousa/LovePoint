import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class Novidadesservice {

  public items: any;
  Novidade = "https://acompanhantes-59869.firebaseio.com/Novidades.json";
  
  constructor(public http: HttpClient) {
    }
    getUsers() {
      return new Promise(resolve => {
        this.http.get(this.Novidade).subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
  }
}