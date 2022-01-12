import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Todo} from "../interfaces/todo.interface";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }

  getTodos(): Observable<Todo[]> {
    let params = new HttpParams();
    params = params.append('_limit', '20');
    params = params.append('test', 'true');

    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos/', {
      params
    });
  }

  addTodo(newTodo: Todo): Observable<Todo> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos/', newTodo);
  }

  deleteTodo(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  updateTodo(id: number | undefined): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    }).pipe(catchError(error => {
      this.snackBar.open('Error updating data', 'Ok', {
        panelClass: ['snackbar']
      });
      return throwError(error);
    }));
  }
}
