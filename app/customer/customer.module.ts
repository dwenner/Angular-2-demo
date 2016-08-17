import { FormsModule } from '@angular/forms'; //Trengs for ngModel
import { HttpModule } from '@angular/http'; //HttpModule
import { CommonModule  } from '@angular/common'; //For vanlige directives
import { NgModule } from '@angular/core';
import 'rxjs/Rx'; //Everything from rx;

import { 
    CustomerService,
    CustomerComponent,
    CustomersComponent
} from './index';

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule],
    providers: [CustomerService],
    declarations: [CustomerComponent, CustomersComponent],
    exports: [CustomersComponent] //Eksport for bruk i andre moduler.
})
export class CustomerModule { }
