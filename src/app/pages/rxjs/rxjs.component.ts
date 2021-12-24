import { Component, OnInit } from '@angular/core';
import {interval, Subscription} from "rxjs";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  sub$: Subscription;

  constructor() {
    this.sub$ = interval(1000)
      .pipe(
        filter(value => value % 2 === 0),
        map(value => `Mapped value ${value}`))
      .subscribe(value => {
      console.log(value);
    })
  }

  ngOnInit(): void {
  }

  stopSubscribe() {
    this.sub$.unsubscribe();
  }
}
