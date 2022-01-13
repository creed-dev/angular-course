import {Injectable} from '@angular/core';
import {Post} from "../pages/index/index.component";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [
    {id: 1, title: 'JavaScript', text: 'JavaScript is the best language in the world'},
    {id: 2, title: 'Velvet beer', text: 'Velvet beer is the best beer in the world'},
    {id: 3, title: 'WebStorm', text: 'WebStorm is the best IDE in the world'}
  ]

  constructor() {
  }

  getPosts(): Post[] {
    return this.posts;
  }

  addPost(newPost: Post): void {
    this.posts.unshift(newPost);
  }

  getPostById(id: number): Post | undefined {
    return this.posts.find(item => item.id === id);
  }
}
