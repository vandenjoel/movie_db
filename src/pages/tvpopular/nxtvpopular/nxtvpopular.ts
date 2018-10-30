import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../../providers/service/service';

/**
 * Generated class for the NxtvpopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nxtvpopular',
  templateUrl: 'nxtvpopular.html',
})
export class NxtvpopularPage {

  public id : any;
  public movie: any;
  public image: any;
  public credit: any;
  public similar: any;
  public recommend: any;
  public video: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public service : ServiceProvider
  ) {


    this.id = navParams.data; 
    console.log('detail page, : ', navParams.data);
  }

  ionViewDidLoad() {
    this.service.getTvDetails(this.id.id).subscribe(
      nxtvpopular => {
        this.movie = nxtvpopular;
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
    this.navCtrl.push(NxtvpopularPage, {id:id});
   }

}
