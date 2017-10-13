import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class InstrumentService {

  public BASEURL = environment.BASE_URL;
  private options = { withCredentials: true };

  constructor(private http: Http) {}

  private handleError(e) {
    console.log("CREATE ERROR");
    return Observable.throw(e.json().message);
  }

  createInstrumentProfile(experience, description, style, instrument, videoId) {
    console.log("FORM STYLE: " + style)
    return this.http.post(`${this.BASEURL}/instrument-profile/new`, { experience, description, instrument, style, videoId }, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
