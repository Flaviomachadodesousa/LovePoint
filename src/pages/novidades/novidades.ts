import { Novidadesservice } from './../../providers/novidade-service/novidade-service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-novidades',
  templateUrl: 'novidades.html',
})
export class NovidadesPage {
  public feeds: Array<string>;
  public users: any;
  loading: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpClient,
              public Novidadesservice: Novidadesservice,
              public loadingCtrl: LoadingController) {

                this.getusers()

                this.loading = this.loadingCtrl.create({
                  content: "Carregando..." });
                this.loading.present();
                setInterval(() => {
                this.loading.dismissAll();
                }, 1000);
            }
            
            getusers() {
              this.Novidadesservice.getUsers()
              .then(data => {
                this.users = data;
                console.log(this.users);
              });
        }

        irmulher(){
          console.error();
          
        }


}