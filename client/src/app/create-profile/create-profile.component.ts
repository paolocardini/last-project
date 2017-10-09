import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { InstrumentService } from '../services/instrument.service'


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})




export class CreateInstrumentProfileComponent implements OnInit {

  formInfo = {
    experience: "",
    description: "",
    style: "",
    instrument: ""

  }

  constructor(private http: Http, public router: Router, private inst: InstrumentService) { }

  ngOnInit() {
  }

  createInstrumentProfile() {
    const { experience, description, style, instrument } = this.formInfo;
    if (experience != "" && description != "" && style != "" && instrument != "") {
      console.log(`create instrument profile with ${experience} ${description} ${style} ${instrument}`)
      this.inst.createInstrumentProfile(experience, description, style, instrument)
        .map(user => console.log(user))
        .subscribe((user) => this.router.navigate(['/user']));
    } else {
      console.log("You must set a username and a password");
    }
  }

}
