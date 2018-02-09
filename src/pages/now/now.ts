import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


import {ServiceProvider} from '../../providers/service/service';
import { NxnowPage } from './nxnow/nxnow';

@IonicPage()
@Component({
  selector: 'page-now',
  templateUrl: 'now.html',
})

export class NowPage {

  private Now:any;

  constructor(
    public navCtrl: NavController,
    private service:ServiceProvider
  ) {
    

  }

  ionViewDidLoad(){
    this.service.getNow().subscribe(
      now => {
        this.Now = now.results;
        console.log(this.Now)
      },(e)=>{
        console.log(e)
      }
    )
  }


  onGoToPage(id) {
    console.log(id)
    this.navCtrl.push(NxnowPage, {id:id});

  }

}
