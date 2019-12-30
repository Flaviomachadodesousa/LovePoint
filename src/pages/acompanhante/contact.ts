import { AcompanhanteparanaPage } from './../acompanhanteparana/acompanhanteparana';
import { AcompanhanteriograndedosulPage } from './../acompanhanteriograndedosul/acompanhanteriograndedosul';
import { AcompanhantebahiaPage } from './../acompanhantebahia/acompanhantebahia';
import { AcompanhanteminasgeraisPage } from './../acompanhanteminasgerais/acompanhanteminasgerais';
import { AcompanhanteriodejaneiroPage } from './../acompanhanteriodejaneiro/acompanhanteriodejaneiro';
import { AcompanhantesaopauloPage } from './../acompanhantesaopaulo/acompanhantesaopaulo';
import { NavController, NavParams } from 'ionic-angular';
import { AcompanhantesProvider } from '../../providers/acompanhantes/acompanhantes';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient,
              public _AcompanhantesProvider: AcompanhantesProvider
              ) { }
            
          saopaulo(){
            this.navCtrl.push(AcompanhantesaopauloPage);
          };

          riodejaneiro(){
            this.navCtrl.push(AcompanhanteriodejaneiroPage);
          };

          minasgerais(){
            this.navCtrl.push(AcompanhanteminasgeraisPage);
          };

          bahia(){
            this.navCtrl.push(AcompanhantebahiaPage);
          };

          riograndedosul(){
            this.navCtrl.push(AcompanhanteriograndedosulPage);
          };

          parana(){
            this.navCtrl.push(AcompanhanteparanaPage);
          };

        }