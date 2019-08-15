import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AcompanhantesProvider } from '../../providers/acompanhantes/acompanhantes';


@IonicPage()
@Component({
  selector: 'page-acompanhanteriodejaneiro',
  templateUrl: 'acompanhanteriodejaneiro.html',
})
export class AcompanhanteriodejaneiroPage {

  //public feeds: Array<string>;
  public users: any;
  loading: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient,
              public Acompanhantes: AcompanhantesProvider,
              public loadingCtrl: LoadingController) { 

                this.getriodejaneiro()

                this.loading = this.loadingCtrl.create({
                  content: "Carregando..." });
                this.loading.present();
                setInterval(() => {
                this.loading.dismissAll();
                }, 1000);
            }
            
            getriodejaneiro() {
              this.Acompanhantes.getriodejaneiro()
              .then(data => {
                this.users = data;
                console.log(this.users);
              });
            }

            irbook(){
              console.log('foi')
            }
    }