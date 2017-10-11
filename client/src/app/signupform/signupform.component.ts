import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {

  formInfo = {
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    address: "",
    city: "",
    country: "",
    username: "",
    password: "",
    lat: "",
    lng: ""

  }








  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
  }

  signup() {
    const { firstname, lastname, age, email, address, city, country, username, password } = this.formInfo;
    let place = address + ',' + city + ',' + country;
    this.auth.getLocation(place)
      .subscribe((res) => {
        console.log(res)
        const lat = res.json().results[0].geometry.location.lat;
        const lng = res.json().results[0].geometry.location.lng;
        console.log(this.formInfo.lat)
        if (firstname != "" && lastname != "" && age != "" && email != "" && address != "" && city != "" && country != "" ) {
          console.log(`Signup with ${firstname} ${lastname} ${age} ${email} ${address} ${city} ${country} ${username} ${password} ${lat} ${lng}`)
          this.auth.signup(firstname, lastname, age, email, address, city, country, username, password,lat,lng)
            .map(user => console.log(user))
            .subscribe((user) => this.router.navigate(['/home']));
        } else {
          console.log("You must set a username and a password");
        }
      })

  }
}
