import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AcompanhantesProvider } from '../../providers/acompanhantes/acompanhantes';
import { MostraracompanhantePage } from '../mostraracompanhante/mostraracompanhante';


@IonicPage()
@Component({
  selector: 'page-acompanhanteriograndedosul',
  templateUrl: 'acompanhanteriograndedosul.html',
})
export class AcompanhanteriograndedosulPage {

  users: any;
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
                  }, 3000);
            }
            
            getsaopaulo() {
              this.Acompanhantes.getsaopaulo()
              .then(data => {
                this.users = data;
                console.log(this.users);
              });
             }

             detalhes(AUSER){
               this.navCtrl.push(MostraracompanhantePage, {
                Id : AUSER.Id ,
                Nome : AUSER.Nome,
                Local_Atende : AUSER.Local_Atende,
                Whatsapp : AUSER.Whatsapp,
                Thumbnail_Inicial: AUSER.Thumbnail_Inicial,
                Thumbnail_Descricao: AUSER.Thumbnail_Descricao,
                Idade: AUSER.Idade,
                Altura: AUSER.Altura,
                Peso: AUSER.Peso,
                Pes: AUSER.Pes,
                Manequim: AUSER.Manequim,
                Acompanha: AUSER.Acompanha,
                Atende: AUSER.Atende,
                Horario: AUSER.Horario,
                Descricao: AUSER.Descricao,
                Pergunta1: AUSER.Pergunta1,
                Pergunta2: AUSER.Pergunta2,
                Pergunta3: AUSER.Pergunta3,
                Pergunta4: AUSER.Pergunta4,
                Pergunta5: AUSER.Pergunta5,
                Resposta1: AUSER.Resposta1,
                Resposta2: AUSER.Resposta2,
                Resposta3: AUSER.Resposta3,
                Resposta4: AUSER.Resposta4,
                Resposta5: AUSER.Resposta5,
                Slide_um: AUSER.Slide_um,
                Slide_dois: AUSER.Slide_dois,
                Slide_tres: AUSER.Slide_tres,
                Slide_quatro: AUSER.Slide_quatro,
                Slide_cinco: AUSER.Slide_cinco,
                //console.log('USER ID É INGUAL A ='+AUSER.thumbnailUrl)
                //console.log('USER ID É INGUAL A ='+AUSER.title)
              });
            }
}