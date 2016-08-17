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
    
    onColorUpdated(newColor: string) {
        this.danielsFarge = newColor; 
    }

    onNameUpdated(newName: string){
        this.name = newName;
    }
}