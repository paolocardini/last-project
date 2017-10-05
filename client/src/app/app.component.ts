import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularauth';
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(public auth:AuthService) {
  };
}
