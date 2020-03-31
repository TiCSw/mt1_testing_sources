import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from "./post";

@Injectable({
  providedIn: 'root'
})

export class PostService {
  configUrl = '../assets/data.json';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.configUrl);
  }

}
