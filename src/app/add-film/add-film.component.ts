import { UserServices } from './../shared/user.services';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { DomSanitizer } from '@angular/platform-browser';
import { MoviesServices } from '../shared/movies.services';



@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  fData: FormData = new FormData();
  tfData: FormData = new FormData();
  allUploads = [];
  allCastPicUploads = [];
  allCrewPicUploads = [];
  castPictures = [];

  castPic: any;
  imagePreview: string;
  castRole: any;
  castRoleName: any;
  originalpic: any;
  presentCastPic: any;

  
  crewName: any;
  crewPic: any;
  crewRole: any;
  imageCrewPreview: any;
  originalCrewPic: any;
  presentCrewPic: any;
  crewAddedArray = [];

  website: any;
  twitter:any;
  facebook: any;
  instagram: any;



  hours: Number;
  minutes: Number;
  seconds: Number;

  day: Number;
  month: Number;
  year: Number;

  urlMovieName: any;
  ticketPrice: any;
  movieName: any;
  genre: any;
  shootingFormat: any;
  productionBudget: any;
  language: any;
  country: any;
  color: any;
  story: any;
  uploadMovie: File;
  uploadTrailer: File;
  uploadMovieKey: any;
  uploadTrailerKey: any;


  castArray = [];
  castAddedArray = [];
  filmTypeArray = [];
  countryArray = ["india", "france", "america", "mexico", "africa", "china"];
  filmColorArray = ["color", "black&white", "Eastman Color"];
  castRoleArray = ["hero", "heroine", "comedian", "villan"];
  crewRoleArray = ["director", "producer", "choreographer", "music"];

  filmLanguageArray = ["english", "telugu", "hindi", "chinese"];

  totalFilmDetails = {};
  


  addFilmForm = new FormGroup({
    country: new FormControl('null'),
    filmLanguage: new FormControl('null'),
    filmColor: new FormControl('null')
  })
  error = false;

  constructor(private ng2ImgMax: Ng2ImgMaxService, public sanitizer: DomSanitizer,
    public ms: MoviesServices, private us: UserServices) { }

  ngOnInit() {
    this.fData = new FormData();
    this.castAddedArray = [];
    this.crewAddedArray = [];
  }

  onFilmTypeChange(value: any, state: any) {

    if (state == true) {
      this.filmTypeArray.push(value);
    } else {
      let pos = this.filmTypeArray.indexOf(value);
      this.filmTypeArray.splice(pos, 1);
    }

    console.log(this.filmTypeArray);
  }

  selectFilmColor(value: any) {
    this.color = value;
  }

  selectFilmCountry(value: any) {
    this.country = value;
  }

  selectFilmLanguage(value: any) {
    this.language = value;
  }

  addCastPic($event): void {
console.log("haii")

    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec($event.target.value)) {
      Swal({
        title: "Invalid File",
        text: "",
        type: "info",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      this.readThis($event.target);

      $event = null;
    }
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    this.originalpic = file
    console.log("haoo", this.originalpic);
    var myReader: FileReader = new FileReader();

    this.ng2ImgMax.resizeImage(this.originalpic, 180, 180).subscribe(
      result => {
        this.presentCastPic = result;

        this.presentCastPic = new File([result], result.name);
        this.getImagePreview(this.presentCastPic);

       // console.log("this.presentCastPic", this.presentCastPic, this.imagePreview);
      },
      error => {
        console.log('😢 Oh no!', error);
      }
    );


  };

  addCrewPic($event): void {
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec($event.target.value)) {
      Swal({
        title: "Invalid File",
        text: "",
        type: "info",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      this.readThisCrew($event.target);

      $event = null;
    }
  }

  readThisCrew(inputValue: any): void {
    var file: File = inputValue.files[0];
    this.originalCrewPic = file
    console.log("haoo", this.originalpic);
    var myReader: FileReader = new FileReader();
    this.ng2ImgMax.resizeImage(this.originalCrewPic, 180, 180).subscribe(
      result => {
        this.presentCrewPic = result;

        this.presentCrewPic = new File([result], result.name);
        this.getImageCrewPreview(this.presentCrewPic);

        console.log("this.presentCastPic", this.presentCrewPic, this.imageCrewPreview);
      },
      error => {
        console.log('😢 Oh no!', error);
      }
    );


  };
  getImageCrewPreview(file: File) {
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageCrewPreview = reader.result;

    };
  }

  onAddCrew() {

    this.crewAddedArray.push({ role: this.crewRole, name: this.crewName, picture: this.imageCrewPreview });
    console.log("cast pics01", this.crewAddedArray);


    this.imageCrewPreview = "";
    this.crewRole = "";
    this.crewName = "";
    this.presentCrewPic = "";
    this.originalCrewPic = "";

  }



  onAddCast() {

    this.castAddedArray.push({ role: this.castRole, name: this.castRoleName, picture: this.imagePreview });
    console.log("cast pics01", this.castAddedArray);

    this.imagePreview = "";
    this.castRole = "";
    this.castRoleName = "";
    this.presentCastPic = "";
    this.originalpic = "";

  }

  getImagePreview(file: File) {
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imagePreview = reader.result;

    };
  }

  onUploadMovie(event: any) {
    this.uploadMovie = event.target.files[0];
    this.fData.append("movie", this.uploadMovie);
   
  }

  onUploadTrailer(event: any) {
    this.uploadTrailer = event.target.files[0];
    this.tfData.append("trailer", this.uploadTrailer);
    
  }

  addFilm() {
    if (this.uploadMovie) {
      this.allUploads.push(new Promise((resolve, reject) => {
        this.ms.addMovie(this.fData)
          .subscribe((response => {
            console.log("resp11111", response);
            
            this.uploadMovieKey = response.movieKey;
            
            this.fData = new FormData();
            resolve(response)
          }), (error => {
            console.log("error")
            reject(error)

          }))
      }));//movie ending
    }
    if (this.uploadTrailer) {
      this.allUploads.push(new Promise((resolve, reject) => {
        this.ms.addTrailer(this.tfData)
          .subscribe((response) => {
            console.log("ressssssss", response.trailerKey)
            this.uploadTrailerKey = response.trailerKey;
            this.tfData = new FormData();
            resolve(response)
          },(error => {
            console.log("error")
            reject(error)

          }))
           
      }));//movie ending
    }
    

  if(this.castAddedArray){
    
      this.allUploads.push(new Promise((resolve, reject) => {
        for(let i=0; i< this.castAddedArray.length;i++){
          this.castPictures[i]= this.castAddedArray[i].picture
        }
        
        let picturesDetails = {
          pictures: this.castPictures
        }

        this.ms.addCastPic(picturesDetails)
        .subscribe((response) => {
           console.log("castpiccccccc",response)
           for(let i=0; i< this.castAddedArray.length;i++){
            this.castAddedArray[i].key= response.data[i].key;
            this.castAddedArray[i].picture = "";
           }

           
           resolve(response);

        }),(error) => {
           console.log("castpiccerror",error);
           resolve(error);
        }
        

    }));
   
  }


  if(this.crewAddedArray){
    
    this.allUploads.push(new Promise((resolve, reject) => {
      for(let i=0; i< this.crewAddedArray.length;i++){
        this.castPictures[i]= this.crewAddedArray[i].picture
      }
      
      let picturesDetails = {
        pictures: this.castPictures
      }

      this.ms.addCastPic(picturesDetails)
      .subscribe((response) => {
         console.log("castpiccccccc",response)
         for(let i=0; i< this.crewAddedArray.length;i++){
           console.log("2222",this.crewAddedArray[i])
          this.crewAddedArray[i].key= response.data[i].key;
          this.crewAddedArray[i].picture = "";
         }

         
         resolve(response);

      }),(error) => {
         console.log("castpiccerror",error);
         resolve(error);
      }
      

  }));
 
}


   const d= Promise.all(this.allUploads).then(allFiles => {
    console.log("starting abc ending..");

      this.totalFilmDetails = {
        filmType: this.filmTypeArray,
        runTime: {
          hours: this.hours,
          minutes:this.minutes,
          seconds:this.seconds
        },
        releaseDate: {
          day: this.day,
          month:this.month,
          year:this.year
        },
        cast: this.castAddedArray,
        crew: this.crewAddedArray,
        
        movieName: this.movieName,
        genre: this.genre,
        shootingFormat: this.shootingFormat,
        productionBudget: this.productionBudget,
        country: this.country,
        filmLanguage: this.language,
        fimColor: this.color,
        story: this.story,
        uploadMovie: this.uploadMovieKey,
        uploadTrailer: this.uploadTrailerKey ,
        moviePoster:"",
        coverImage:"",
        ticketPrice: this.ticketPrice,
        urlMovieName: this.urlMovieName,
        onlineProfiles: {
          website: this.website,
          twitter:this.twitter,
          facebook: this.facebook,
          instagram: this.instagram
        }
  
      }

      console.log("all detailssssssssss",this.totalFilmDetails);
      this.ms.addFilm(this.totalFilmDetails)
      .subscribe((response) => {
       console.log("ressssssssss", response)

      }) 

    })

   
  
   
  }//end of addfilm()
  

  


}
