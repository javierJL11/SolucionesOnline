import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chats:any;
  idUser = localStorage.getItem('idUser')
  userName = localStorage.getItem('userName')?.slice(1,-1)
  constructor(private dataService:DataService, private route:Router) { }

  ngOnInit(): void {
    this.idUser
    this.userName
    this.getMyChats()
  }
  getMyChats () {
    this.dataService.getMyChats().subscribe(res=>{
      console.log(res)
      this.chats = res;
    },
    (error) => {                              //Error callback
      console.error(error)
      this.route.navigate(['/']); // navigate to other page
      // this.errorMessage = error;
      // this.loading = false;

      //throw error;   //You can also throw the error to a global error handler
    }
    
    );
  }

}
