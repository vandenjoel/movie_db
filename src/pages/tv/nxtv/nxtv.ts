import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../../providers/service/service';



@IonicPage()
@Component({
  selector: 'page-nxtv',
  templateUrl: 'nxtv.html',
})
export class NxtvPage {

  public id: any;
  public movie: any;
  public credit: any;
  public image: any;
  public recommend: any;
  public similar: any;
  public video: any;

  constructor(
    public navCtrl: NavController,
    public service: ServiceProvider, 
    public navParams: NavParams) {

      this.id = navParams.data; 
      console.log('detail page, : ', navParams.data)

  }


  ionViewDidLoad(){
    this.service.getTvDetails(this.id.id).subscribe(
      nxtv => {
        this.movie = nxtv;
        console.log(this.movie)
      },(e)=>{
        console.log(e)
      }
    )

    this.service.getTvCredit(this.id.id).subscribe(
      nxtv => {
        this.credit =nxtv;
        console.log(this.credit)
      }, (e)=>{
        console.log(e)
      }
    )

    this.service.getTvImage(this.id.id).subscribe(
      nxtv => {
        this.image =nxtv;
        console.log(this.image)
      }, (e)=>{
        console.log(e)
      }
    )

    this.service.getTvRecommend(this.id.id).subscribe(
      nxtv => {
        this.recommend =nxtv;
        console.log(this.recommend)
      }, (e)=>{
        console.log(e)
      }
    )

    this.service.getTvSimilar(this.id.id).subscribe(
      nxtv => {
        this.similar =nxtv;
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
    this.navCtrl.push(NxtvPage, {id:id});

  }

}
