import { Component } from '@angular/core';
import { TodoInput } from "./todo-input";
import { TodoList } from "./todo-list";

@Component({
    selector: 'my-app',
    directives: [TodoInput, TodoList],
    template: `<h1>Angular 2</h1>
    <div>
    <todo-input></todo-input>
    <todo-list></todo-list>
    </div>`
})

export class AppComponent { }
