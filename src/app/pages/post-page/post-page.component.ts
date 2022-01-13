import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../index/index.component";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post!: Post | undefined;
  showId: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.post = this.postsService.getPostById(+params.id);
    });
  }

  displayId() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.showId = !!queryParams.showId;
    });

    this.router.navigate(['/post', this.post?.id], {
      queryParams: {
        showId: true
      }
    });
  }
}
