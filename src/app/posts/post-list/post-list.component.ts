import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent{
  posts = [
    // {title:"First Post", content:"This is the first post"},
    // {title:"second Post", content:"This is the second post"},
    // {title:"third Post", content:"This is the third post"},
  ];
}
