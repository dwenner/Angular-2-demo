import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

const URL_CUSTOMER = 'app/customers.json';

@Injectable()
export class CustomerService {


    constructor(private _http:  Http) { }
    
    getCustomers() {
        let response = this._http.get(URL_CUSTOMER).map(
            (response:  Response) => response.json()
        );
        return response;
    }
}