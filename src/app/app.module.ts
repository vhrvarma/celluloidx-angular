
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule, routingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";

import { TokenInterceptor } from "./app.interceptor";
// import { LoginModule } from './login/login.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";



import { Ng2ImgMaxModule } from 'ng2-img-max';


import { AppComponent } from './app.component';
import { UserServices } from './shared/user.services';

import { MoviesServices} from './shared/movies.services';

import { AuthService } from './auth.service';


// import { LoginComponent } from './login/login.component';
// import { HowitworksComponent } from './howitworks/howitworks.component';
// import { GeneralComponent } from './general/general.component';


@NgModule({
  declarations: [
    AppComponent,
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // LoginModule,
    CommonModule,
    routingModule,
    BrowserAnimationsModule,
   
    HttpClientModule,
    
    Ng2ImgMaxModule
  ],
  providers: [UserServices,MoviesServices,AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
