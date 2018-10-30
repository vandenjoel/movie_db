import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ServiceProvider } from '../../../providers/service/service';



@IonicPage()
@Component({
  selector: 'page-nxpopular',
  templateUrl: 'nxpopular.html',
})
export class NxpopularPage {

  public id: any;
  public movie: any;
  public image: any;
  public similar: any;
  public credit: any;
  public video: any;
  public recommend: any;


  constructor(
    public navCtrl: NavController, 
    public service: ServiceProvider,
    public navParams: NavParams) {

      this.id = navParams.data; 
      console.log('detail page, : ', navParams.data);
      
  }

 
  ionViewDidLoad(){

    this.service.getMoDetails(this.id.id).subscribe(
      popular => {
        this.movie = popular;
        console.log(this.movie)
      },(e)=>{
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

    this.service.getImage(this.id.id).subscribe(
      popular => {
        this.image =popular;
        console.log(this.image)
      }, (e)=>{
        console.log(e)
      }
    )

    this.service.getCredit(this.id.id).subscribe(
      popular => {
        this.credit =popular;
        console.log(this.credit)
      }, (e)=>{
        console.log(e)
      }
    )

    this.service.getSimilar(this.id.id).subscribe(
      popular => {
        this.similar =popular;
        console.log(this.similar)
      }, (e)=>{
        console.log(e)
      }
    )

    this.service.getRecommend(this.id.id).subscribe(
      nxpopular => {
        this.recommend = nxpopular;
        console.log(this.recommend)
      }, (e)=>{
        console.log(e)
      }
    )

  }

  onGoToPage(id) {
    console.log(id)
    this.navCtrl.push(NxpopularPage, {id:id});

  }

}
