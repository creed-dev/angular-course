import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.scss'],
  animations: [
    trigger('animation', [
      state('start', style({
        background: 'red'
      })),
      state('end', style({
        background: 'blue'
      })),
      state('circle', style({
        background: 'orange',
        transform: 'scale(1.2)',
        borderRadius: '50%'
      })),
      transition('start => end', animate('1s')),
      transition('end => start', animate('1s')),
      transition('circle <=> *', animate('2s')),
      transition(':enter', [
        style({opacity: 0}),
        animate('2s')
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('2s', style({
          opacity: 0
        }))
      ]),
    ])
  ]
})
export class AnimateComponent implements OnInit {

  animationState = 'start';
  visible: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  animateBackground() {
    this.animationState === 'start' ?
      this.animationState = 'end' :
      this.animationState = 'start';
  }

  animateCircle() {
    this.animationState !== 'circle' ?
      this.animationState = 'circle' :
      this.animationState = 'start'
  }
}
