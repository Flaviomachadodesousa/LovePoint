import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AcompanhantesProvider } from '../../providers/acompanhantes/acompanhantes';

/**
 * Generated class for the AcompanhantebahiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acompanhantebahia',
  templateUrl: 'acompanhantebahia.html',
})
export class AcompanhantebahiaPage {
  public users: any;
  loading: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient,
              public Acompanhantes: AcompanhantesProvider,
              public loadingCtrl: LoadingController) { 

                this.getbahia()

                this.loading = this.loadingCtrl.create({
                  content: "Carregando..." });
                this.loading.present();
                setInterval(() => {
                this.loading.dismissAll();
                }, 1000);
            }
            
            getbahia() {
              this.Acompanhantes.getbahia()
              .then(data => {
                this.users = data;
                console.log(this.users);
              });
        }
        irbook(){
          console.log('foi')
        }
        
    }