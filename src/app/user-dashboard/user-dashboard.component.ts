import { Component, OnInit } from '@angular/core';
import { MoviesServices } from '../shared/movies.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  myFilms=[];

  constructor(private ms: MoviesServices,private router: Router) { }

  ngOnInit() {

     this.ms.getMyFilms()
      .subscribe((response) => {
           this.myFilms = response.data;
      })
  }

  toAddProject() {
    this.router.navigate(['/addFilm'])
  }

}
