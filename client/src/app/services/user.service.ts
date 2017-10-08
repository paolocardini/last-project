import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
const BASEURL = environment.BASEURL + "/auth";



@Injectable()
export class UserService {
  private user:object;
  private userLoginEvent:EventEmitter<any> = new EventEmitter<any>();
  private options = {withCredentials:true};


  constructor(private http: Http,public router:Router) { }


  public getUser(){
  return this.http.get(`http://localhost:3000/user/instrument-profile`)
.map((res)=> res.json())  }


}
