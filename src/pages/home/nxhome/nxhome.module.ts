import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NxhomePage } from './nxhome';

@NgModule({
  declarations: [
    NxhomePage,
  ],
  imports: [
    IonicPageModule.forChild(NxhomePage),
  ],
})
export class NxhomePageModule {}
