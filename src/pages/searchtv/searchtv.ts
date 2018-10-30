import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { NxtvPage } from '../tv/nxtv/nxtv';



@IonicPage()
@Component({
  selector: 'page-searchtv',
  templateUrl: 'searchtv.html',
})
export class SearchtvPage {
  public tv: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public service: ServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchtvPage');
  }

  searchForTv(event, key) {
		if(event.target.value.length > 2) {
			this.service.searchTv(event.target.value).subscribe(
				data => {
					this.tv = data.results; 
					console.log(data);
				},
				err => {
					console.log(err);
				},
				() => console.log('TV Show Search Complete')
			);
		}
  }  

  onGoToPage(id) {
    console.log(id)
    this.navCtrl.push(NxtvPage, {id:id});
  }

}
