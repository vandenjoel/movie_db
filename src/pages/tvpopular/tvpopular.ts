import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


import {ServiceProvider} from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-tvpopular',
  templateUrl: 'tvpopular.html',
})

export class TvpopularPage {

  private Tvpopular:any;
  constructor(
    public navCtrl: NavController,
    private service:ServiceProvider
  ) {

  }

  ionViewDidLoad(){
    this.service.getTvPopular().subscribe(
      tvpopular => {
        this.Tvpopular = tvpopular.results;
        console.log(this.Tvpopular)
      },(e)=>{
        console.log(e)
      }
    )
  }


}
