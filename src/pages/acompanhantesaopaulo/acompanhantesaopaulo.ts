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
                //console.log('USER ID É INGUAL A ='+AUSER.thumbnailUrl)
                //console.log('USER ID É INGUAL A ='+AUSER.title)
              });
            }
}