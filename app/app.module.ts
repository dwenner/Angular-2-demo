import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; //Trengs for ngModel

import { AppComponent }  from './app.component';
import {CustomerComponent} from './customer/customer.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CustomerComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
