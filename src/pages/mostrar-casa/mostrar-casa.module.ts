import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import MostrarCasaPage from './mostrar-casa';

@NgModule({
  declarations: [
    MostrarCasaPage,
  ],
  imports: [
    IonicPageModule.forChild(MostrarCasaPage),
  ],
})
export class MostrarCasaPageModule {}
