import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable"
import { UserService } from '../services/user.service'
import { AuthService } from '../services/auth.service'
import { InstrumentService } from '../services/instrument.service'

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  userProfileList: any
  user: object

  constructor(
    public instrumentService: InstrumentService,
    private auth: AuthService,
    private userService: UserService
  ) {
    // this.user = this.auth.getUser();
    // this.auth.getLoginEventEmitter().subscribe( user =>{
    //   console.log(user)
    //   this.user=user
    // })
    this.userService.getUserProfiles().subscribe(userList => {
      console.log(`${userList}`)
      this.userProfileList = userList
    }),
      err => { console.log(`${err}`) }
  }

  ngOnInit() { }
}
