
import { Injectable } from "@angular/core";
import { NavController, AlertController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from "@angular/http";

@Injectable()
export class EnviarEcardService {
    public emailURL = 'http://discoveryenlaescuela.com/dee-ecards-app/enviar.php';

    constructor(private http: Http, private navCtrl: NavController, private alertCtrl: AlertController) {

    }

    sendEmail(message) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        let options = new RequestOptions({ headers: headers });

        this.http.post(this.emailURL, message, options)
            .subscribe((response) => {
                console.log(response);
                alertSuccess();
            }, (error) => {
                console.log(error);
                alertError();
            })

        let alertSuccess = () => {
            const alert = this.alertCtrl.create({
                title: '¡La E-card se ha enviado correctamente!',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: () => {
                            console.log('Acción confirmada');

                            this.navCtrl.popToRoot();
                        }
                    }
                ]
            });
            alert.present();
        }

        let alertError = () => {
            const alert = this.alertCtrl.create({
                title: '¡Hubo un problema al enviar la E-card!',
                subTitle: 'Inténtalo de nuevo más tarde.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: () => {
                            console.log('Acción confirmada');
                        }
                    }
                ]
            });
            alert.present();
        }
    }
}