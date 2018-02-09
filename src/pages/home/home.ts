import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import {ServiceProvider} from '../../providers/service/service';

import { NxhomePage } from './nxhome/nxhome';




@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private Home:any;
  constructor(
    public navCtrl: NavController,
    private service:ServiceProvider
  ) {
   
  }

  ionViewDidLoad(){
    this.service.getHome().subscribe(
      home => {
        this.Home = home.results;
        console.log(this.Home)
      },(e)=>{
        console.log(e)
      }
    )
  }

  onGoToPage(id) {
    console.log(id)
    this.navCtrl.push(NxhomePage, {id:id});

  }

  

}


