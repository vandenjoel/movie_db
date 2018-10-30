import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NxtvPage } from './nxtv';

@NgModule({
  declarations: [
    NxtvPage,
  ],
  imports: [
    IonicPageModule.forChild(NxtvPage),
  ],
})
export class NxtvPageModule {}
