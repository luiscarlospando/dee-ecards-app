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
    nombre: string;
    
    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EcardPage');
    }

    ngOnInit() {
        this.nombre = this.navParams.get('tipoEcard');
    }

    onBackToHome() {
        this.navCtrl.popToRoot();
    }
}