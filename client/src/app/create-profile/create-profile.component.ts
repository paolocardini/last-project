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
    instrument: "",
    videoId: ""
  }

  constructor(
    private http: Http,
    public router: Router,
    private inst: InstrumentService) { }

  ngOnInit() {}

  cleanLink(direction):string{
    const youtube:string = 'https://www.youtube.com/embed/'
    const id:string = direction.slice(17, direction.length)
    return youtube+id
  }

  createInstrumentProfile() {
    console.log(this.formInfo)
    const { experience, description, style, instrument, videoId } = this.formInfo;
    const video = this.cleanLink(videoId)
    console.log(`8=============D ${video}`)
    if (experience != "" && description != "" && style != "" && instrument != "" && video != "") {
      console.log(`create instrument profile with ${experience} ${description} ${style} ${instrument} ${video}`)

      this.inst.createInstrumentProfile(experience, description, style, instrument, video)
        .map(user => console.log(user))
        .subscribe((user) => this.router.navigate(['/user']));
    } else {
      console.log("You must set a username and a password");
    }
  }

}
