import { Component } from '@angular/core';

export interface Post {
  id?: number,
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-app';
  posts: Array<Post> = [
    {id: 1, title:'#1 Title', text: '#1 TEXT'},
    {id: 2, title:'#2 Title', text: '#2 TEXT'},
    {id: 3, title:'#3 Title', text: '#3 TEXT'}
  ]

  updatePosts(newPost: Post): void {
    this.posts.unshift(newPost);
  }
}
