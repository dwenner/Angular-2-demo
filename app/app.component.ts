import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
                <p [style.color]="danielsFarge">Hello {{name}}</p>
               `
})
export class AppComponent {
    // [ ] er property binding - Component til DOM
    // ( ) er event binding - DOM til Component

    danielsFarge = "blue";
    title = "Customer App";
    name = "Daniel";

    customers = [
        { id: 1, name: "Daniel" },
        { id: 2, name: "Lars" },
        { id: 3, name: "Hillary" },
        { id: 4, name: "Donald" },
        { id: 5, name: "Bill" }
    ];

    changeSuitColor() {
        let defaultColor = "blue";
        this.danielsFarge = this.danielsFarge === defaultColor ? 'red' : defaultColor
    }

    //Strong type event. 
    changeMyName(event: KeyboardEvent) {
        //https://angular.io/docs/ts/latest/guide/user-input.html#keyup1
        this.name = (<HTMLInputElement>event.target).value;
    }
    changeMyNameWithValue(value: string) {
        this.name = value;
    }
}