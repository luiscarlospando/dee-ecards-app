import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ecard } from '../../data/ecard.interface';
import { EcardsService } from '../../services/ecards';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
  titulo:string = "Favoritos";
  ecards:Ecard[]; // Declaramos variable donde almacenar E-cards favoritas

  constructor(public navCtrl: NavController, public navParams: NavParams, private ecardsService: EcardsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }

  // En método ionViewWillEnter() accedemos al método obtenerEcardsFavoritas() del servicio ecardsService y asignamos a variable ecards
  ionViewWillEnter() {
    this.ecards = this.ecardsService.obtenerEcardsFavoritas();
  }

}
