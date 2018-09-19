import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { InicioPage } from '../pages/inicio/inicio';
import { EcardsPage } from '../pages/ecards/ecards';
import { EcardPage } from '../pages/ecards/ecard/ecard';
import { EnviarPage } from '../pages/enviar/enviar';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { AjustesPage } from '../pages/ajustes/ajustes';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EcardsService } from '../services/ecards';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    EcardsPage,
    EcardPage,
    EnviarPage,
    AcercaDePage,
    FavoritosPage,
    AjustesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    EcardsPage,
    EcardPage,
    EnviarPage,
    AcercaDePage,
    FavoritosPage,
    AjustesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EcardsService
  ]
})
export class AppModule {}
