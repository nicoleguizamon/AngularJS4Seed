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
    this.buildingInfo = {
        imagePath:'assets/images/slider1.jpg',
        news: [
            {
                description: 'Vamos a cortar la luz de 10 a 20 el dia 3 de Septiembre',
                header:'Luz',
                type:'Information',
            },
            {
                description: 'El gasista va a ir al edificio',
                header:'Gasista',
                type:'Information'
            },
            {
                description: 'Tendrmeos reunion de consorcio',
                header:'Reunion',
                type:'Information'
            },
        ]

    }
;
   }

   getHeaderInfo(){
       //return this.http.get('url').map(res=>res.json());
       return this.userCustom;
   }

   getBuildingNews(){
    //return this.http.get('url').map(res=>res.json());
    return this.buildingInfo;
    }
}
