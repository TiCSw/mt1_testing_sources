import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input()
  id: number;

  private likes: number;

  constructor() {
    this.likes = 0;
  }

  getLikes() {
    return this.likes;
  }

  upLikes() {
    this.likes++;
  }

  downLikes() {
    this.likes--;
  }

  ngOnInit() {
  }

}
