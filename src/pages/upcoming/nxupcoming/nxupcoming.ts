import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ServiceProvider } from '../../../providers/service/service';


@IonicPage()
@Component({
  selector: 'page-nxupcoming',
  templateUrl: 'nxupcoming.html',
})

export class NxupcomingPage {

  public id : any;
  public movie : any;
  public credit: any;
  public image : any;
  public similar : any;
  public recommend: any;
  public video: any;

  constructor(
    public navCtrl: NavController, 
    private service: ServiceProvider,
    public navParams : NavParams) {

      this.id = navParams.data; 
      console.log('detail page, : ', navParams.data);
  }

  ionViewDidLoad(){
    this.service.getMoDetails(this.id.id).subscribe(
      nxupcoming => {
        this.movie = nxupcoming;
        console.log(this.movie)
      },(e)=>{
        console.log(e)
      }
    )

    this.service.getCredit(this.id.id).subscribe(
      nxupcoming => {
        this.credit =nxupcoming;
        console.log(this.credit)
      }, (e)=>{
        console.log(e)
      }
    )

    this.service.getImage(this.id.id).subscribe(
      nxupcoming => {
        this.image = nxupcoming;
        console.log(this.image)
      }, (e)=>{
        console.log(e)
      }
    )

    this.service.getSimilar(this.id.id).subscribe(
      nxupcoming => {
        this.similar = nxupcoming;
        console.log(this.similar)
      }, (e)=>{
        console.log(e)
      }
    )

    this.service.getRecommend(this.id.id).subscribe(
      nxupcoming => {
        this.recommend = nxupcoming;
        console.log(this.recommend)
      }, (e)=>{
        console.log(e)
      }
    )

    this.service.getVideo(this.id.id).subscribe(
      popular => {
        this.video =popular;
        console.log(this.video)
      }, (e)=>{
        console.log(e)
      }
    )

  }

  onGoToPage(id) {
    console.log(id)
    this.navCtrl.push(NxupcomingPage, {id:id});

  }

}
