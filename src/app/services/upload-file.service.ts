import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';
import { SpinnerService } from "../services/spinner.service";
import { Response, Headers, RequestOptions, RequestMethod, ResponseContentType, Http } from '@angular/http';

@Injectable()
export class UploadFileService extends BaseService {

  constructor(private spinnerService: SpinnerService, httpService:Http) { super(httpService); } 

  upload(fileList: FileList) {
    this.spinnerService.setTrue();
    
    let formData:FormData = new FormData();
    formData.append('type', '1');
    formData.append('text', 'jhsdnmguyhjerjbvhjsdbhdfghbgdfgfd');
    for (var index = 0; index < fileList.length; index++) {
      formData.append('uploadFile', fileList[index], fileList[index].name);
    }
    
    return this.httpPost(this.getUrl('User/UploadFile'), formData, this.getOptions())
                .subscribe(data => this.spinnerService.setFalse()),
                    error => console.log("Error downloading the file.");
  }
}
