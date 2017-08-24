import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../interfaces/user-info';
import { BuildingInfo } from '../../interfaces/building-info';
import { UserdataService } from '../../services/userdata.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
buildingInfo:BuildingInfo;
userInfo:UserInfo;

  constructor(private userdataService: UserdataService) { }

  ngOnInit() {
    this.buildingInfo = this.userdataService.getBuildingNews();
  }

}
