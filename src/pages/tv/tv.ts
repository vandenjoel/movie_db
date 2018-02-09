import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


import {ServiceProvider} from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-tv',
  templateUrl: 'tv.html',
})

export class TvPage {

  private Tv:any;
  constructor(
    public navCtrl: NavController,
    private service:ServiceProvider
  ) {

  }

  ionViewDidLoad(){
    this.service.getTvTop().subscribe(
      tv => {
        this.Tv = tv.results;
        console.log(this.Tv)
      },(e)=>{
        console.log(e)
      }
    )
  }


}
