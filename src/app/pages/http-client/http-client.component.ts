import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../../interfaces/todo.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {

  form: FormGroup;
  todos: Todo[] = [];

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      title: [null, Validators.required],
      completed: [false]
    })

  }

  ngOnInit(): void {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos/?_limit=20').subscribe(todos => {
      this.todos = todos;
    })
  }

  onSubmit() {

    if (this.form.invalid) {
      const controls = this.form.controls;
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }

    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos/', this.form.value).subscribe(todo => {
      this.todos.unshift(todo);
      this.form.reset();
    })
  }
}
