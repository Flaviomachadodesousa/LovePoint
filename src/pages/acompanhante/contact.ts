import { AcompanhanteparanaPage } from './../acompanhanteparana/acompanhanteparana';
import { AcompanhanteriograndedosulPage } from './../acompanhanteriograndedosul/acompanhanteriograndedosul';
import { AcompanhantebahiaPage } from './../acompanhantebahia/acompanhantebahia';
import { AcompanhanteminasgeraisPage } from './../acompanhanteminasgerais/acompanhanteminasgerais';
import { AcompanhanteriodejaneiroPage } from './../acompanhanteriodejaneiro/acompanhanteriodejaneiro';
import { AcompanhantesaopauloPage } from './../acompanhantesaopaulo/acompanhantesaopaulo';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AcompanhantesProvider } from '../../providers/acompanhantes/acompanhantes';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public feeds: Array<string>;
  public users: any;
  loading: any;

  //items = [
  //  { titulo: 'titulo' },
  //  { titulo: 'titulo2' }
  //]

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient,
              public _AcompanhantesProvider: AcompanhantesProvider,
              public loadingCtrl: LoadingController) { }
            
          saopaulo(){
            this.navCtrl.setRoot(AcompanhantesaopauloPage);
          };

          riodejaneiro(){
            this.navCtrl.setRoot(AcompanhanteriodejaneiroPage);
          };

          minasgerais(){
            this.navCtrl.setRoot(AcompanhanteminasgeraisPage);
          };

          bahia(){
            this.navCtrl.setRoot(AcompanhantebahiaPage);
          };

          riograndedosul(){
            this.navCtrl.setRoot(AcompanhanteriograndedosulPage);
          };

          parana(){
            this.navCtrl.setRoot(AcompanhanteparanaPage);
          };

        }