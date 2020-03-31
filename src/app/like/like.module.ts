import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeComponent } from './like.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LikeComponent],
  exports: [LikeComponent]
})
export class LikeModule { }
