import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { HomePage } from '../home/home';
import { UpcomingPage } from '../upcoming/upcoming';
import { NowPage } from '../now/now';
import { PopularPage } from '../popular/popular';



@IonicPage()
@Component({
  selector: 'page-homovie',
  templateUrl: 'homovie.html',
})



export class HomoviePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomoviePage');
  }

  onGoToPageTop() {
    this.navCtrl.push(HomePage);
  }

  onGoToPageUpcoming() {
    this.navCtrl.push(UpcomingPage);
  }

  onGoToPageNow() {
    this.navCtrl.push(NowPage);
  }
  onGoToPagePopular() {
    this.navCtrl.push(PopularPage);
  }



  

 

  startAutoplay(){

  }
}

