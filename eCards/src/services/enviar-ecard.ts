
import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";


@Injectable()
export class EnviarEcardService {
    public emailURL = "http://interactivesolutions.info/dee-ecards-app/enviar.php";

    constructor(private http: Http) {

    }

    sendEmail(message) {
        // aquí enviamos los datos directo a emailUrl
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        let options = new RequestOptions({ headers: headers });

        this.http.post(this.emailURL, message, options)
            .subscribe(
                response => console.log(response)
            )

        console.log(message);
    }
}