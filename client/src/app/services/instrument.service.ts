import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class InstrumentService {

  public BASEURL = environment.BASEURL;
  private options = { withCredentials: true };


  constructor(private http: Http) {
  }

  private handleError(e) {
    console.log("CREATE ERROR");
    return Observable.throw(e.json().message);
  }


  createInstrumentProfile(experience, description, style, instrument) {
    console.log("FORM STYLE: " + style)
    return this.http.post(`${this.BASEURL}/instrument-profile/new`, { experience, description, instrument, style }, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  // showInstrumentProfile(){
  //   return this.http.get(`${this.BASEURL}/user/instrument-profile`, {experience,description,instrument,style}, this.options)
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }

}
