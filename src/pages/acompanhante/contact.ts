//import { AcompanhanteparanaPage } from './../acompanhanteparana/acompanhanteparana';
//import { AcompanhanteriograndedosulPage } from './../acompanhanteriograndedosul/acompanhanteriograndedosul';
//import { AcompanhantebahiaPage } from './../acompanhantebahia/acompanhantebahia';
//import { AcompanhanteminasgeraisPage } from './../acompanhanteminasgerais/acompanhanteminasgerais';
//import { AcompanhanteriodejaneiroPage } from './../acompanhanteriodejaneiro/acompanhanteriodejaneiro';
import { AcompanhantesaopauloPage } from './../acompanhantesaopaulo/acompanhantesaopaulo';
import { NavController, NavParams } from 'ionic-angular';
import { AcompanhantesProvider } from '../../providers/acompanhantes/acompanhantes';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IndisponivelPage } from '../indisponivel/indisponivel';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {

constructor(
  public navCtrl: NavController,
  public navParams: NavParams,
  public http: HttpClient,
  public _AcompanhantesProvider: AcompanhantesProvider
) { }
            
  saopaulo(){
  this.navCtrl.push(AcompanhantesaopauloPage);
  };

  riodejaneiro(){
  this.navCtrl.push(IndisponivelPage);
  };

  minasgerais(){
  this.navCtrl.push(IndisponivelPage);
  };

  bahia(){
  this.navCtrl.push(IndisponivelPage);
  };

  riograndedosul(){
  this.navCtrl.push(IndisponivelPage);
  };

  parana(){
  this.navCtrl.push(IndisponivelPage);
  };

}