import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../../modelos/usuario";
import { AngularFireAuth } from "angularfire2/auth";

const CHAVE = 'avatar-usuario';
//const MEUIP = 'http://192.168.43.254:8080';

@Injectable()
export class UsuariosServiceProvider {
    email=''
    senha=''
    user: any;
    

    private _usuarioLogado: Usuario;

    constructor(
      //private _http: HttpClient,
      public afAuth: AngularFireAuth){

    }

    efetuarloginfirebase(email,senha){
      return this.afAuth.auth.signInWithEmailAndPassword(this.email, this.senha)
    
    }

    obtemUsuarioLogado() {
      /*this.afAuth.auth.onAuthStateChanged(user => {
        if (user) {
          console.log(user.email)
        }
        else {
          // not logged in
        }
      })*/
    } 

    salvaAvatar(avatar){
      localStorage.setItem(CHAVE, avatar);
    }

    ObtemAvatar(){
      return localStorage.getItem(CHAVE)
              ? localStorage.getItem(CHAVE)
              :"assets/img/avatar-padrao.jpg";

    }

}