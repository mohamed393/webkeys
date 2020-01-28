import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  url: string = "https://jsonplaceholder.typicode.com/todos";
  constructor(private Http: HttpClient) {}
  getAllTodos() {
    return this.Http.get(this.url);
  }
  incTodo(todo) {
    return this.Http.post(this.url, todo);
  }
  deleteTodo(id) {
    return this.Http.delete(this.url + "/" + id);
  }
}
