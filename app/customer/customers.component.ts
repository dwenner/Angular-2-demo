import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from './customer.service';
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    template: `
            <ul>
                <li *ngFor="let c of customers | async">
                <app-customer [customer]="c" [my-color]="color"></app-customer>
                </li>
            </ul>
            `
})
export class CustomersComponent implements OnInit {
    @Input("outer-color") color: string;

    customers: Observable<any[]>;

    constructor(private _customerService: CustomerService) { }

    ngOnInit() {
        this.customers = this._customerService.getCustomers();
    }

}