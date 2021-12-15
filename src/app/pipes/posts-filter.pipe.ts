import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "../pages/index/index.component";

@Pipe({
  name: 'postsFilter',
  pure: false
})
export class PostsFilterPipe implements PipeTransform {

  transform(posts: Post[], search: string): Post[] {
    return posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));
  }

}
