import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { SpinnerService } from '../../services/spinner.service';
import { Informations } from '../../interfaces/informations';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
    informations:Informations[];
    constructor(private userdataService: UserdataService, private spinnerService: SpinnerService) {
        this.informations = [];
      }

  ngOnInit() {
    this.spinnerService.setTrue();
    this.userdataService.getDetailedInformations().subscribe((post)=> {
        this.informations = post;
      });
    this.spinnerService.setFalse();
  }

}


