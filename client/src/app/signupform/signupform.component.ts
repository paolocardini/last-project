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
    username: "",
    password: "",
    lastname: "",
    firstname: "",
    age: "",
    email: "",
    address: "",
    city: ""


  }
  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
  }

  signup() {
    const { username, password, lastname, firstname, email, address, age, city } = this.formInfo;
    if (username != "" && password != "" && lastname != "" && firstname != "" && age != "" && address != "" && city != "" && email != "") {
      console.log(`Signup with ${username} ${password} ${lastname} ${firstname} ${age} ${address} ${city} ${email}`)
      this.auth.signup(username, password, lastname, firstname, email, address, age, city)
        .map(user => console.log(user))
        .subscribe((user) => this.router.navigate(['/home']));
    } else {
      console.log("You must set a username and a password");
    }
  }

}
