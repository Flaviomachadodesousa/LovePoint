import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class Novidadesservice {

  public items: any;
  url = "https://jsonplaceholder.typicode.com/photos";
  urlflavio = "https://api.myjson.com/bins/k8bjp";
  urlflavio1 = "https://testeappjson.000webhostapp.com/test.json";

  constructor(public http: HttpClient) {
    }
    getUsers() {
      return new Promise(resolve => {
        this.http.get(this.urlflavio).subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
  }
}