import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input()todo
  @Input()index
  @Input()delete
  constructor() { }

  ngOnInit(): void {
  }
  editToggle=false
  finished=false
  changedTodo={}
  edit(){
    this.editToggle=!this.editToggle
  }

  handleChange(event){
    this.todo[event.target.name]=event.target.value

  }
  statusChange(){
    this.finished=!this.finished

  }


}
