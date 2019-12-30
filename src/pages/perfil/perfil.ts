import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, normalizeURL } from 'ionic-angular';
import { UsuariosServiceProvider } from '../../providers/usuarios-service/usuarios-service';
import { Camera } from '@ionic-native/camera/ngx';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
   
  profile:any;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _usuariosService: UsuariosServiceProvider,
    public afAuth: AngularFireAuth,
    private _camera: Camera) {

    let user = afAuth.auth.currentUser;

      if (user != null) {
          user.providerData.forEach(function (profile) {
            //console.log("  Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            //console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            //console.log("  Photo URL: " + profile.photoURL);
            return
          });
        }else{
          console.log("   ELSE  ");          
        }
    }
        

  tiraFoto(){
    this._camera.getPicture({
      destinationType: this._camera.DestinationType.FILE_URI,
      saveToPhotoAlbum: true,
      correctOrientation: true,
    }).then(fotoUri => {
      fotoUri = normalizeURL(fotoUri);
      this._usuariosService.salvaAvatar(fotoUri);
    })
    .catch(err => console.log(err));
  }

  get avatar(){
    return this._usuariosService.ObtemAvatar();
  }
  
  
  get usuarioLogado() {
    return this._usuariosService.obtemUsuarioLogado();
  }
 



}
