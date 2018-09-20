
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Email } from "../../data/email.interface";


@Injectable()
export class EnviarEcardService {
    private emailURL: string = "http://interactivesolutions.info/dee-ecards-app/enviar.php";

    constructor(private http: Http) {

    }

    sendEmail(message: Email): Observable<Email> | any {
        return this.http.post(this.emailUrl, message)
            .map(response => {
                console.log('¡El envío de la eCard se realizó satisfactoriamente!', response);
                return response;
            })
            .catch(error => {
                console.log('Hubo un error al enviar la eCard.', error);
                return Observable.throw(error)
            })
    }
}