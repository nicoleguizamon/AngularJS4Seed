import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { SpinnerService } from '../../services/spinner.service';
import { News } from '../../interfaces/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news:News[];
  constructor(private userdataService: UserdataService, private spinnerService: SpinnerService) {
    this.news = [];
  }

  ngOnInit() {
    this.spinnerService.setTrue();
    this.userdataService.getDetailedNews().subscribe((post)=> {
        this.news = post;
      });
    this.spinnerService.setFalse();
  }

}
