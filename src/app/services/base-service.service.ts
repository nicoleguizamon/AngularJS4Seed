import { Injectable } from '@angular/core';
import { Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class BaseService {
  //private apiUrl = 'http://portalsigic.glubatec.com/api/';
  private apiUrl = 'http://localhost:39048/api/';

  constructor() { }

  public getUrl(modelo:string)
  {
      return this.apiUrl + modelo;
  }

  public getOptions(responseType?: ResponseContentType, withoutAuthentication?:boolean): RequestOptions {
    let auth = new Headers({'Authorization': 'Bearer ' + localStorage.getItem('token')});
    if(withoutAuthentication !=null && withoutAuthentication == true)
    {

    }
    let options = new RequestOptions({ headers: auth });
    if(responseType != null) {
      options.responseType = responseType;
    }

    return options;
  }
}
