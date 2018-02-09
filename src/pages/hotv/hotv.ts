import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TvPage } from '../tv/tv';
import { TvairingPage } from '../tvairing/tvairing';
import { TvonairPage } from '../tvonair/tvonair';
import { TvpopularPage } from '../tvpopular/tvpopular';

/**
 * Generated class for the HotvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotv',
  templateUrl: 'hotv.html',
})
export class HotvPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotvPage');
  }


  onGoToPageTv() {
    this.navCtrl.push(TvPage);
  }

  onGoToPageAiring() {
    this.navCtrl.push(TvairingPage);
  }

  onGoToPageOnair() {
    this.navCtrl.push(TvonairPage);
  }
  onGoToPagePopular() {
    this.navCtrl.push(TvpopularPage);
  }


}
