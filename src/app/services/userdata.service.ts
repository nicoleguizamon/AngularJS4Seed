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

    private apiUrl = 'http://portalsigic.glubatec.com/api/';

    constructor(public http:Http) {
        this.buildingInfo = {
            name: 'Edificio Regina',
            imagePath: 'assets/images/slider1.jpg',
            news: [{
                header: 'Luz',
                description: 'Se realizara un corte de luz desde las 9pm a 10pm en dia 3 de septiembre de 2017',
                type:'Urgent'
            },{
                header: 'Gasista',
                description: 'Se contara con la presencia del gasista a partir de las 13hs.',
                type:'Information'
            },{
                header: 'Expensas',
                description: 'El pago de expensas se realiza en el NUEVO horario de 18hs a 21hs',
                type:'Information'
            }]
        };
    }

    getBuildingNews(){
        return this.buildingInfo;
    }

    getHeaderInfo() {
        return this.http.get(this.getUrl('User/GetDataUser'), this.getOptions()).map(res=>res.json());
    }

    private getOptions(): RequestOptions {
        let auth = new Headers({'Authorization': 'Bearer ' + localStorage.getItem('token')});
        let options = new RequestOptions({ headers: auth });
        return options;
    }

    private getUrl(modelo:string)
    {
        return this.apiUrl + modelo;
    }
}
