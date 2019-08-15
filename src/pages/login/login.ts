import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import 'rxjs-compat';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from './../tabs/tabs';
import { CadastroPage } from '../cadastro/cadastro';
import { RecupepassPage } from './../recupepass/recupepass';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  usuario: any;
  email: string = 'flavio@adamos.com.br';
  senha: string = '1qaz2wsx';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    private _alertCtrl: AlertController,
    ) {
  }

  fazerloginfire(){
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

  avancaCadastro() {
      this.navCtrl.push(CadastroPage);
    }

  avancarrecuperapassword(){
      this.navCtrl.push(RecupepassPage);
    }


 }