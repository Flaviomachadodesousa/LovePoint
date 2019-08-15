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
  public email: any = '';
  public CPF: number;
  public data: string = new Date().toISOString();
  public telefone: number ;
  public senha: any;
  public confsenha: any;
  

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _alertCtrl: AlertController,
              public platform: Platform,
              public firebaseauth: AngularFireAuth) { }

    cadastrar() {
      if (!this.nome || !this.email || !this.CPF || !this.telefone || !this.senha || !this.confsenha) {
        this._alertCtrl.create({
          title: 'Preenchimento obrigatório',
          subTitle: 'Preencha todos os campos!',
        buttons: [
          { text: 'ok' }
        ]
        }).present(); 
        return    
      }
      else if (this.senha !== this.confsenha){
        this._alertCtrl.create({
          title: 'Senhas não conferem',
          subTitle: 'Confire sua senha!',
        buttons: [
          { text: 'ok' }
        ]
        }).present();
        return
      }
      else
        this.firebaseauth.auth.createUserWithEmailAndPassword(this.email,this.senha)
          this._alertCtrl.create({
            title: 'Usuario Criado com sucesso',
              subTitle: 'Efetue o login',
              buttons: [
                { text: 'Ok',
                handler: () => { this.navCtrl.setRoot(LoginPage)}
                }
              ]
        }).present()
      }
}