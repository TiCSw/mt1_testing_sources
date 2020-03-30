import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message: String = "Users list";

  data: any[];

  constructor(private homeService: HomeService) { }

  getData() {
    return 10;
  }
  ngOnInit() { }
  /*ngOnInit() {
    this.homeService.getData().subscribe(data => {
      this.data = data;
    })
  }*/

}
