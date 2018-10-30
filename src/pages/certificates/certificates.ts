import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-certificates',
  templateUrl: 'certificates.html',
})
export class CertificatesPage {

  public certificate: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private service:ServiceProvider ) {
  }

  ionViewDidLoad() {
   
    this.service.getCertificate().subscribe(
      certificate => {
        this.certificate =certificate;
        console.log(this.certificate)
      }, (e)=>{
        console.log(e)
      }
    )

  }

}
