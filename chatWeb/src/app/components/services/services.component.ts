import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services:any;
  constructor(private dataService:DataService, private route:Router) { }

  ngOnInit(): void {
    this.getMyServices();
  }

  getMyServices() {
    this.dataService.getMyServices().subscribe(res=>{
      this.services = res;
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

  deleteService (key) {
    this.dataService.deleteService(key).subscribe(res=>{
      this.getMyServices()
    })
  }

}
