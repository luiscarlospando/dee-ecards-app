import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EcardsPage } from '../ecards/ecards';
import { Ecard } from '../../data/ecard.interface';
import ecardsData from '../../data/ecards';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage implements OnInit {
  titulo:string = "Inicio";
  coleccionEcards: { categoria: string, ecards: Ecard[], icono: string }[]; // Creamos estructura de datos, 'coleccionEcards' de tipo objeto
  ecardsPage = EcardsPage; // Especificamos la página que queremos pushear con [NavPush] (ver inicio.html)

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  // onLoadEcards() {
  //   this.navCtrl.push(EcardsPage); // Ponemos la página EcardsPage en el navigation stack
  // }

  ngOnInit() {
    this.coleccionEcards = ecardsData; // Agregamos nuestro data estático y lo asignamos a nuestra estructura de datos al inicializar
  }

}
