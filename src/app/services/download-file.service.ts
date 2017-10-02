import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions, RequestMethod, ResponseContentType } from '@angular/http';
import 'rxjs/Rx';
import { BaseService } from './base-service.service';
import { SpinnerService } from "../services/spinner.service";
import { Http } from '@angular/http';

@Injectable()
export class DownloadFileService extends BaseService {
  
  constructor(private spinnerService: SpinnerService, httpService:Http) { 
    super(httpService); 
  }

  download(pExpenseId:number) { //get file from service 
    this.spinnerService.setTrue();
    return this.httpGet(this.getUrl('User/DownloadFile?pBuildingId=' + localStorage.getItem("committeeId") + '&pId=' + pExpenseId), this.getOptions(ResponseContentType.ArrayBuffer))
                .subscribe(data => this.downloadFile(data)),
                    error => console.log("Error downloading the file.");
  }

  downloadFile(data: Response) {
    this.spinnerService.setFalse();
    var blob = new Blob([data.arrayBuffer()], { type: 'application/pdf' }); //types: 'application/pdf' 'text/csv' 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    var url = window.URL.createObjectURL(blob);

    if(navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, 'Book.csv');
    } else {
      let a = document.createElement('a');
      a.href = url;
      a.download = 'Book.pdf';
      document.body.appendChild(a);
      a.click();        
      document.body.removeChild(a);
    }
    window.URL.revokeObjectURL(url);
    //window.open(url);
  }
}