import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { UpdateComponent } from './update/update.component'

import { RouterModule, Routes } from '@angular/router';
const routs:Routes=[
  {path:'', redirectTo:'todo',pathMatch:'full'},
  {path:'todo', component:TodoComponent},
  {path:'todo/:id', component:UpdateComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routs)
    /* RoutingModule.forRoot() */
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
