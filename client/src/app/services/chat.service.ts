import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';

const BASE_URL = environment.BASE_URL

@Injectable()
export class ChatService {

  private options = {withCredentials:true};
  constructor(private http: Http) { }

  saveMessage(message){
  return   this.http.post(`${BASE_URL}/chat/save/message`, {message : message}, this.options)
                .map(res => res.json())
                .catch(err => {
                  throw err
                })
  }

  getRoomMessages(room){
    return this.http.get(`${BASE_URL}/chat/chat/room/${room}`, this.options)
                    .map(res => res.json())
                    .catch(err => {
                      throw err
                    })
  }

  searchProfile(id){
    console.log("servicio " + id)
  return this.http.get(`${BASE_URL}/chat/user/profile/${id}`, this.options)
            .map((res)=>res.json())
}

}
