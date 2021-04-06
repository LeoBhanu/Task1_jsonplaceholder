import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './views/posts/posts.component';
import { TodosComponent } from './views/todos/todos.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/todos',
    pathMatch:'full'
  },
  {
    path:'posts',
    component:PostsComponent
  },
  {
    path:'todos',
    component:TodosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
