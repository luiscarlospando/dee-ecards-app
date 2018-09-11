import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ecard } from '../../data/ecard.interface';

/**
 * Generated class for the EcardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ecards',
  templateUrl: 'ecards.html',
})
export class EcardsPage implements OnInit {
  titulo:string = "eCards";
  grupoEcard: { categoria: string, ecards: Ecard[], icono: string }; // Creamos lugar donde recibir datos de otras páginas

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.grupoEcard = this.navParams.data;
  }

  // Approach opcional
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad EcardsPage');

  //   this.grupoEcard = this.navParams.data; // Recibimos datos de otra página
  //   // IMPORTANTE: agregar operador elvis (?) al renderizar data en vistas
  // }

}
