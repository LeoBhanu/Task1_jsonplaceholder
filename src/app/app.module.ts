import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './views/posts/posts.component';
import { HttpClientModule } from "@angular/common/http";
import { TodosComponent } from '../app/views/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
