import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; //Trengs for ngModel
import { HttpModule } from '@angular/http'; //HTTP 
import 'rxjs/Rx'; //Everything from rx;

import { AppComponent }  from './app.component';
import {CustomerComponent} from './customer/customer.component';
import {CustomersComponent} from './customer/customers.component';
import {CustomerService} from './customer/customer.service';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule ],
  providers: [CustomerService], //Global CustomerService singleton. Providers også mulig lenger nede for ny instans
  declarations: [ AppComponent, CustomerComponent, CustomersComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
