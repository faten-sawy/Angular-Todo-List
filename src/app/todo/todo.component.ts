import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor(private ourService:TodoService){
    this.getDate()
    this.ourService.GetAllTasks().subscribe((res)=>{
        this.tasks = res
      },(err)=>{console.log(err)})
  }

  name:string =""
  tasks:any
  flag:boolean = true
  gh:boolean = true
  taskInfo:any={title:this.name,id:0}

  count:number=0 /*  */
  

  date:any = new Date()
  month:string =""
  day:string=""
  utcDate:any 
  year:number=0
  
  addToDo(){
    this.count++ /*  */
    console.log(this.count)/*  */
   
    
    if(this.name!= "")
    {
       this.taskInfo={id:this.generateId(),title:this.name}
       this.ourService.PostTask(this.taskInfo).subscribe();
       console.log(this.taskInfo)
       
       this.ourService.GetAllTasks().subscribe((res)=>{
        this.tasks = res
      },(err)=>{console.log(err)})
       

     // this.tasks.push(this.name)
      this.flag = true
      this.name = ""
      console.log(this.tasks)
      console.log(this.name)
      }
     // console.log((this.date.getFullYear()))
    
  }
  delete(id:number){
    console.log(this.tasks)
    console.log(id)
    this.ourService.DeleteTaskId(id).subscribe()
    this.ourService.GetAllTasks().subscribe((res)=>{
        this.tasks = res
      },(err)=>{console.log(err)})
    console.log(this.tasks)
   /* this.tasks.splice(data,1)
    console.log(data) */
  }

  getDate(){
    let dayes =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    this.month = this.date.toLocaleString('default',{month:'long'})
    this.day =dayes[this.date.getDay()]
    this.utcDate = this.date.getUTCDate()
    this.year = this.date.getFullYear()
    
    console.log(this.date)
    console.log(this.month)
    //console.log(dayes[this.day])
    console.log(this.utcDate+1)

  }
  changeFlag(){
    this.gh = !(this.gh)
  }
  update(id:number){
    console.log("1")
    this.gh = !(this.gh)
    if(this.name!=""){
      this.ourService.UpdateTask(id,{title:this.name}).subscribe()
      console.log("2")
    }
  }
  generateId(){
    return Math.floor(Math.random() * 100)
  }
}