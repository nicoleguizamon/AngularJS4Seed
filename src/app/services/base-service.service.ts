import { Injectable } from '@angular/core';
import { Headers, RequestOptions, ResponseContentType, Http, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { HttpRequest, HttpHeaders, HttpClient, HttpResponse } from "@angular/common/http";

@Injectable()
export class BaseService {
  //private apiUrl = 'http://localhost:39048/api/';
  private apiUrl = 'http://apisigic.glubatec.com/api/';

  constructor(private http:Http) { }

  public getUrl(modelo:string)
  {
      return this.apiUrl + modelo;
  }

  public getOptions(responseType?: ResponseContentType, withoutAuthentication?:boolean): RequestOptionsArgs {
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

  /*public httpRequest(type:string, url:string, body:any, responsType:string, withAuthentication:boolean=true) : Observable<any>
  {
    var req = new HttpRequest(type, url, body, {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')}),
      responseType: "json",
      withCredentials: withAuthentication
    });

    return this.httpClient.request(req);
    //return this.http.get(url, options).catch(this.handleHttpError);
    //return this.http.post(url, body, options).catch(this.handleHttpError);
  }*/

  //TODO: Handle Http Error
  private handleHttpError(error: any): Observable<Response> {
    console.error('An error occurred', error);
    switch (error.status) {
      case 400://BAD REQUEST
        break;
      case 401://UNAUTHORIZED
        break;
      case 403://FORBIDDEN
        break;
      case 404://NOT FOUND
        break;
      case 500://INTERNAL SERVER ERROR
        break;
      default:
        return Observable.throw(new Error(error.status));
    }
  }
}
