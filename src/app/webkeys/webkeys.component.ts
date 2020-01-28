import { Component, OnInit } from "@angular/core";
import { TodoService } from "../services/todo.service";

@Component({
  selector: "app-webkeys",
  templateUrl: "./webkeys.component.html",
  styleUrls: ["./webkeys.component.css"]
})
export class WebkeysComponent implements OnInit {
  todos = [];
  constructor(private todo: TodoService) {}

  ngOnInit() {
    this.todo.getAllTodos().subscribe(data => {
      this.todos = data as any;
    });
  }
  collapsed = true;
  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  addTodo(titleField: HTMLInputElement) {
    let todo = {
      userId: 1,
      id: 101,
      title: titleField.value,
      body: "My New Post"
    };
    this.todo.incTodo(todo).subscribe(responseData => {
      console.log(responseData);
      this.todos.unshift(responseData);
      titleField.value = ""; // because after click enter the element still seen in the view
    });
  }

  deleteTodo(todo) {
    this.todo.deleteTodo(todo.id).subscribe(responseData => {
      if (responseData) {
        let index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
      }
    });
  }
}
