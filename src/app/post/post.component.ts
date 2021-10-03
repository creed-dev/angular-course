import {Component, ContentChild, Input, OnInit} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post!: Post;
  @ContentChild('textLengthBlock') textLengthBlock: any;

  constructor() { }

  ngOnInit(): void {
  }

  getLengthText() {
    console.log(this.textLengthBlock.nativeElement);
  }
}
