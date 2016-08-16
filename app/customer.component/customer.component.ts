import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-customer',
    template: `
       <span [style.color]="danielsFarge">{{customer.id}}</span>&nbsp;
       <span>{{customer.name}}</span>
    `
})
export class CustomerComponent implements OnInit {
    @Input() customer: { id: number, name: string };

    constructor(id: number, name: string) { }

    ngOnInit() {

    }

}