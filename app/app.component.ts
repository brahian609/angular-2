import { Component } from '@angular/core';
import { TodoInput } from "./todo-input";

@Component({
    selector: 'my-app',
    directives: [TodoInput],
    template: `
            <h1>Angular 2</h1>
            <div><todo-input></todo-input></div>
        `
})

export class AppComponent { }
