import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {InstrumentService} from '../services/instrument.service'
import {UserService} from '../services/user.service'
import { AuthService } from '../services/auth.service';
import { Observable} from "rxjs/Observable"



@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  constructor(
    public instrumentService: InstrumentService,
    private auth: AuthService
  ) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user =>{
          console.log(user)
          this.user=user })
    }
user:object;

  ngOnInit() {

  }

}
