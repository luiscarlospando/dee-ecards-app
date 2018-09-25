import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Ecard } from '../../data/ecard.interface';
import { EcardsService } from '../../services/ecards';
import { EcardPage } from '../ecards/ecard/ecard';

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
  ecardPage = EcardPage; // Especificamos la página que queremos pushear con [NavPush] (ver ecards.html)
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private ecardsService: EcardsService) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EcardsPage');
    console.log(this.grupoEcard);
  }

  // onSeleccionarEcard() {
  //   this.navCtrl.push(this.ecardPage, this.navParams.data.ecards);
  // }

  onAgregarAFavoritos(ecardSeleccionada: Ecard) {
    const alert = this.alertCtrl.create({
      title: 'Agregar a Favoritos',
      subTitle: '¿Deseas agregar esta eCard a tus Favoritos?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Acción cancelada');
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            console.log('Acción confirmada');

            this.ecardsService.agregarEcardAFavoritos(ecardSeleccionada);
          }
        }
      ]
    });
    alert.present();
  }

  ngOnInit() {
    this.grupoEcard = this.navParams.data; // Recibimos datos de página anterior y almacenamos en grupoEcard
  }

  // Approach opcional
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad EcardsPage');

  //   this.grupoEcard = this.navParams.data; // Recibimos datos de otra página
  //   // IMPORTANTE: agregar operador elvis (?) al renderizar data en vistas
  // }

}
