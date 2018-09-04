import { Component, HostBinding,OnInit} from '@angular/core';
import { fadeAnimation } from './shared/fade.animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]

})
export class AppComponent implements OnInit {

  constructor() {}
  title = 'app';

  public getRouterOutletState(outlet) {
   
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
  

  ngOnInit(){

    
  }
}
