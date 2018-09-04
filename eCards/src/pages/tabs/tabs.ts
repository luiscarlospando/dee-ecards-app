import { Component } from '@angular/core';

import { InicioPage } from '../inicio/inicio';
import { EnviarPage } from '../enviar/enviar';
import { AcercaDePage } from '../acerca-de/acerca-de';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InicioPage;
  tab2Root = EnviarPage;
  tab3Root = AcercaDePage;

  constructor() {

  }
}
