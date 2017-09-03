import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';
import { SpinnerService } from "../services/spinner.service";
import { Http, Response, Headers, RequestOptions, RequestMethod, ResponseContentType } from '@angular/http';

@Injectable()
export class UploadFileService extends BaseService {

  constructor(public http: Http, private spinnerService: SpinnerService) { super(); }

  upload(fileList: FileList) {
    this.spinnerService.setTrue();
    
    let formData:FormData = new FormData();
    for (var index = 0; index < fileList.length; index++) {
      formData.append('uploadFile', fileList[index], fileList[index].name);
    }
    
    return this.http.post(this.getUrl('User/UploadFile'), formData, this.getOptions())
                .subscribe(data => this.spinnerService.setFalse()),
                    error => console.log("Error downloading the file.");
  }
}
