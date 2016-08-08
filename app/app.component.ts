import { Component } from '@angular/core';
import { TodoInput } from "./todo-input";
import { TodoList } from "./todo-list";
import { StatusSelector } from "./status-selector";
import { SearchBox } from "./search-box";

@Component({
    selector: 'my-app',
    directives: [TodoInput, TodoList, StatusSelector, SearchBox],
    template: `<h1>Angular 2</h1>
    <div>
    <search-box (update)="term = $event"></search-box>
    <todo-input></todo-input>
    <status-selector (select)="status = $event"></status-selector>
    <todo-list
        [status]="status"
        [term]="term"
    >
    </todo-list>
    </div>`
})

export class AppComponent { }
