import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";

import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Headers} from "@angular/http";



import "rxjs/add/operator/map";
import { Http } from "@angular/http";

@Injectable()

export class MoviesServices {
    public serverUrl = environment.apiURl;

    public moviesRoute = "/v1/movies";

    constructor(private http: HttpClient,private httpNew:Http) {}
   
    // addMovie(movieDetails){
    //   console.log("cdsd",movieDetails)
    //   let headers = new HttpHeaders();
    //   headers.append('Content-Type', 'multipart/form-data');
    //     return this.http
    //       .post(this.serverUrl  + this.moviesRoute + "/uploadMovie",movieDetails,{headers:headers})
    //       .map((response: Response) => {
    //         return <any>response;
    //       });
    // }

     addMovie(movieDetails){
      
    
        return this.http
          .post(this.serverUrl  + this.moviesRoute + "/uploadMovie",movieDetails)
          .map((response: Response) => {
            return <any>response;
          }); 
    }
    addTrailer(trailerDetails){
      
        return this.http
          .post(this.serverUrl  + this.moviesRoute + "/uploadTrailer",trailerDetails)
          .map((response: Response) => {
            return <any>response;
          });
    }
    addFilm(data){
      return this.http
      .post(this.serverUrl  + this.moviesRoute + "/addFilmDetails",data)
      .map((response: Response) => {
        return <any>response;
      });
    }


    addCastPic(data){
      return this.http
      .post(this.serverUrl  + this.moviesRoute + "/uploadCastPic",data)
      .map((response: Response) => {
        return <any>response;
      });
    }
  

  



}