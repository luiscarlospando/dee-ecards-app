import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Email } from '../../../data/email.interface'; // Importamos interfaz (estructura de datos creada para pasar a función que envía correo)
import { EnviarEcardService } from '../../../services/enviar-ecard'; // Importamos servicio que se encarga de enviar datos

/**
 * Generated class for the EcardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-ecard',
    templateUrl: 'ecard.html',
    providers: [EnviarEcardService]
})
export class EcardPage {
    ecard: { id: string, titulo: string, texto: string, img: string }; // Creamos lugar donde recibir datos de otras páginas
    titulo: string = "Enviar eCard";
    message: Email = {};

    constructor(public navCtrl: NavController, public navParams: NavParams, private enviarEcardService: EnviarEcardService) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EcardPage');
    }

    onEnviarEcard(message: Email) {
        this.enviarEcardService.sendEmail(message.value);
    }

    onBackToHome() {
        this.navCtrl.popToRoot();
    }
}