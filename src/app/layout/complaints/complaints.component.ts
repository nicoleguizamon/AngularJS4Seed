import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../services/upload-file.service';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent implements OnInit {

  constructor(private uploadFileService: UploadFileService, private spinnerService: SpinnerService) { }

  ngOnInit() {

  }

  uploadFile(event) {
    this.spinnerService.setTrue();
    let fileList: FileList = event.files;
    if(fileList.length > 0) {
        //let file: File = fileList[0];
        this.uploadFileService.upload(fileList);
    }
    this.spinnerService.setFalse();
  }
}
