import { Component, OnInit } from '@angular/core';
import { BuildingInfo } from '../../interfaces/building-info';
import { News } from '../../interfaces/news';
import { UserdataService } from '../../services/userdata.service';
import { SpinnerService } from "../../services/spinner.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //buildingInfo:BuildingInfo;

  constructor(private userdataService: UserdataService, private spinnerService: SpinnerService) {
      //this.buildingInfo = {} as BuildingInfo;
  }

  ngOnInit() {
    this.spinnerService.setTrue();
    this.userdataService.getBuildingNews();
    this.spinnerService.setFalse();
  }
}
