import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


import {ServiceProvider} from '../../providers/service/service';
import { NxtvairingPage } from './nxtvairing/nxtvairing';
import { SearchtvPage } from '../searchtv/searchtv';

@IonicPage()
@Component({
  selector: 'page-tvairing',
  templateUrl: 'tvairing.html',
})

export class TvairingPage {


  private Tvairing:any;
  constructor(
    public navCtrl: NavController,
    private service:ServiceProvider
  ) {

  }

  ionViewDidLoad(){
    this.service.getTvAiring().subscribe(
      tvairing => {
        this.Tvairing = tvairing.results;
        console.log(this.Tvairing)
      },(e)=>{
        console.log(e)
      }
    )
  }

  onGoToPage(id) {
    console.log(id)
    this.navCtrl.push(NxtvairingPage, {id:id});
  }

  onGoToSearch() {
    console.log()
    this.navCtrl.push(SearchtvPage);
  }
}
