import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute } from '@angular/router';

import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  id :any
  messages : any
  texto: string = '';

  idUser = localStorage.getItem('idUser')
  constructor(private dataService:DataService,private route:ActivatedRoute,private redirect:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.idUser
    this.getMessages()
  }
  getMessages () {
    this.dataService.getMyMessages(this.id).subscribe(res=>{
      console.log(res)
      this.messages = res
    })
  }

  sendMessage() {
    let data = {idChat:this.route.snapshot.params.id,message:this.texto}
    console.log(data)
        this.dataService.createMessage(data).subscribe(res=>{
      console.log(res)
      this.getMessages()
      this.texto = ""
    })
  }

}
