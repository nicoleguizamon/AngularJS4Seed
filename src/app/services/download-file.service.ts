import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, ResponseContentType } from '@angular/http';
//import 'rxjs/Rx';

@Injectable()
export class DownloadFileService {
  private apiUrl = 'http://localhost:39048/api/';
  
  constructor(public http: Http) {

  }

  download() { //get file from service
    return this.http.post(this.getUrl('User/DownloadFile'), JSON.stringify({id:1}), this.getOptions()).subscribe(data => this.downloadFile(data)),
                              error => console.log("Error downloading the file.");
  }

  downloadFile(data: Response) {
    var blob = new Blob([data], { type: 'text/csv' });//types: 'application/pdf' 'text/csv' 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    var url= window.URL.createObjectURL(blob);
    window.open(url);
  }

  private getOptions(): RequestOptions {
    let auth = new Headers({'Authorization': 'Bearer ' + localStorage.getItem('token')});
    let options = new RequestOptions({ headers: auth });//method: RequestMethod.Post,
    return options;
  }

  private getUrl(modelo:string)
  {
      return this.apiUrl + modelo;
  }
}