import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

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
})
export class EcardPage implements OnInit {
    ecard: { id: string, titulo: string, texto: string }; // Creamos lugar donde recibir datos de otras páginas
    titulo: string = "Enviar eCard";
    
    nombre: string;
    email: string;
    enviara: string;
    mensaje: string;
    endpoint: string;

    http: Http;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
        this.http = http;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EcardPage');
    }

    ngOnInit() {
        // this.ecard = this.navParams.data;

        // estos datos hay que obtenerlos de la vista, pero por ahora mantengamos las cosas sencillas (solo al inicializar)
        // this.nombre = "Nombre Falso";
        // this.email = "correo@ejemplo.com";
        // this.enviara = "correo@ejemplo.com";
        // this.mensaje = "¡Hola, esta es una prueba enviada desde la app de Ecards!";

        // asignamos nuestro endpoint
        this.endpoint = "http://interactivesolutions.info/dee-ecards-app/enviar.php";
    }

    enviarEcard() {
        let postVars = {
            nombre: this.nombre,
            email: this.email,
            enviara: this.enviara,
            mensaje: this.mensaje
        };

        // aquí enviamos los datos a nuestro endpoint
        this.http.post(this.endpoint, postVars)
            .subscribe(
                response => console.log(response),
                response => console.log(response)
            )
    }

    onBackToHome() {
        this.navCtrl.popToRoot();
    }
}