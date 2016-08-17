import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; //Trengs for ngModel
import { HttpModule } from '@angular/http'; //HTTP 
import 'rxjs/Rx'; //Everything from rx;

import { AppComponent }  from './app.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { CustomerModule } from './customer/customer.module';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, CustomerModule ],
  declarations: [ AppComponent, DashboardComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
