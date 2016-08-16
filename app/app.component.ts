import { Component } from '@angular/core';
import { TodoInput } from "./todo/components/todo-input";
import { TodoList } from "./todo/components/todo-list";
import { StatusSelector } from "./todo/components/status-selector";
import { SearchBox } from "./search/components/search-box";
import { Clock } from './clock/components/clock';

@Component({
    selector: 'my-app',
    directives: [TodoInput, TodoList, StatusSelector, SearchBox, Clock],
    template: `<h1>Angular 2</h1>
    <div>
    <clock></clock>
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
