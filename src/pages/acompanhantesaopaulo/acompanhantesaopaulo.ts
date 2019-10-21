import { MostraracompanhantePage } from './../mostraracompanhante/mostraracompanhante';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AcompanhantesProvider } from '../../providers/acompanhantes/acompanhantes';


@IonicPage()
@Component({
  selector: 'page-acompanhantesaopaulo',
  templateUrl: 'acompanhantesaopaulo.html',
})
export class AcompanhantesaopauloPage {

  public users: any;
  loading: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient,
              public Acompanhantes: AcompanhantesProvider,
              public loadingCtrl: LoadingController) { 

                this.getsaopaulo()

                this.loading = this.loadingCtrl.create({
                  content: "Carregando..." });
                this.loading.present();
                setInterval(() => {
                this.loading.dismissAll();
                }, 1000);
            }
            
            getsaopaulo() {
              this.Acompanhantes.getsaopaulo()
              .then(data => {
                this.users = data;
                console.log(this.users);
              });
             }
             
        irbook(AUSER){
          console.log(AUSER.id)
          this.navCtrl.push(MostraracompanhantePage)
        }

      }