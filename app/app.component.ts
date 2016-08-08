import { Component } from '@angular/core';
import { TodoInput } from "./todo-input";
import { TodoList } from "./todo-list";
import { StatusSelector } from "./status-selector";

@Component({
    selector: 'my-app',
    directives: [TodoInput, TodoList, StatusSelector],
    template: `<h1>Angular 2</h1>
    <div>
    <todo-input></todo-input>
    <status-selector (select)="status = $event"></status-selector>
    <todo-list [status]="status"></todo-list>
    </div>`
})

export class AppComponent { }
