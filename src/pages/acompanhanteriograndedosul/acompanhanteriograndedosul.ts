import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AcompanhantesProvider } from '../../providers/acompanhantes/acompanhantes';


@IonicPage()
@Component({
  selector: 'page-acompanhanteriograndedosul',
  templateUrl: 'acompanhanteriograndedosul.html',
})
export class AcompanhanteriograndedosulPage {

  public users: any;
  loading: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient,
              public Acompanhantes: AcompanhantesProvider,
              public loadingCtrl: LoadingController) { 

                this.getriograndedosul()

                this.loading = this.loadingCtrl.create({
                  content: "Carregando..." });
                this.loading.present();
                setInterval(() => {
                this.loading.dismissAll();
                }, 1000);
            }
            
            getriograndedosul() {
              this.Acompanhantes.getriograndedosul()
              .then(data => {
                this.users = data;
                console.log(this.users);
              });
        }

        irbook(){
          console.log('foi')
        }
    }