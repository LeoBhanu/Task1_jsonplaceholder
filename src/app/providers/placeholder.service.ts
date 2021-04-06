import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostResponse } from './response';
import { TodoResponse } from './todoresponse';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  private Uri:string = 'https://jsonplaceholder.typicode.com/posts'
  private todo_url = "https://jsonplaceholder.typicode.com/todos"
  constructor(private _http:HttpClient) { }

  getPosts():Observable<PostResponse[]>{
    return this._http.get<PostResponse[]>(this.Uri);
    }
    getTodos():Observable<TodoResponse[]>{
      return this._http.get<TodoResponse[]>(this.todo_url);
    }

}
