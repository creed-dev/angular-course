import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  count: number = 0;

  constructor() { }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
