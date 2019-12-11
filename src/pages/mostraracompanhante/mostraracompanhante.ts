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
  Pergunta1: any;
  Pergunta2: any;
  Pergunta3: any;
  Pergunta4: any;
  Pergunta5: any;
  Resposta1: any;
  Resposta2: any;
  Resposta3: any;
  Resposta4: any;
  Resposta5: any;
  Slide_um: any;
  Slide_dois: any

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
              this.Pergunta1 = navParams.get('Pergunta1');
              this.Pergunta2 = navParams.get('Pergunta2');
              this.Pergunta3 = navParams.get('Pergunta2');
              this.Pergunta4 = navParams.get('Pergunta4');
              this.Pergunta5 = navParams.get('Pergunta5');
              this.Resposta1 = navParams.get('Resposta1');
              this.Resposta2 = navParams.get('Resposta2');
              this.Resposta3 = navParams.get('Resposta3');
              this.Resposta4 = navParams.get('Resposta4');
              this.Resposta5 = navParams.get('Resposta5');
              this.Slide_um = navParams.get('Slide_um');
              this.Slide_dois = navParams.get('Slide_dois');
            }

             
              
}