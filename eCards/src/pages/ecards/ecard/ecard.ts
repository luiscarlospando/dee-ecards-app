import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EcardPage');
    }

    ngOnInit() {
        this.ecard = this.navParams.data;
    }

    onBackToHome() {
        this.navCtrl.popToRoot();
    }
}