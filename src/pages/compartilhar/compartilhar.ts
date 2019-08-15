import { SocialSharing } from '@ionic-native/social-sharing';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-compartilhar',
  templateUrl: 'compartilhar.html',
})

export class CompartilharPage {

  message: string = 'Instale agora mesmo o App Acompanhants ';
  image: string = 'https://i.ibb.co/Kzknbbk/appicon.png';
  url: string = 'http://www.acompanhants.com';

  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              public socialSharing: SocialSharing) {
  }

  whatsapp(){
    this.socialSharing.shareViaWhatsApp(this.message, this.image, this.url)
      .then(() => {
        console.log('foi');
      })
      .catch(() => {
        console.log('nao foi');
      });
    }

  facebooksend(){
    this.socialSharing.shareViaFacebook(this.message, this.image, this.url)
    .then(() => {
      console.log('foi');
      })
    .catch(() => {
      console.log('Nao foi');
      });
    }

  emailsend(){
    this.socialSharing.shareViaEmail('Instale agora mesmo o App Acompanhants', 'Instale agora mesmo o App Acompanhants', ['email@deseja.com.br'])
      .then(() => {
        console.log('foi');
      })
      .catch(() => {
      console.log('Nao foi');
      });
    } 

}