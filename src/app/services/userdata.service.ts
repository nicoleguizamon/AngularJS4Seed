import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { UserCustom } from '../interfaces/user-custom';
import { UserInfo } from '../interfaces/user-info';
import { BuildingInfo } from '../interfaces/building-info';
import { BaseService } from './base-service.service';
import { Http } from '@angular/http';

@Injectable()
export class UserdataService extends BaseService {
    userCustom: UserCustom;
    userInfo:UserInfo;
    buildingInfo:BuildingInfo;

    constructor(httpService:Http) {
        super(httpService);
        this.buildingInfo = {} as BuildingInfo;
    }

    getBuildingNews() {
        return this.httpGet(this.getUrl('Building/GetDataBuilding?pBuildingId=' + localStorage.getItem("committeeId")), this.getOptions())
                        .map(res=>res.json())
                        .subscribe((post)=> {
                            this.buildingInfo = {
                                name: post.name,
                                imagePath:post.imagePath,
                                news: post.news
                            }
                        });
    }

    getDetailedNews() {
        //return this.http.get(this.getUrl('Building/GetDataBuilding?pBuildingId=' + localStorage.getItem("committeeId")), this.getOptions()).map(res=>res.json().news);
        return this.httpGet(this.getUrl('Building/GetDataBuilding?pBuildingId=' + localStorage.getItem("committeeId")), this.getOptions()).map(res=>res.json().news);
    }

    getDetailedInformations() {
        //return this.http.get(this.getUrl('Building/GetDataBuilding?pBuildingId=' + localStorage.getItem("committeeId")), this.getOptions()).map(res=>res.json().news);
        return this.httpGet(this.getUrl('Building/GetDataBuilding?pBuildingId=' + localStorage.getItem("committeeId")), this.getOptions()).map(res=>res.json().informations);
    }

    getDetailedExpenses() {
        //return this.http.get(this.getUrl('User/GetDataExpenses?pBuildingId=' + localStorage.getItem("committeeId")), this.getOptions()).map(res=>res.json());
        return this.httpGet(this.getUrl('User/GetDataExpenses?pBuildingId=' + localStorage.getItem("committeeId")), this.getOptions()).map(res=>res.json());
    }

    getHeaderInfo() {
        //return this.http.get(this.getUrl('User/GetDataUser'), this.getOptions()).map(res=>res.json());
        return this.httpGet(this.getUrl('User/GetDataUser'), this.getOptions()).map(res=>res.json());
    }
}
