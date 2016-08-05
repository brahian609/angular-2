import { Component } from '@angular/core';

@Component({
    selector: 'todo-input',
    template: `<div>
    <input type="text" #myInput>
    <button (click)="onClick(myInput.value)">Click me</button>
    </div>`
})

export class TodoInput {
    onClick(value) {
        console.log(value);
    }
}