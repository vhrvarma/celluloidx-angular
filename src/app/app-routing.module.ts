import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { GeneralComponent } from "./general/general.component";
import {APP_BASE_HREF} from '@angular/common';
import { HowitworksComponent } from "./howitworks/howitworks.component";
import { LoginComponent } from "./login/login.component";
import { AddFilmComponent } from './add-film/add-film.component'

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "/general" },

    {path: "general",component: GeneralComponent},

    {path: "login",component: LoginComponent},

    {path: "howItWorks",component: HowitworksComponent},

    {path: "addFilm",component: AddFilmComponent}
    
    
   
  ];


  @NgModule({
    imports: [
      BrowserAnimationsModule,
      CommonModule,
      RouterModule.forRoot(routes),
      ReactiveFormsModule,
      HttpModule,
      HttpClientModule,
      FormsModule
    ],
    declarations: [GeneralComponent,HowitworksComponent,LoginComponent,AddFilmComponent],
    providers: [{provide: APP_BASE_HREF, useValue : '/' }],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
  
  export const routingModule = [
   
    HttpClientModule,
    FormsModule
  ];  