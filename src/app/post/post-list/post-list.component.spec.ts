/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";

import { PostListComponent } from './post-list.component';
import { LikeComponent } from '../../like/like.component';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';

import { Post } from '../post';
import { Observable, of } from 'rxjs';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PostListComponent, LikeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    component.posts = [new Post("Post 1", "Content of post 1")];
    fixture.detectChanges();
    debug = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should have an h1 tag", () => {
    expect(debug.query(By.css("h1")).nativeElement.innerText).toBe("List of posts");
  })

  it("Should have a li tag", () => {
    const tag = debug.query(By.css("ul")).nativeElement.children;

    expect(tag.length).toBe(1);
    expect(tag[0].innerText).toContain("Post 1")
    console.log(tag[0].innerText)
  })

});
