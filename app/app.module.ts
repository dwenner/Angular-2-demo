import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; //Trengs for ngModel

import { AppComponent }  from './app.component';
import {CustomerComponent} from './customer/customer.component';
import {CustomersComponent} from './customer/customers.component';
import {CustomerService} from './customer/customer.service'

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  providers: [CustomerService], //Global CustomerService singleton. Providers også mulig lenger nede for ny instans
  declarations: [ AppComponent, CustomerComponent, CustomersComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
