import { PostService } from "./post.service";
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("PostService", () => {
  let postService: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService]
    });

    postService = TestBed.get(PostService);
  });

  it("Post number should be equal to 3", () => {
    postService.getPosts()
      .subscribe(posts => {
        expect(posts.length).toBe(3)
      })
  })
});
