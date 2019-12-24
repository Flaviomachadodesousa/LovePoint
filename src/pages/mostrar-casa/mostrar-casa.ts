import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the MostrarCasaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostrar-casa',
  templateUrl: 'mostrar-casa.html',
})
export default class MostrarCasaPage {

  id :any;
  name : any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient) {

              this.id = navParams.get('id');
              this.name = navParams.get('name');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MostrarCasaPage');
  }

}
