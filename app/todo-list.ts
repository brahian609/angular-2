import { Component } from '@angular/core';
import { TodoService } from './todo-service';
import { TodoItemRenderer } from './todo-item-renderer';
import { StartedPipe } from './started-pipe';

@Component({
    selector: 'todo-list',
    pipes: [StartedPipe],
    directives: [TodoItemRenderer],
    template: `<div>
        <ul>
            <li *ngFor="let todo of todoService.todos | started">
                <todo-item-renderer
                [todo]="todo"
                (toggle)="todoService.toggleTodo($event)"
                ></todo-item-renderer>
            </li>
        </ul>
    </div>`
})

export class TodoList {

    constructor(public todoService:TodoService) {

    }

}