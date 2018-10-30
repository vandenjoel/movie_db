import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { HomePage } from '../home/home';
import { UpcomingPage } from '../upcoming/upcoming';
import { NowPage } from '../now/now';
import { PopularPage } from '../popular/popular';
import { ServiceProvider } from '../../providers/service/service';
import { NxhomePage } from '../home/nxhome/nxhome';
import { SearchmoviePage } from '../searchmovie/searchmovie';



@IonicPage()
@Component({
  selector: 'page-homovie',
  templateUrl: 'homovie.html',
})



export class HomoviePage {
  public list: any;

 
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public service: ServiceProvider) {

  }

  ionViewDidLoad() {

    this.service.getMoList().subscribe(
      homovie => {
        this.list = homovie.items;
        console.log(this.list)
      },(e)=>{
        console.log(e)
      }
    )

  

  }

  onGoToPageTop() {
    this.navCtrl.push(HomePage);
  }

  onGoToPageUpcoming() {
    this.navCtrl.push(UpcomingPage);
  }

  onGoToPageNow() {
    this.navCtrl.push(NowPage);
  }
  onGoToPagePopular() {
    this.navCtrl.push(PopularPage);
  }

  onGoToPage(id) {
    console.log(id)
    this.navCtrl.push(NxhomePage, {id:id});

  }

  onGoToSearch() {
    console.log()
    this.navCtrl.push(SearchmoviePage);
  }



  

 

  startAutoplay(){

  }
}

