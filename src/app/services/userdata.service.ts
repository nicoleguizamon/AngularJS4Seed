import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { UserCustom } from '../interfaces/user-custom';
import { UserInfo } from '../interfaces/user-info';
import { BuildingInfo } from '../interfaces/building-info';
import { BaseService } from './base-service.service';

@Injectable()
export class UserdataService extends BaseService {
    userCustom: UserCustom;
    userInfo:UserInfo;
    buildingInfo:BuildingInfo;

    constructor(public http:Http) {
        super();
    }

    getBuildingNews(){
        return this.http.get(this.getUrl('Building/GetDataBuilding'), this.getOptions()).map(res=>res.json());
    }
//TODO: Change to real API call
    getDetailedNews(){
        return this.http.get(this.getUrl('Building/GetDataBuilding'), this.getOptions()).map(res=>res.json().news);
    }

    getHeaderInfo() {
        return this.http.get(this.getUrl('User/GetDataUser'), this.getOptions()).map(res=>res.json());
    }
}
