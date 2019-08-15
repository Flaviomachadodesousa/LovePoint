import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { CadastroPage } from "../../pages/cadastro/cadastro";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsuariosFirebaseProvider {
    
  public user: Observable<firebase.User>;


    constructor(public afAuth: AngularFireAuth,
                public CadastroPage:CadastroPage){

      //this.user = afAuth.authState;
    }

   /* coletardados(){
        return this.afAuth.auth.onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              var displayName = user.displayName;
              var email = user.email;
              //var password = user.password;
              var emailVerified = user.emailVerified;
              var photoURL = user.photoURL;
              var isAnonymous = user.isAnonymous;
              var uid = user.uid;
              var providerData = user.providerData;
              var phoneNumber = user.phoneNumber;
              // ...
            } else {
              // User is signed out.
              // ...
            }
          });
    }

    Obtemusuariofire(){
        return this.afAuth.auth.onAuthStateChanged(function(userfirebase)
        {
          if (userfirebase) {
            // Conectado
          }else{
            // nao Conectado
          }
        });
    } */

}