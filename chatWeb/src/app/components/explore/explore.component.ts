import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  services:any;
  idUser = localStorage.getItem('idUser')
  constructor(private dataService:DataService, private redirect:Router) { }

  ngOnInit(): void {
    this.idUser
    this.getAllServices();
  }
  
  getAllServices () {
    this.dataService.getAllServices().subscribe(res=>{
      this.services = res;
    },
    (error) => {                              //Error callback
      console.error(error)
      this.redirect.navigate(['/']); // navigate to other page
      // this.errorMessage = error;
      // this.loading = false;

      //throw error;   //You can also throw the error to a global error handler
    }
    
    );
  }

  goChat (key) {
    this.dataService.getOrCreateChat({idService:key}).subscribe(res=>{
      console.log(res)
      this.redirect.navigate(['/messages/'+ res["id"]]);

    },
    (error) => {                              //Error callback
      console.error(error)
      this.redirect.navigate(['/']); // navigate to other page
      // this.errorMessage = error;
      // this.loading = false;

      //throw error;   //You can also throw the error to a global error handler
    }
    
    );
  }

  

}
