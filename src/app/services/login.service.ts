import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';
import { Http } from '@angular/http';

@Injectable()
export class LoginService extends BaseService {

  constructor(public httpService:Http) { super(httpService); }

  getCompanyInfo() {
    //return this.http.get(this.getUrl('Company/GetDataCompany'), this.getOptions(null, true)).map(res=>res.json());
    return this.httpGet(this.getUrl('Company/GetDataCompany'), this.getOptions(null, true)).map(res=>res.json());
  }
}
