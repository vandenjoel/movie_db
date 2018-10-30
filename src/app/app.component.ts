import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { CacheService } from 'ionic-cache';

import { HomePage } from '../pages/home/home';

import { UpcomingPage } from '../pages/upcoming/upcoming';
import { NowPage } from '../pages/now/now';
import { PopularPage } from '../pages/popular/popular';
import { MapPage } from '../pages/map/map';
import { AboutPage } from '../pages/about/about';
import { TvPage } from '../pages/tv/tv';
import { TvairingPage } from '../pages/tvairing/tvairing';
import { TvonairPage } from '../pages/tvonair/tvonair';
import { TvpopularPage } from '../pages/tvpopular/tvpopular';

import { TabsPage } from '../pages/tabs/tabs';
import { CertificatesPage } from '../pages/certificates/certificates';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

   rootPage: any = TabsPage;

  pages: Array<{title: string, component: any}>;
  shows: Array<{title: string, component: any}>;
  added: Array<{title: string, component: any}>;

  constructor (
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
   // public cache: CacheService 
  )
    {


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Top Movies', component: HomePage },
      { title: 'Upcoming Movies', component: UpcomingPage },
      { title: 'Now Playing', component: NowPage },
      { title: 'Popular Movies', component: PopularPage },
      
    ];

    this.shows = [
      { title: 'Top Shows', component: TvPage },
      { title: 'Airing Today', component: TvairingPage },
      { title: 'On Air', component: TvonairPage },
      { title: 'Popular Shows', component: TvpopularPage },
      
    ];

    this.added = [
     
      { title: 'About', component: AboutPage },
      { title: 'Certificate', component: CertificatesPage },
     // { title: 'Logout', name: 'TabsPage', component: TabsPage, icon: 'log-out', logsOut: true }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
     // this.cache.setDefaultTTL(60*60*12);

    //  this.cache.setOfflineInvalidate(false);

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }




}
