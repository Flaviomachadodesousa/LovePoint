import { Novidadesservice } from './../providers/novidade-service/novidade-service';
import { ListPage } from './../pages/listmenu/list';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Acompanhants } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';

import { TabsPage } from '../pages/tabs/tabs';
import { ContactPage } from '../pages/acompanhante/contact';
import { AboutPage } from '../pages/casa/about';
import { HomePage } from '../pages/rua/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';

import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs-compat';

import { HttpClientModule } from '@angular/common/http';
import { UsuariosServiceProvider } from '../providers/usuarios-service/usuarios-service';
import { IntroPage } from '../pages/intro/intro';
import { UserDataConfigProvider } from '../providers/userdata-config/userdata-config';
import { Camera } from '@ionic-native/camera/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';

import { CadastroPage } from '../pages/cadastro/cadastro';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CompartilharPage } from '../pages/compartilhar/compartilhar';
import { TermosPage } from '../pages/termos/termos';
import { RecupepassPage } from '../pages/recupepass/recupepass';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UsuariosFirebaseProvider } from '../providers/userdata-firebase/usuarios-firebase';
import { NovidadesPage } from '../pages/novidades/novidades';
import { AcompanhantesProvider } from '../providers/acompanhantes/acompanhantes';

//Acompanhantes estados
import { AcompanhantesaopauloPage } from '../pages/acompanhantesaopaulo/acompanhantesaopaulo';
import { AcompanhanteriodejaneiroPage } from '../pages/acompanhanteriodejaneiro/acompanhanteriodejaneiro';
import { AcompanhanteminasgeraisPage } from '../pages/acompanhanteminasgerais/acompanhanteminasgerais';
import { AcompanhantebahiaPage } from '../pages/acompanhantebahia/acompanhantebahia';
import { AcompanhanteriograndedosulPage } from '../pages/acompanhanteriograndedosul/acompanhanteriograndedosul';
import { AcompanhanteparanaPage } from '../pages/acompanhanteparana/acompanhanteparana';

const config_firebase = {
  apiKey: "AIzaSyBVp0sGCKAFVY_Wyb2RaCowJVHnTqeqMxw",
  authDomain: "acompanhantes-59869.firebaseapp.com",
  databaseURL: "https://acompanhantes-59869.firebaseio.com",
  projectId: "acompanhantes-59869",
  storageBucket: "acompanhantes-59869.appspot.com",
  messagingSenderId: "613993944155"
};

@NgModule({
  declarations: [
    Acompanhants,
    IntroPage,
    LoginPage,
    TabsPage,
    AboutPage,
    HomePage,
    ContactPage,
    CadastroPage,
    CompartilharPage,
    TermosPage,
    RecupepassPage,
    ListPage,
    NovidadesPage,
    AcompanhantesaopauloPage,
    AcompanhanteriodejaneiroPage,
    AcompanhanteminasgeraisPage,
    AcompanhantebahiaPage,
    AcompanhanteriograndedosulPage,
    AcompanhanteparanaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Acompanhants),
    AngularFireModule.initializeApp(config_firebase),
    AngularFireAuthModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Acompanhants,
    LoginPage,
    TabsPage,
    AboutPage,
    HomePage,
    ContactPage,
    IntroPage,
    CadastroPage,
    CompartilharPage,
    TermosPage,
    RecupepassPage,
    ListPage,
    NovidadesPage,
    AcompanhantesaopauloPage,
    AcompanhanteriodejaneiroPage,
    AcompanhanteminasgeraisPage,
    AcompanhantebahiaPage,
    AcompanhanteriograndedosulPage,
    AcompanhanteparanaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuariosServiceProvider,
    IntroPage,
    UserDataConfigProvider,
    Camera,
    Firebase,
    SocialSharing,
    AngularFireAuthModule,
    AngularFireModule,
    UsuariosFirebaseProvider,
    Novidadesservice,
    HttpClientModule,
    Geolocation,
    AcompanhantesProvider
  ]
})
export class AppModule {}