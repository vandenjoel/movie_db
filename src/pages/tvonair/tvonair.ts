import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


import {ServiceProvider} from '../../providers/service/service';
import { NxtvonairPage } from './nxtvonair/nxtvonair';
import { SearchtvPage } from '../searchtv/searchtv';

@IonicPage()
@Component({
  selector: 'page-tvonair',
  templateUrl: 'tvonair.html',
})

export class TvonairPage {

  private Tvonair:any;
  constructor(
    public navCtrl: NavController,
    private service:ServiceProvider
  ) {

  }

  ionViewDidLoad(){
    this.service.getTvOnair().subscribe(
      tvonair => {
        this.Tvonair = tvonair.results;
        console.log(this.Tvonair)
      },(e)=>{
        console.log(e)
      }
    )
  }

  onGoToPage(id) {
    console.log(id)
    this.navCtrl.push(NxtvonairPage, {id:id});
  }

  onGoToSearch() {
    console.log()
    this.navCtrl.push(SearchtvPage);
  }

}
