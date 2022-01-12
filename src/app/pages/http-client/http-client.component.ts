import {Component, OnInit} from '@angular/core';
import {Todo} from "../../interfaces/todo.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TodosService} from "../../services/todos.service";

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {

  form: FormGroup;
  todos: Todo[] = [];

  constructor(private todosService: TodosService,
              private formBuilder: FormBuilder,
  ) {

    this.form = this.formBuilder.group({
      title: [null, Validators.required],
      completed: [false]
    })

  }

  ngOnInit(): void {
    this.todosService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  onSubmit() {

    if (this.form.invalid) {
      const controls = this.form.controls;
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }

    this.todosService.addTodo(this.form.value).subscribe(todo => {
      this.todos.unshift(todo);
      this.form.reset();
    })
  }

  onDelete(id: number | undefined) {
    this.todosService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(item => item.id !== id);
    });
  }

  onComplete(id: number | undefined) {
    this.todosService.updateTodo(id).subscribe(todo => {
      this.todos.find(item => item.id === todo.id)!.completed = true;
    });
  }
}
