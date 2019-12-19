import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class Novidadesservice {

  public items: any;
  url = "https://jsonplaceholder.typicode.com/photos";
  Novidade = "https://acompanhantes-59869.firebaseio.com/Novidades.json";
  urlflavio1 = "https://testeappjson.000webhostapp.com/test.json";

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