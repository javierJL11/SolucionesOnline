import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-createservice',
  templateUrl: './createservice.component.html',
  styleUrls: ['./createservice.component.css']
})
export class CreateserviceComponent implements OnInit {
 service = new Service()
  constructor(private dataService:DataService,private route:Router) { }

  ngOnInit(): void {
  }

  saveService () {
    this.dataService.insertService(this.service).subscribe(res=>{
      console.log(res);
      this.route.navigate(['/services']); 
    })
  }

}
