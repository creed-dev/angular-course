import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  title: string = 'Card Title'
  subtitle: string = 'Cart Subtitle'
  cardText: string = 'lorem lorem dsadsadsadsa'
  toggleColor: any = false;

  constructor() { }

  ngOnInit(): void {
  }

}
