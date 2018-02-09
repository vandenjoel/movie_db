import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


import {ServiceProvider} from '../../providers/service/service';

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


}
