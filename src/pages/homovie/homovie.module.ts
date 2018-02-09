import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomoviePage } from './homovie';

@NgModule({
  declarations: [
    HomoviePage,
  ],
  imports: [
    IonicPageModule.forChild(HomoviePage),
  ],
})
export class HomoviePageModule {}
