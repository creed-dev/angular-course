import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../../interfaces/todo.interface";

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos/?_limit=20').subscribe(todos => {
      this.todos = todos;
    })
  }

}
