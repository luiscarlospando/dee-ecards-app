import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EcardsPage } from './ecards';

@NgModule({
  declarations: [
    EcardsPage,
  ],
  imports: [
    IonicPageModule.forChild(EcardsPage),
  ],
})
export class EcardsPageModule {}
