import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EcardPage } from './ecard/ecard';

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
export class EcardsPage {
  titulo:string = "eCards";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EcardsPage');
  }

  onLoadEnviarEcard(tipoEcard: string) {
    this.navCtrl.push(EcardPage, {
      tipoEcard: tipoEcard
    });
  }

}
