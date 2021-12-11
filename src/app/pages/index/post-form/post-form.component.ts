import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../index.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAddPost: EventEmitter<Post> = new EventEmitter<Post>()
  @ViewChild('titleInput') input: any

  title = ''
  text = ''

  constructor() { }

  ngOnInit(): void {
  }

  addPost(): void {
    const newPost: Post = {
      title: this.title,
      text: this.text
    };
    this.title = '';
    this.text = '';
    this.onAddPost.emit(newPost);
  }

  focusTitleInput(): void {
    this.input.nativeElement.focus();
  }
}
