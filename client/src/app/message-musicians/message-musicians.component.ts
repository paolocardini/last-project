
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { AuthService } from '../services/auth.service'
import { ActivatedRoute } from '@angular/router'
import {Router} from '@angular/router'

@Component({
  selector: 'app-message-musicians',
  templateUrl: './message-musicians.component.html',
  styleUrls: ['./message-musicians.component.css']
})
export class MessageMusiciansComponent implements OnInit, AfterViewInit {

  user:object
  roomName:string
  recieverUser:object
  reciever;
  convo;
  convMessages:Array<object>
  constructor(private chatService: ChatService,
              private auth:AuthService,
              private route: ActivatedRoute,
              private elemRef:ElementRef,
              private router:Router) {}

  ngOnInit() {
      this.auth.isLoggedIn().subscribe(user =>{
          this.user = user
          this.route.params
              .subscribe(params =>{
                this.roomName = params['room']
                this.reciever = params['id']
                this.chatService.searchProfile(this.reciever)
                  .subscribe(user =>{
                    this.recieverUser = user
                    this.getMessages(this.roomName)

                    setInterval(()=>{
                        this.getMessages(this.roomName)
                        // this.updateScroll(this.convo)
                    },1000)
                  })
              })
        })
    }

ngAfterViewInit(){
  this.convo = this.elemRef.nativeElement.querySelector('#convo')
  this.updateScroll(this.convo)
}

updateScroll(elem){
    elem.scrollTop = elem.scrollHeight
}
  sendMessage(text){
    const message = {
      message : text.value,
      sender: this.user['_id'],
      room : this.roomName,
      recieve: this.reciever,
      nameOfSender: this.user['username']
    }

    text.value = ''
    this.chatService.saveMessage(message)
                    .subscribe()
  }

  getMessages(roomName){
    this.chatService.getRoomMessages(roomName)
        .subscribe(messages =>{
          this.convMessages = []
          this.convMessages = messages
        })
  }

  goback(){
    this.router.navigate(["/contact"])
  }

}
