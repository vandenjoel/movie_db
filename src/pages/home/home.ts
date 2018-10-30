import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
//import {CacheService} from 'ionic-cache';

import {ServiceProvider} from '../../providers/service/service';

import { NxhomePage } from './nxhome/nxhome';
import { SearchmoviePage } from '../searchmovie/searchmovie';




@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

   public Home =[];
   public movies: any;
  
  
  constructor(
    public navCtrl: NavController,
    private service:ServiceProvider,
   // private cache: CacheService

  ) {

   

   
  }


  ionViewDidLoad(){
    this.service.getHome().subscribe(
      home => {
        this.Home = home.results;
        console.log(this.Home)
      },(e)=>{
        console.log(e)
      }
    )

    //this.movies = this.cache.loadFromDelayedObservable( home.results );
  } 

  

  onGoToPage(id) {
    console.log(id)
    this.navCtrl.push(NxhomePage, {id:id});

  }

  onGoToSearch() {
    console.log()
    this.navCtrl.push(SearchmoviePage);
  }

  

}


