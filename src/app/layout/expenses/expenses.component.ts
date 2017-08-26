import { Component, OnInit } from '@angular/core';
import { DownloadFileService } from '../../services/download-file.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  constructor(private downloadFileService: DownloadFileService) { }

  ngOnInit() {

  }

  downloadFile() {
    this.downloadFileService.download();
  }
}