import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
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
        /*this.buildingInfo = {
            name: 'Edificio Regina',
            imagePath: 'assets/images/slider1.jpg',
            news: [{
                title: '',
                description: 'Se realizara un corte de luz desde las 9pm a 10pm en dia 3 de septiembre de 2017',
                type:'Urgent'
            },{
                title: 'Gasista',
                description: 'Se contara con la presencia del gasista a partir de las 13hs.',
                type:'Information'
            },{
                title: 'Expensas',
                description: 'El pago de expensas se realiza en el NUEVO horario de 18hs a 21hs',
                type:'Information'
            }]
        };*/
    }

    getBuildingNews(){
        return this.http.get(this.getUrl('Building/GetDataBuilding'), this.getOptions()).map(res=>res.json());
    }

    getHeaderInfo() {
        return this.http.get(this.getUrl('User/GetDataUser'), this.getOptions()).map(res=>res.json());
    }
}