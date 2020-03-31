import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { LikeModule } from "../like/like.module";

@NgModule({
  imports: [
    CommonModule, LikeModule
  ],
  declarations: [PostListComponent],
  exports: [PostListComponent]
})
export class PostModule { }
