import { Component, OnInit } from '@angular/core';
import { DownloadFileService } from '../../services/download-file.service';
import { FileUploadModule } from 'primeng/primeng';
import { UploadFileService } from '../../services/upload-file.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  constructor(private downloadFileService: DownloadFileService, private uploadFileService: UploadFileService) { }

  ngOnInit() {

  }

  downloadFile() {
    this.downloadFileService.download();
  }

  uploadFile(event) {
    let fileList: FileList = event.files;
    if(fileList.length > 0) {
        //let file: File = fileList[0];
        this.uploadFileService.upload(fileList);
    }
  }
}