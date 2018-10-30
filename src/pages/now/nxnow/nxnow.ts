import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { ServiceProvider } from '../../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-nxnow',
  templateUrl: 'nxnow.html',
})
export class NxnowPage {

  public id: any;
  public movie: any;
  public image : any;
  public credit : any;
  public similar : any;
  public recommend: any;
  public video: any;

  constructor(
    public navCtrl: NavController,
    public service: ServiceProvider, 
    public navParams: NavParams) {

      this.id = navParams.data; 
      console.log('detail page, : ', navParams.data);
  }



  ionViewDidLoad(){
    this.service.getMoDetails(this.id.id).subscribe(
      nxnow => {
        this.movie = nxnow;
        console.log(this.movie)
      },(e)=>{
        console.log(e)
      }
    )

    this.service.getCredit(this.id.id).subscribe(
      nxnow => {
        this.credit =nxnow;
        console.log(this.credit)
      }, (e)=>{
        console.log(e)
      }
    )

    this.service.getImage(this.id.id).subscribe(
      nxnow => {
        this.image = nxnow;
        console.log(this.image)
      }, (e)=>{
        console.log(e)
      }
    )

    this.service.getSimilar(this.id.id).subscribe(
      nxnow => {
        this.similar = nxnow;
        console.log(this.similar)
      }, (e)=>{
        console.log(e)
      }
    )

    this.service.getRecommend(this.id.id).subscribe(
      nxhome => {
        this.recommend = nxhome;
        console.log(this.recommend)
      }, (e)=>{
        console.log(e)
      }
    )

    this.service.getVideo(this.id.id).subscribe(
      nxhome => {
        this.video =nxhome;
        console.log(this.video)
      }, (e)=>{
        console.log(e)
      }
    )

  }
  
onGoToPage(id) {
    console.log(id)
    this.navCtrl.push(NxnowPage, {id:id});

  }

}
