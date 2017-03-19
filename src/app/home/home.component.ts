import {
  Component,
  OnInit
} from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'home',
  providers: [
    HomeService
  ],
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  data: any;

  constructor(public homeService: HomeService)
  {
    this.data = this.homeService.getData();
    console.log(this.data);
  }
}
