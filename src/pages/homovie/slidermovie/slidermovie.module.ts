import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlidermoviePage } from './slidermovie';

@NgModule({
  declarations: [
    SlidermoviePage,
  ],
  imports: [
    IonicPageModule.forChild(SlidermoviePage),
  ],
})
export class SlidermoviePageModule {}
