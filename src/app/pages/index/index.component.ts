import { Component } from '@angular/core';

export interface Post {
  id?: number,
  title: string,
  text: string
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  title = 'angular-app';
  posts: Array<Post> = [
    {id: 1, title:'#1 Title', text: '#1 TEXT'},
    {id: 2, title:'#2 Title', text: '#2 TEXT'},
    {id: 3, title:'#3 Title', text: '#3 TEXT'}
  ]

  constructor() { }

  updatePosts(newPost: Post): void {
    this.posts.unshift(newPost);
  }

}
