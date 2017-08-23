import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { UserCustom } from '../interfaces/user-custom';
import { UserInfo } from '../interfaces/user-info';
import { BuildingInfo } from '../interfaces/building-info';

@Injectable()
export class UserdataService {
    userCustom: UserCustom;
    userInfo:UserInfo;
    buildingInfo:BuildingInfo;

    private apiUrl = 'http://portalsigic.glubatec.com/api/';//'http://localhost:39048/api/';

    constructor(public http:Http) {
   
    }

    getHeaderInfo() {
        return this.http.get(this.apiUrl + 'User').map(res=>res.json());
        //return this.http.get(this.apiUrl + 'User', this.getOptions()).map(res=>res.json());
    }

    private getOptions(): RequestOptions {
        let auth = new Headers({'Authorization': 'Bearer' + localStorage.getItem('token')});
        let options = new RequestOptions({ headers: auth });
        return options;
    }
}