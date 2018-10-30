import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ServiceProvider } from '../../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-nxhome',
  templateUrl: 'nxhome.html',
})
export class NxhomePage {
  
  public id : any;
  public movie : any;
  public video : any;
  public image : any;
  public credit : any;
  public similar: any;
  public recommend: any;
  
   
  constructor(
    public navCtrl: NavController, 
    private service: ServiceProvider,
    public navParams : NavParams,
    
    ) {
      this.id = navParams.data; 
      console.log('detail page, : ', navParams.data);
  }

  ionViewDidLoad(){
    this.service.getMoDetails(this.id.id).subscribe(
      nxhome => {
        this.movie = nxhome;
        console.log(this.movie)
      },(e)=>{
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

    this.service.getImage(this.id.id).subscribe(
      nxhome => {
        this.image =nxhome;
        console.log(this.image)
      }, (e)=>{
        console.log(e)
      }
    )

    this.service.getCredit(this.id.id).subscribe(
      nxhome => {
        this.credit =nxhome;
        console.log(this.credit)
      }, (e)=>{
        console.log(e)
      }
    )

    this.service.getSimilar(this.id.id).subscribe(
      nxhome => {
        this.similar =nxhome;
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

  }

  onGoToPage(id) {
    console.log(id)
    this.navCtrl.push(NxhomePage, {id:id});

  }


}
