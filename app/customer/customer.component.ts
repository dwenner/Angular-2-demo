import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-customer',
    template: `
       <span [style.color]="myColor">{{customer.id}}</span>&nbsp;
       <span>{{customer.name}}</span>
    `
})
export class CustomerComponent implements OnInit {
    @Input() customer: { id: number, name: string };
    @Input('my-color') myColor: string;

    constructor() { }

    ngOnInit() { }

}