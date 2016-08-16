import { Component, OnInit, Input } from '@angular/core';
import {CustomerService} from './customer.service';

@Component({
    selector: 'app-customer',
    template: `
       <span [style.color]="myColor">{{customer.id}}</span>&nbsp;
       <span>{{customer.name}}</span>
    `
})
export class CustomerComponent implements OnInit {
    @Input() customer: { id: number, name: string };
    @Input() myColor: string;

    customers: any[];

    constructor(private _customerService: CustomerService) { }

    ngOnInit() {
        this.customers = this._customerService.getCustomers();
    }
}