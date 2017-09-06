
import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';
import { Http } from '@angular/http';

@Injectable()
export class LoginService extends BaseService {

  constructor(public http:Http) { super(); }

  getCompanyInfo() {
    return this.http.get(this.getUrl('Company/GetDataCompany'), this.getOptions(null, true)).map(res=>res.json());
  }
}
