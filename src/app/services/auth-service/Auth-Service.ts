import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { BaseService } from '../base-service.service';

@Injectable()
export class AuthService extends BaseService  {

    constructor(private http: Http) { super(); }

    login(username:string, password:string): Observable<boolean>
    {
        let body='username=' + username + '&password=' + password;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({'headers': headers});
        return this.http.post(this.getUrl('Token/Login'), body, options).map(this.getDatos);
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