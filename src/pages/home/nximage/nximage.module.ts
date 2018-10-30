import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NximagePage } from './nximage';

@NgModule({
  declarations: [
    NximagePage,
  ],
  imports: [
    IonicPageModule.forChild(NximagePage),
  ],
})
export class NximagePageModule {}
