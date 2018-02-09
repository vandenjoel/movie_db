import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import {ServiceProvider} from '../../providers/service/service';
import { NxupcomingPage } from './nxupcoming/nxupcoming';


@IonicPage()
@Component({
  selector: 'page-upcoming',
  templateUrl: 'upcoming.html',
})
export class UpcomingPage {

  private Upcoming:any;
  constructor(
    public navCtrl: NavController,
    private service:ServiceProvider
  ) {

  }

  ionViewDidLoad(){
    this.service.getUpcoming().subscribe(
      upcoming => {
        this.Upcoming = upcoming.results;
        console.log(this.Upcoming)
      },(e)=>{
        console.log(e)
      }
    )
  }

  onGoToPage(id) {
    console.log(id)
    this.navCtrl.push(NxupcomingPage, {id:id});

  }


}
