
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class YtProvider {
  public API:string = "https://api.themoviedb.org/3/"

  constructor(public http: Http) {
    console.log('Hello YtProvider Provider');
  }

  getVideo(id){
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
    
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");
    
    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(this.API+"movie/"+id+"/recommendations", options)
      .map(
      (res: Response) => {
        return res.json()
      })
  }

}
