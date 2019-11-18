import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AcompanhantesProvider } from '../../providers/acompanhantes/acompanhantes';

/**
 * Generated class for the MostraracompanhantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostraracompanhante',
  templateUrl: 'mostraracompanhante.html',
})
export class MostraracompanhantePage {
  
  public users: any;
  loading: any;
  id: any;
  title: any;
  thumbnailUrl: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient,
              public Acompanhantes: AcompanhantesProvider) {

              this.id = navParams.get('id');
              this.title = navParams.get('title');
              this.thumbnailUrl = navParams.get('thumbnailUrl');
              }
              
}