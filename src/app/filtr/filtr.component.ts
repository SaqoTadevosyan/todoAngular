import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-filtr',
  templateUrl: './filtr.component.html',
  styleUrls: ['./filtr.component.scss']
})
export class FiltrComponent implements OnInit {
@Input()todoList
  constructor() { }

  ngOnInit(): void {
  }
  filteredToDoList=[]

  filters={
    status:"",
    date:"",
    placeName:"",
    address:""
  }

  filterChange(event) {
    this.filters[event.target.name]=event.target.value
  }

  addFilter=()=> {
  this.filteredToDoList=[]
    let  filterlist=Object.entries(this.filters)
    this.todoList.map(singleTodo=>{
      let checksCount=0
      filterlist.map((singleFilter,index)=>{
        if (singleTodo[singleFilter[0]]=== singleFilter[1] || !singleFilter[1]){
          checksCount++
        }
        return
      })
      if(checksCount===filterlist.length){
        this.filteredToDoList.push(singleTodo)
        console.log("ura")
        return
      }
      return;
    })
    this.filters={
      status:"",
      date:"",
      placeName:"",
      address:""
    }
  }

}
