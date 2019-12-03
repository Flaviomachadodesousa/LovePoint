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

  options: any;
  public users: any;
  loading: any;

  Id :any;
  Nome : any;
  Local_Atende : any;
  Whatsapp : any;
  Thumbnail_Inicial: any;
  Thumbnail_Descricao: any;
  Idade: any;
  Altura: any;
  Peso: any;
  Pes: any;
  Manequim: any;
  Acompanha: any;
  Atende: any;
  Horario: any;
  Descricao: any;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient,
              public Acompanhantes: AcompanhantesProvider) {

              this.Id = navParams.get('Id');
              this.Nome = navParams.get('Nome');
              this.Local_Atende = navParams.get('Local_Atende');
              this.Whatsapp = navParams.get('Whatsapp');
              this.Thumbnail_Inicial = navParams.get('Thumbnail_Inicial');
              this.Thumbnail_Descricao = navParams.get('Thumbnail_Descricao');
              this.Idade = navParams.get('Idade');
              this.Altura = navParams.get('Altura');
              this.Peso = navParams.get('Peso');
              this.Pes = navParams.get('Pes');
              this.Manequim = navParams.get('Manequim');
              this.Acompanha = navParams.get('Acompanha');
              this.Atende = navParams.get('Atende');
              this.Horario = navParams.get('Horario');
              this.Descricao = navParams.get('Descricao');
             
            }

             
              
}