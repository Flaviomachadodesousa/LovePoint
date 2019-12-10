import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AcompanhantesProvider {

  public items: any;
  url = "https://jsonplaceholder.typicode.com/photos";
  urlflavio = "https://api.myjson.com/bins/10qu78";
  urlsp = "https://acompanhantes-59869.firebaseio.com/Acompanhantes_SP.json";

  constructor(public http: HttpClient) {
    }
    /*
    getUsers() {
      return new Promise(resolve => {
        this.http.get(this.urlflavio).subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
  }
  */

  getsaopaulo() {
    return new Promise(resolve => {
      this.http.get(this.urlsp).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
}

  getriodejaneiro() {
    return new Promise(resolve => {
      this.http.get(this.urlsp).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getminasgerais() {
     return new Promise(resolve => {
       this.http.get(this.urlsp).subscribe(data => {
         resolve(data);
       }, err => {
         console.log(err);
       });
     });  
  }

  getbahia() {
    return new Promise(resolve => {
      this.http.get(this.urlsp).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });  
}

  getriograndedosul() {
    return new Promise(resolve => {
      this.http.get(this.urlsp).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });  
  }

  getparana() {
    return new Promise(resolve => {
      this.http.get(this.urlsp).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });  
  }




}