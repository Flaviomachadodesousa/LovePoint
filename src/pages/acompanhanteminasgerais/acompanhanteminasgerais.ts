import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AcompanhantesProvider } from '../../providers/acompanhantes/acompanhantes';

@IonicPage()
@Component({
  selector: 'page-acompanhanteminasgerais',
  templateUrl: 'acompanhanteminasgerais.html',
})
export class AcompanhanteminasgeraisPage {

  public users: any;
  loading: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient,
              public Acompanhantes: AcompanhantesProvider,
              public loadingCtrl: LoadingController) { 

                this.getminasgerais()

                this.loading = this.loadingCtrl.create({
                  content: "Carregando..." });
                this.loading.present();
                setInterval(() => {
                this.loading.dismissAll();
                }, 1000);
            }
            
            getminasgerais() {
              this.Acompanhantes.getminasgerais()
              .then(data => {
                this.users = data;
                console.log(this.users);
              });
        }
        irbook(){
          console.log('foi')
        }
    }