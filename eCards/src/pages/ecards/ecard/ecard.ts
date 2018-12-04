import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// import { Email } from '../../../data/email.interface'; // Importamos interfaz (estructura de datos creada para pasar a función que envía correo)
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
    titulo: string = "Enviar eCard";
    ecard: { id: string, titulo: string, texto: string, img: string }; // Creamos lugar donde recibir datos de otras páginas
    message: {
        nombreRemitente: string;
        nombreDestinatario: string;
        emailDestinatario: string;
        nombreEcard: string;
        mensaje: string;
        imagen: string;
    };
    responseStatus: number;

    constructor(public navCtrl: NavController, public navParams: NavParams, private enviarEcardService: EnviarEcardService, private alertCtrl: AlertController) {
        this.ecard = this.navParams.data; // Recibimos datos de página anterior y almacenamos en ecard
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EcardPage');
        console.log(this.ecard);
    }

    onEnviarEcard(message) {
        const alert = this.alertCtrl.create({
            title: '¿Estás seguro?',
            subTitle: 'Por favor confirma que deseas enviar la eCard.',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: () => {
                        console.log('Acción cancelada');
                    }
                },
                {
                    text: 'Aceptar',
                    handler: () => {
                        console.log('Acción confirmada');
                        console.log(message.value);
                        this.enviarEcardService.sendEmail(message.value);
                    }
                }
            ]
        });
        alert.present();
    }

    onBackToPrev() {
        this.navCtrl.pop();
    }

    onBackToHome() {
        this.navCtrl.popToRoot();
    }
}