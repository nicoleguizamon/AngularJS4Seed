import { Component, OnInit } from '@angular/core';
import { DownloadFileService } from '../../services/download-file.service';
import { Expenses } from "../../interfaces/expenses";
import { SpinnerService } from '../../services/spinner.service';
import { UserdataService } from '../../services/userdata.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  expenses:Expenses[];
  display: boolean = false;
  
  showDialog() {
      this.display = true;
  }

  constructor(private downloadFileService: DownloadFileService, private userdataService: UserdataService, 
                    private spinnerService: SpinnerService) {
      this.expenses = [];
   }

  ngOnInit() {
    this.spinnerService.setTrue();
    this.userdataService.getDetailedExpenses().subscribe((post)=> {
      this.expenses = post;
    });
    this.spinnerService.setFalse();
  }

  downloadFile() {
    this.downloadFileService.download();
  }
}