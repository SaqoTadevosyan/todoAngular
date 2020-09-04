import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoList=[]
  pageSelector="create"

  pageChange(pageName) {
    this.pageSelector=pageName
  }
}
