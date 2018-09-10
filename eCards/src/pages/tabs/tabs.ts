import { Component } from '@angular/core';

import { InicioPage } from '../inicio/inicio';
import { EcardsPage } from '../ecards/ecards';
import { FavoritosPage } from '../favoritos/favoritos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InicioPage;
  tab2Root = EcardsPage;
  tab3Root = FavoritosPage;

  constructor() {

  }
}
