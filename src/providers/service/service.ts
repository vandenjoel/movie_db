import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ServiceProvider {

  public API:string = "https://api.themoviedb.org/3/"
  
  constructor(public http: Http) {
    console.log('Hello ServiceProvider Provider');
  }

  getHome() {
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
    
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");
    params.set("page","1");
    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(this.API+"movie/top_rated", options)
    .map(
      (res: Response) => {
        return res.json()
      })
  }

  getUpcoming(){
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
    
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");
    params.set("sort_by","date:'yyyy'.desc");
    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(this.API+"movie/upcoming", options)
    .map(
      (res: Response) => {
        return res.json()
      })
 
  }

  getNow(){
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
    
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");
    params.set("sort_by","popularity.desc")
    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(this.API+"movie/now_playing", options)
      .map(
      (res: Response) => {
        return res.json()
      })
  }

  getPopular(){
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
    
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");
    params.set("sort_by","popularity.desc")
    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(this.API+"movie/popular", options)
      .map(
      (res: Response) => {
        return res.json()
      })
  }


  getTvPopular(){
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
    
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");
    params.set("sort_by","popularity.desc")
    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(this.API+"tv/popular", options)
      .map(
      (res: Response) => {
        return res.json()
      })
  }

  
  getTvOnair(){
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
     
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");
    params.set("sort_by","popularity.desc")
    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(this.API+"tv/on_the_air", options)
      .map(
      (res: Response) => {
        return res.json()
      })
  }

  
  getTvAiring(){
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
     
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");
    params.set("sort_by","popularity.desc")
    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(this.API+"tv/airing_today", options)
      .map(
      (res: Response) => {
        return res.json()
      })
  }

  getTvTop(){
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
     
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");
    params.set("sort_by","popularity.desc")
    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(this.API+"tv/top_rated", options)
      .map(
      (res: Response) => {
        return res.json()
      })
  }

  getMoDetails(id){
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
     
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");

    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(this.API+"movie/"+id, options)
      .map(
      (res: Response) => {
        return res.json()
      })
  }

  getTvDetails(id){
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
     
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");

    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(this.API+"tv/"+id, options)
      .map(
      (res: Response) => {
        return res.json()
      })
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

    return this.http.get(this.API+"movie/"+id+"/videos", options)
      .map(
      (res: Response) => {
        return res.json()
      })

  }

  getTvVideo(id){
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
    
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");
   
    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(this.API+"tv/"+id+"/videos", options)
      .map(
      (res: Response) => {
        return res.json()
      })

  }

  getImage(id){
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
    
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");
    
    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(this.API+"movie/"+id+"/images", options)
      .map(
      (res: Response) => {
        return res.json()
      })
  }

  getImage1(id){
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
    
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");
    
    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });   

    return this.http.get(this.API+"movie/354912/images", options)
      .map(
      (res: Response) => {
        return res.json()
      })
  }

  getCredit(id){
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
    
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");
    
    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(this.API+"movie/"+id+"/credits", options)
      .map(
      (res: Response) => {
        return res.json()
      })
  }

  getSimilar(id){
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
    
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");
    
    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(this.API+"movie/"+id+"/similar", options)
      .map(
      (res: Response) => {
        return res.json()
      })
  }

  getRecommend(id){
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

  getTvCredit(id){
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
    
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");
    
    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(this.API+"tv/"+id+"/credits", options)
      .map(
      (res: Response) => {
        return res.json()
      })
  }

  getTvImage(id){
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
    
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");
    
    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(this.API+"tv/"+id+"/images", options)
      .map(
      (res: Response) => {
        return res.json()
      })
  }

  getTvRecommend(id){
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
    
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");
    
    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(this.API+"tv/"+id+"/recommendations", options)
      .map(
      (res: Response) => {
        return res.json()
      })
  }

  getTvSimilar(id){
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
    
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");
    
    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(this.API+"tv/"+id+"/similar", options)
      .map(
      (res: Response) => {
        return res.json()
      })
  }

  getMoList(){
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
    
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");
    
    
    
    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(this.API+"list/48443", options)
      .map(
      (res: Response) => {
        return res.json()
      })
  }

  getTvList(){
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
    
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");
    
    
    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(this.API+"list/48448", options)
      .map(
      (res: Response) => {
        return res.json()
      })
  }

  getCertificate(){
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');
    
    params.set("api_key","4285b6347f0429f60f6364ca644beab2");
    
    
    
    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(this.API+"certification/movie/list", options)
      .map(
      (res: Response) => {
        return res.json()
      })
  }

  searchMovies(query) {
    var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(query) + '&api_key=4285b6347f0429f60f6364ca644beab2';
    var response = this.http.get(url).map(res => res.json());
    return response;
}  

searchTv(query) {
  var url = 'http://api.themoviedb.org/3/search/tv?query=&query=' + encodeURI(query) + '&api_key=4285b6347f0429f60f6364ca644beab2';
  var response = this.http.get(url).map(res => res.json());
  return response;
} 

}
