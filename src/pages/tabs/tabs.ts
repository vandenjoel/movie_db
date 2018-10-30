import { Component } from '@angular/core';



import { HomoviePage } from '../homovie/homovie';
import { HotvPage } from '../hotv/hotv';
import { NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public tab1: any;
  public tab2: any;
  public tab3: any;

  constructor(navParams: NavParams ) {
    this.tab1 = HomoviePage;
    this.tab2 = HotvPage;
    this.tab3 = AboutPage;
    
    
  } 
}

