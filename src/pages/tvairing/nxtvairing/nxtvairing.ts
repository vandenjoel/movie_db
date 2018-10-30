import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../../providers/service/service';

/**
 * Generated class for the NxtvairingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nxtvairing',
  templateUrl: 'nxtvairing.html',
})
export class NxtvairingPage {

  public id: any;
  public movie: any;
  public credit: any;
  public image: any;
  public recommend: any;
  public similar: any;
  public video: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public service: ServiceProvider) {
     
      this.id = navParams.data; 
      console.log('detail page, : ', navParams.data);
  }

  ionViewDidLoad(){
    this.service.getTvDetails(this.id.id).subscribe(
      nxtvairing => {
        this.movie = nxtvairing;
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
  this.navCtrl.push(NxtvairingPage, {id:id});
 }

}
