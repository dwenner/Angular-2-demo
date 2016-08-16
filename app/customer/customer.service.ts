import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

    constructor() { }
    
    getCustomers() {
        return [
            { id: 1, name: "Daniel" },
            { id: 2, name: "Lars" },
            { id: 3, name: "Hillary" },
            { id: 4, name: "Donald" },
            { id: 5, name: "Bill" },
        ];
    }
}