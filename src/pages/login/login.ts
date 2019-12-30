import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs-compat';
import { TabsPage } from './../tabs/tabs';
import { CadastroPage } from '../cadastro/cadastro';
import { RecupepassPage } from './../recupepass/recupepass';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  email: string;
  senha: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    private _alertCtrl: AlertController,
    ) {
  }

  fazerloginfire(){
    if(!this.email || !this.senha){
      this._alertCtrl.create({
        title: 'Preenchimento obrigatório',
        subTitle: 'Preencha todos os campos!',
      buttons: [
        { text: 'ok' }
      ]
      }).present(); 
    }else{
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.senha)
    .then(() => {
      this.navCtrl.setRoot(TabsPage);
    })
    .catch(() => this._alertCtrl.create({
      title: 'Falha no login',
              subTitle: 'Email ou Senha incorreto! Verifique!',
              buttons: [
                { text: 'Ok' }
              ]
    }).present()
    )
}
}
  avancaCadastro() {
      this.navCtrl.push(CadastroPage);
    }

  avancarrecuperapassword(){
      this.navCtrl.push(RecupepassPage);
    }

 }