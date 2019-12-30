import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-recupepass',
  templateUrl: 'recupepass.html',
})
export class RecupepassPage {
  email: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    private _alertCtrl: AlertController,
    ) {}

  sendemailreset(){
    this.afAuth.auth.sendPasswordResetEmail(this.email)
    .then(() => {
      this._alertCtrl.create({
        title: 'Verifique seu E-mail',
        subTitle: 'E-mail de recuperação de senha enviado',
        buttons: [
          { text: 'Ok', 
          handler: () => { this.navCtrl.setRoot(LoginPage) }
          }
        ]
      }).present()
    }).catch(() => this._alertCtrl.create({
      title: 'Verifique seu E-mail',
              subTitle: 'E-mail incorretos verifique!',
              buttons: [
                { text: 'Ok', 
                handler: () => { this.navCtrl.setRoot(LoginPage) }
                }
              ]
    }).present()
    )
  }
}