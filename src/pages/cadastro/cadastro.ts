import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from './../login/login';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public nome: string = '';
  public email: string = '';
  public emailconfirme: string = '';
  public senha: any;
  public confsenha: any;
  public checkado: boolean;

  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _alertCtrl: AlertController,
              public platform: Platform,
              public firebaseauth: AngularFireAuth) {  }

    cadastrar() {
      if (!this.nome || !this.email || !this.emailconfirme || !this.senha || !this.confsenha ) {
        this._alertCtrl.create({
          title: 'Preenchimento obrigatório',
          subTitle: 'Preencha todos os campos!',
        buttons: [
          { text: 'ok' }
        ]
        }).present(); 
        return    
      }

      else if (this.email != this.emailconfirme ){
        this._alertCtrl.create({
          title: 'E-mail não conferem',
          subTitle: 'Confire seu E-mail!',
        buttons: [
          { text: 'ok' }
        ]
        }).present();
        return
      }

      else if (this.senha != this.confsenha ){
        this._alertCtrl.create({
          title: 'Senhas não conferem',
          subTitle: 'Confire sua senha!',
        buttons: [
          { text: 'ok' }
        ]
        }).present();
        return
      }

      else if (this.checkado != true ){
        this._alertCtrl.create({
          title: 'Confirme',
          subTitle: 'Confirme sua idade!',
        buttons: [
          { text: 'ok' }
        ]
        }).present();
        return
      }

      else
        this.firebaseauth.auth.createUserWithEmailAndPassword(this.email,this.senha)
          this._alertCtrl.create({
            title: 'Usuario criado com sucesso',
              subTitle: 'Efetue o login',
              buttons: [
                { text: 'Ok',
                handler: () => { this.navCtrl.setRoot(LoginPage) }
                }
              ]
        }).present()
      }
}