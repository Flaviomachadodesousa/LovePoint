import { Component } from '@angular/core';

import { AboutPage } from '../casa/about';
import { ContactPage } from '../acompanhante/contact';
import { HomePage } from '../rua/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
