import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
@Input()todoList
  constructor() { }

  ngOnInit(): void {
  }
  findedTodosList=[]
  searchParams={
    title:"",
    placeName:"",
    address:""
  }
  searchParamsChange(event) {
    this.searchParams[event.target.name]=event.target.value
  }
  search(){
    this.findedTodosList=[]
    let  filterlist=Object.entries(this.searchParams)
    this.todoList.map(singleTodo=>{
      let checksCount=0
      filterlist.map((singleFilter,index)=>{
        if (singleTodo[singleFilter[0]].search(singleFilter[1])!=-1 || !singleFilter[1]){
          checksCount++
        }
        return
      })
      if(checksCount===filterlist.length){
        this.findedTodosList.push(singleTodo)
        console.log("ura")
        return
      }
      return;
    })
    this.searchParams={
      title:"",
      placeName:"",
      address:""
    }
  }
  }

