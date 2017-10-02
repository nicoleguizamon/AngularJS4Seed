import { Injectable } from '@angular/core';
import { Headers, RequestOptions, ResponseContentType, Http, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class BaseService {
  private apiUrl = 'http://portalsigic.glubatec.com/api/';//'http://localhost:39048/api/'

  constructor(private http:Http) { }

  public getUrl(modelo:string)
  {
      return this.apiUrl + modelo;
  }

  public getOptions(responseType?: ResponseContentType, withoutAuthentication?:boolean): RequestOptions {
    let auth = new Headers({'Authorization': 'Bearer ' + localStorage.getItem('token')});
    if(withoutAuthentication != null && withoutAuthentication == true)
    {

    }
    let options = new RequestOptions({ headers: auth });
    if(responseType != null) {
      options.responseType = responseType;
    }

    return options;
  }

  public httpGet(url:string, options?:RequestOptionsArgs): Observable<Response>
  {
    return this.http.get(url, options).catch(this.handleHttpError);
  }

  public httpPost(url:string, body:any, options?:RequestOptionsArgs): Observable<Response>
  {
    return this.http.post(url, body, options).catch(this.handleHttpError);
  }

  //TODO: Handle Http Error
  private handleHttpError(error: any): Observable<Response> {
    console.error('An error occurred', error);
    switch (error.status) {
      case 302:
        break;
      case 401:
        break;
      case 403:
        break;
      default:
        return Observable.throw(new Error(error.status));
    }
  }
}