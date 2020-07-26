/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { PostService } from './post.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import faker from "faker";
import { Post } from './post';

describe('Service: Like', () => {

  let injector: TestBed;
  let service: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService]
    });
    injector = getTestBed();
    service = injector.get(PostService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getPost() should return 10 records', () => {

    let mockPosts: Post[] = [];

    for (let i = 1; i < 11; i++) {
      let post = new Post(i, faker.lorem.sentence(), faker.lorem.sentence());
      mockPosts.push(post);
    }

    service.getPosts().subscribe((posts) => {
      expect(posts.length).toBe(10);
    });

    const req = httpMock.expectOne('../assets/data.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });

});
