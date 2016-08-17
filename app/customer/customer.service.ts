import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

const URL_CUSTOMER = 'app/customers.json';

@Injectable()
export class CustomerService {


    constructor(private _http: Http) { }

    getCustomers() {
        //Merk at .map på Observable er en del av RxJS
        let response = this._http.get(URL_CUSTOMER).map(
            (response: Response) => response.json())
            .toPromise()
            .catch((err: any) => {
                console.log(err);
            });
        return response;
    }

    getCustomers_RxObservable() {
        //Merk at .map på Observable er en del av RxJS
        let response = this._http.get(URL_CUSTOMER).map(
            (response: Response) => response.json()
        ).catch(this._handleError);
        return response;
    }

    private _handleError(err: any) {
        console.log("from service: ", err); //gjør noe bedre her. Logg/fiks/osv...
        return Observable.throw(err);
    }
}