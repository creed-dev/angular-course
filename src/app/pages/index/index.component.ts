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

  search: string = '';

  posts: Array<Post> = [
    {id: 1, title:'JavaScript', text: 'JavaScript is the best language in the world'},
    {id: 2, title:'Velvet beer', text: 'Velvet beer is the best beer in the world'},
    {id: 3, title:'WebStorm', text: 'WebStorm is the best IDE in the world'}
  ]

  constructor() { }

  updatePosts(newPost: Post): void {
    this.posts.unshift(newPost);
  }

}
