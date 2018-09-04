import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

import "rxjs/add/operator/map";

@Injectable()
export class UserServices {

    public serverUrl = environment.apiURl;

    public userRoute = "/v1/user";

    constructor(private http: HttpClient) {}

     newRegister(userDetails) {
        return this.http
          .post(this.serverUrl  + this.userRoute + "/sign-up",userDetails)
          .map((response: Response) => {
            return <any>response;
          });
      }

      login(loginDetails) {
     
        return this.http
        .post(this.serverUrl  + this.userRoute + "/login",loginDetails)
        .map((response: Response) => {
          return <any>response;
        });
      }

      addCastPic(castPicDetails) {
        return this.http
        .post(this.serverUrl  + this.userRoute + "/upload-profile-pic",castPicDetails)
        .map((response: Response) => {
          return <any>response;
        });
      }

      getTrailer(trailerDetails) {
        console.log("trailerrr",trailerDetails)
        return this.http
        .get(this.serverUrl  + this.userRoute + "/getFileFromS3",{params: {fileName: trailerDetails.trailerKey}})
        .map((response: Response) => {
          return <any>response;
        });
      }

}