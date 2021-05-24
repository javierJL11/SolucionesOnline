import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/service';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-editservice',
  templateUrl: './editservice.component.html',
  styleUrls: ['./editservice.component.css']
})
export class EditserviceComponent implements OnInit {
  id :any
  data:any
  service = new Service()
  constructor(private dataService:DataService,private route:ActivatedRoute,private redirect:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.getService()
  }

  getService () {
    this.dataService.getServiceById(this.id).subscribe(res=>{
      console.log(res)
      this.data = res
      this.service = this.data
    })

  }
  editService () {
    this.dataService.updateService(this.id,this.service).subscribe(res=>{
      console.log(res);
      this.redirect.navigate(['/services']); 
    })
  }

}
