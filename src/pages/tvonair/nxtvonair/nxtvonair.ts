import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ServiceProvider } from '../../../providers/service/service';



@IonicPage()
@Component({
  selector: 'page-nxtvonair',
  templateUrl: 'nxtvonair.html',
})
export class NxtvonairPage {

  public id: any;
  public movie: any;
  public image: any;
  public credit: any;
  public recommend: any;
  public similar : any;
  public video: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public service: ServiceProvider
  ) {

    
    this.id = navParams.data; 
    console.log('detail page, : ', navParams.data);

  }

  ionViewDidLoad(){
    this.service.getTvDetails(this.id.id).subscribe(
      nxtvonair => {
        this.movie = nxtvonair;
        console.log(this.movie)
      },(e)=>{
        console.log(e)
      }
    )

    this.service.getTvCredit(this.id.id).subscribe(
      nxtvonair => {
        this.credit =nxtvonair;
        console.log(this.credit)
      }, (e)=>{
        console.log(e)
      }
    )

    this.service.getTvImage(this.id.id).subscribe(
      nxtvonair => {
        this.image =nxtvonair;
        console.log(this.image)
      }, (e)=>{
        console.log(e)
      }
    )

    this.service.getTvRecommend(this.id.id).subscribe(
      nxtvonair => {
        this.recommend =nxtvonair;
        console.log(this.recommend)
      }, (e)=>{
        console.log(e)
      }
    )

    this.service.getTvSimilar(this.id.id).subscribe(
      nxtvonair => {
        this.similar =nxtvonair;
        console.log(this.similar)
      }, (e)=>{
        console.log(e)
      }
    )

    this.service.getTvVideo(this.id.id).subscribe(
      nxtv => {
        this.video =nxtv;
        console.log(this.video)
      }, (e)=>{
        console.log(e)
      }
    )
    


  }

  onGoToPage(id) {
    console.log(id)
    this.navCtrl.push(NxtvonairPage, {id:id});
   }

}
