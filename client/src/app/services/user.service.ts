import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
const BASEURL = environment.BASE_URL + "/auth";
const BASE_URL = environment.BASE_URL

@Injectable()
export class UserService {
  private user: object;
  private userLoginEvent: EventEmitter<any> = new EventEmitter<any>();
  private options = { withCredentials: true };

  constructor(private http: Http, public router: Router) { }

  public getUserProfiles() {
    return this.http.get(`${BASE_URL}/user/instrument-profile`)
      .map(res => {
        return res.json()
      })
  }

  public showUsersProfiles(){
    return this.http.get(`${BASE_URL}/user/users-profiles`)
      .map(res => {
        return res.json()
      })

  }
}
