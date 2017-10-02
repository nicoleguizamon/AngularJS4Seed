import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response, Http } from '@angular/http';
import { BaseService } from '../base-service.service';

@Injectable()
export class AuthService extends BaseService  {

    constructor(httpService:Http) { super(httpService); }

    login(username:string, password:string)
    {
        let body='username=' + username + '&password=' + password;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({'headers': headers});
        return this.httpPost(this.getUrl('Token/Login'), body, options).map(this.getDatos);
        //return this.http.post(this.getUrl('Token/Login'), body, options).map(this.getDatos);
    }

    logout(): void {
        localStorage.removeItem('token');
    }

    private getDatos(data: Response) {
        let datos = data.json();
        //if (datos && datos.access_token)
        if (datos)
        {
            //localStorage.setItem('token', datos.access_token);
            localStorage.setItem('token', datos);
            return true;
        }
        return false;
    }
}