import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { UserCustom } from '../interfaces/user-custom';
import { UserInfo } from '../interfaces/user-info';
import { BuildingInfo } from '../interfaces/building-info';

@Injectable()
export class UserdataService {
userCustom: UserCustom;
userInfo:UserInfo;
buildingInfo:BuildingInfo;

  constructor(public http:Http) {
    this.userCustom = {
        fullname:'Nico Leguizamon',
        buildingName:'Edifico Regina'
    };
   }

   getHeaderInfo(){
       //return this.http.get('url').map(res=>res.json());
       return this.userCustom;
   }
}
