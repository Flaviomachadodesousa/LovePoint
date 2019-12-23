import { userfirebase } from './../../modelos/userfirebase';
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
  
 

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _usuariosService: UsuariosServiceProvider,
    public afAuth: AngularFireAuth,
    private _camera: Camera) {

      this.afAuth.auth.onAuthStateChanged(user => {
        if (user) {
          console.log(user.email)
          
        }
        else {
          // not logged in
        }
      })
    
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
