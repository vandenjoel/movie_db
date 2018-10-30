import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TvPage } from '../tv/tv';
import { TvairingPage } from '../tvairing/tvairing';
import { TvonairPage } from '../tvonair/tvonair';
import { TvpopularPage } from '../tvpopular/tvpopular';
import { ServiceProvider } from '../../providers/service/service';
import { NxtvPage } from '../tv/nxtv/nxtv';
import { SearchtvPage } from '../searchtv/searchtv';

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

  public list: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public service: ServiceProvider) {
  }

  ionViewDidLoad() {
    this.service.getTvList().subscribe(
    hotv => {
      this.list = hotv.items;
      console.log(this.list)
    },(e)=>{
      console.log(e)
    }
  )
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

  onGoToPage(id) {
    console.log(id)
    this.navCtrl.push(NxtvPage, {id:id});

  }

  onGoToSearch() {
    console.log()
    this.navCtrl.push(SearchtvPage);
  }


}
