import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from 'src/app/providers/placeholder.service';
import { TodoResponse } from 'src/app/providers/todoresponse';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todoList:TodoResponse[]=[];

  constructor(private _todo:PlaceholderService) { }

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList(){
    this._todo.getTodos().subscribe(
      (res)=>{
        this.todoList = res;
      }
    )
  }
}
