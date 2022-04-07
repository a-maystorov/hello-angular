import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from './Post';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts?: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';

    this.http
      .post<Post>(this.url, JSON.stringify(post))
      .subscribe((response) => {
        post.id = response.id;
        this.posts?.splice(0, 0, post);
      });
  }

  updatePost(post: any) {
    this.http
      .patch<Post>(this.url + '/' + post.id, JSON.stringify({ isRed: true }))
      .subscribe((res) => {
        console.log(res);
      });
    // this.http.put<Post>(this.url, JSON.stringify(post))
  }

  deletePost(post: any) {
    this.http.delete(this.url + '/' + post.id).subscribe(() => {
      let index = this.posts?.indexOf(post);

      // this.posts?.splice(index, 1);
      console.log('Deleted: ', post.id);
    });
  }

  ngOnInit(): void {
    this.http.get<Post[]>(this.url).subscribe((response) => {
      this.posts = response;
    });
  }
}
