import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from './customer.service';
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    template: `
            <ul>
                <li *ngFor="let c of customers">
                <app-customer [customer]="c" [my-color]="color"></app-customer>
                </li>
            </ul>
            <p *ngIf="unhandledError" style="color: red" >Noe er galt! :(</p>
            `
})
export class CustomersComponent implements OnInit {
    @Input("outer-color") color: string;

    customers: any[];
    unhandledError = false;

    constructor(private _customerService: CustomerService) { }

    ngOnInit() {
        this._customerService.getCustomers().then((data) => {
            this.customers = data;
        });
    }



    //RXObservable
    /*this.customers = this._customerService.getCustomers()
        .catch((err) => {
            console.error("From component: ", err);
            this.unhandledError = true;
            var response = Observable.of([true]);
            return response;
        });*/
}