import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  server = 'http://localhost:8000/api/'
  constructor(private httpClient:HttpClient) {}

  buildHeader () {
    let token = localStorage.getItem('token')
    return  {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer `+token?.slice(1,-1)+``)
        .set('Accept', 'application/json')
    }
  }
  
//services
  getAllServices() {
    return this.httpClient.get(this.server+'services', this.buildHeader());  
  }
  getMyServices() {
    return this.httpClient.get(this.server+'services/myservices', this.buildHeader());  
  }
  getServiceById(key) {
    return this.httpClient.get(this.server+'services/'+key, this.buildHeader());  
  }
  insertService(body) {
    return this.httpClient.post(this.server+'services',body,this.buildHeader());  
  }
  updateService(key,body) {
    return this.httpClient.post(this.server+'services/'+key,body,this.buildHeader());  
  }
  deleteService (key) {
    return this.httpClient.post(this.server+'services/delete/'+key,"",this.buildHeader());  
  }

  //Register
  insertUser(body) {
    return this.httpClient.post(this.server+'register',body);  
  }
  login (body) {
    return this.httpClient.post(this.server+'login',body);  
  }
  testUser () {
    return this.httpClient.post(this.server+'user',"",this.buildHeader());  
  }
  logout () {
    return this.httpClient.post(this.server+'logout',"",this.buildHeader());  
  }

  //Chats
  getMyChats() {
    return this.httpClient.get(this.server+'chat/mychats', this.buildHeader());  
  }
  getOrCreateChat (body) {
    return this.httpClient.post(this.server+'chat',body, this.buildHeader());  

  }

  //Messages
  getMyMessages(key) {
    return this.httpClient.get(this.server+'messages/'+key, this.buildHeader());  
  }
  createMessage (body) {
    return this.httpClient.post(this.server+'message/create',body, this.buildHeader());  

  }

}
