import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Input()todoList

  todo = {
    title:"",
    description:"",
    status:"",
    date:"",
    placeName:"",
    address:""
  }

  constructor() { }

  ngOnInit(): void {
  }
  toDoAdd=()=>{
    this.todoList.push(this.todo)
    this.todo = {
      title:"",
      description:"",
      status:"",
      date:"",
      placeName:"",
      address:""
    }

  }
  handleChange=(event)=>{
    this.todo[event.target.name]=event.target.value

  }

  delete=(idx: number)=> {
    this.todoList.splice(idx,1)
  }
}
