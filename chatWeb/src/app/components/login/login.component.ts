import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import {Router} from '@angular/router'; 
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User()
  constructor(private dataService:DataService,private redirect:Router) { }

  ngOnInit(): void {
  }

  login() {
    this.dataService.login(this.user).subscribe(res=>{
      console.log(res)
      localStorage.clear();
       localStorage.setItem('token', JSON.stringify(res["access_token"]));
       this.dataService.testUser().subscribe(res=>{
        localStorage.setItem('userName', JSON.stringify(res["name"]));
        localStorage.setItem('idUser', JSON.stringify(res["id"]));
 
       this.redirect.navigate(['/services']); 
     })

    })


  }
  

}
