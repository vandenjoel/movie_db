import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { NxhomePage } from '../home/nxhome/nxhome';

/**
 * Generated class for the SearchmoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchmovie',
  templateUrl: 'searchmovie.html',
})
export class SearchmoviePage {

  public movies: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public service: ServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchmoviePage');
  }

  searchForMovie(event, key) {
		if(event.target.value.length > 2) {
			this.service.searchMovies(event.target.value).subscribe(
				data => {
					this.movies = data.results; 
					console.log(data);
				},
				err => {
					console.log(err);
				},
				() => console.log('Movie Search Complete')
			);
		}
  }  
  
  onGoToPage(id) {
    console.log(id)
    this.navCtrl.push(NxhomePage, {id:id});
  }

}
