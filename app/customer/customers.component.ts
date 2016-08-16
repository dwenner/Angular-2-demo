import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    template: `
            <ul>
                <li *ngFor="let c of customers">
                <app-customer [customer]="c"></app-customer>
                </li>
            </ul>
            `
})
export class CustomersComponent implements OnInit {

    customers = [
        { id: 1, name: "Daniel" },
        { id: 2, name: "Lars" },
        { id: 3, name: "Hillary" },
        { id: 4, name: "Donald" },
        { id: 5, name: "Bill" },
    ];

    constructor() { }

    ngOnInit() { }

}