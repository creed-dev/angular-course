import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts.service";

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
export class IndexComponent implements OnInit {

  title = 'angular-app';

  search: string = '';

  posts: Post[] = [];

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }

  updatePosts(newPost: Post): void {
    this.postsService.addPost(newPost);
  }

}
