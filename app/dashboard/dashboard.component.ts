import { Component, OnInit,
    Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'dashboard',
    template: `
    <p [style.color]="favoriteColor">Hello {{userName}}</p>
    <input type="text" [ngModel]="userName" (ngModelChange)="changeUserName($event)" />
    <button (click)="changeSuitColor()">Change the color</button>
    <hr/>
    <app-customers [outer-color]="favoriteColor"></app-customers>
    `
})
export class DashboardComponent implements OnInit {
    @Input('user-name') userName: string;
    @Input('favorite-color') favoriteColor: string;
    @Output() userUpdated = new EventEmitter<string>();
    @Output() colorUpdated = new EventEmitter<string>();

    changeSuitColor(newColor: string) {
        let color = this.favoriteColor === 'blue' ? 'red' : 'blue'
        this.colorUpdated.emit(color);
    }

    changeUserName(newName: string) {
        this.userUpdated.emit(newName);
    }

    constructor() { }

    ngOnInit() { }

}