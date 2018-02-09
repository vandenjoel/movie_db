import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import {ServiceProvider} from '../../providers/service/service';
import { NxpopularPage } from './nxpopular/nxpopular';

@IonicPage()
@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html',
})
export class PopularPage {

  private Popular:any;
  constructor(
    public navCtrl: NavController,
    private service:ServiceProvider
  ) {

  }

  ionViewDidLoad(){
    this.service.getPopular().subscribe(
      popular => {
        this.Popular = popular.results;
        console.log(this.Popular)
      },(e)=>{
        console.log(e)
      }
    )
  }

  onGoToPage(id) {
    console.log(id)
    this.navCtrl.push(NxpopularPage, {id:id});
  }

}
