import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UpcomingPage } from '../pages/upcoming/upcoming';
import { NowPage } from '../pages/now/now';
import { PopularPage } from '../pages/popular/popular';
import { MapPage } from '../pages/map/map';
import { AboutPage } from '../pages/about/about';
import { ServiceProvider } from '../providers/service/service';
import { TabsPage } from '../pages/tabs/tabs';
import { TvPage } from '../pages/tv/tv';
import { NxhomePage } from '../pages/home/nxhome/nxhome';
import { TvairingPage } from '../pages/tvairing/tvairing';
import { TvonairPage } from '../pages/tvonair/tvonair';
import { TvpopularPage } from '../pages/tvpopular/tvpopular';
import { HomoviePage } from '../pages/homovie/homovie';
import { HotvPage } from '../pages/hotv/hotv';
import { NxupcomingPage } from '../pages/upcoming/nxupcoming/nxupcoming';
import { NxnowPage } from '../pages/now/nxnow/nxnow';
import { NxpopularPage } from '../pages/popular/nxpopular/nxpopular';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    UpcomingPage,
    NowPage,
    PopularPage,
    MapPage,
    AboutPage,
    TabsPage,
    TvPage,
    NxhomePage,
    TvairingPage,
    TvonairPage,
    TvpopularPage,
    HomoviePage,
    HotvPage,
    NxupcomingPage,
    NxnowPage,
    NxpopularPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    UpcomingPage,
    NowPage,
    PopularPage,
    MapPage,
    AboutPage,
    TabsPage,
    TvPage,
    NxhomePage,
    TvairingPage,
    TvonairPage,
    TvpopularPage,
    HomoviePage,
    HotvPage,
    NxupcomingPage,
    NxnowPage,
    NxpopularPage,
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
  

  ]
})
export class AppModule {}
