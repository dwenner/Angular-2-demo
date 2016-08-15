import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><p>{{hello}}</p>'
})
export class AppComponent { 
    hello: string = "Hello world";
}
