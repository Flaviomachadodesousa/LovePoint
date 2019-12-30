import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, App, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs-compat';

//import { UsuariosServiceProvider } from '../providers/usuarios-service/usuarios-service';
import { IntroPage } from '../pages/intro/intro';
import { UserDataConfigProvider } from '../providers/userdata-config/userdata-config';
import { LoginPage } from '../pages/login/login';
import { CompartilharPage } from '../pages/compartilhar/compartilhar';
import { TermosPage } from '../pages/termos/termos';
import { NovidadesPage } from '../pages/novidades/novidades';
import { PerfilPage } from '../pages/perfil/perfil';

@Component({
  selector: 'Acompanhants',
  templateUrl: 'app.html'
})
export class Acompanhants {
  @ViewChild(Nav) public nav: Nav;
  rootPage:any;
  email: any;

  //pages: Array<{title: string, component: any}>;
    pages = [
          { titulo: 'Perfil', componente: PerfilPage, icone: 'person' }
          ,
          { titulo: 'Novidades', componente: NovidadesPage, icone: 'star' }
          ,
          { titulo: 'Recomendar o App', componente: CompartilharPage, icone: 'share' }
          ,
          { titulo: 'Termos de Uso', componente: TermosPage, icone: 'help-circle' }
          ,
          //{ titulo: 'Sair', componente: this.logout, icone: 'help-circle' }
        ];
  
  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public afAuth: AngularFireAuth,
              //private _usuariosService: UsuariosServiceProvider,
              UserDataConfigProvider: UserDataConfigProvider,
              public menuCtrl: MenuController,
              public app: App) {
    platform.ready().then(() => {

      let config = UserDataConfigProvider.getConfigData();
      if(config == null){
        this.rootPage = IntroPage
        UserDataConfigProvider.setConfigData(false);
      }else{
        this.rootPage = LoginPage;
      };
      //console.log(config);

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  irParaPagina(componente) {
    this.nav.push(componente);
  }

 /*get usuarioLogado() {
    return this._usuariosService.obtemUsuarioLogado();
  }

  get avatar(){
    return this._usuariosService.ObtemAvatar();
  }*/



  /* CRIAR PROVIDER PARA O LOGOUT
    Logout(sair){
    console.log ("Logout");
    //this.menuCtrl.close();
    //var nav = this.app.getRootNav();
    //nav.setRoot(LoginPage);
  }
  */

}