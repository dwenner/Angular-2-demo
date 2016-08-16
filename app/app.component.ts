import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    // [ ] er property binding - Component til DOM
    // ( ) er event binding - DOM til Component

    danielsFarge = "blue";
    title = "Customer App";
    name = "Daniel";

    changeSuitColor() {
        let defaultColor = "blue";
        this.danielsFarge = this.danielsFarge === defaultColor ? 'red' : defaultColor
    }

    //Strong type event. 
    changeMyName(event: KeyboardEvent  ) {
        //https://angular.io/docs/ts/latest/guide/user-input.html#keyup1
        this.name = (<HTMLInputElement>event.target).value;
    }
    

}