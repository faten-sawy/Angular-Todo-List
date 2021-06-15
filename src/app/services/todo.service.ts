import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  BaseUrl = "http://localhost:3000/Tasks"

  constructor( private ourClient:HttpClient) { }

  GetAllTasks(){
   return this.ourClient.get(this.BaseUrl)
  }
  GetTaskId(id:number){
    this.ourClient.get(`${this.BaseUrl}/${id}`)

  }
  DeleteTaskId(id:number){
    return this.ourClient.delete(this.BaseUrl+"/"+id)
  }
  UpdateTask(id:number,body:any){
    return this.ourClient.patch(`${this.BaseUrl}/${id}`,body)
  }
  PostTask(task:any){
     
     return this.ourClient.post(this.BaseUrl,task)

  }
}