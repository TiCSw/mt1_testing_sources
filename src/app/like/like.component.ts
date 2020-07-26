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
  private dislikes: number;

  constructor() {
    this.likes = 0;
    this.dislikes = 0;
  }

  getLikes() {
    return this.likes;
  }

  getDislikes() {
    return this.dislikes;
  }

  upLikes() {
    this.likes++;
  }

  upDislikes() {
    this.dislikes++;
  }

  ngOnInit() {
  }

}
