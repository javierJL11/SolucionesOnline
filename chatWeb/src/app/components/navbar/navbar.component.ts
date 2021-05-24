import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 userName = localStorage.getItem('userName')?.slice(1,-1)

  constructor(private dataService:DataService,private redirect:Router) { }

  ngOnInit(): void {
  }
  logout () {
    this.dataService.logout().subscribe(res=>{
      localStorage.clear();
     this.redirect.navigate(['/login']); 
   })
  }

}
