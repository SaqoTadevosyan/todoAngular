import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { CreateComponent } from './create/create.component';
import { FiltrComponent } from './filtr/filtr.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,

    TodoComponent,

    CreateComponent,

    FiltrComponent,

    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
