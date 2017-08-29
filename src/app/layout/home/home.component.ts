import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../interfaces/user-info';
import { BuildingInfo } from '../../interfaces/building-info';
import { News } from '../../interfaces/news';
import { UserdataService } from '../../services/userdata.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
buildingInfo:BuildingInfo;
userInfo:UserInfo;

  constructor(private userdataService: UserdataService) {
      this.buildingInfo = {} as BuildingInfo;

  }

  ngOnInit() {
    this.userdataService.getBuildingNews().subscribe((post)=> {
      this.buildingInfo = {
          name: post.name,
          imagePath:post.imagePath,
          news: post.news
      }
      console.log(this.buildingInfo);
    });
  }

}
