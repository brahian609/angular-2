import { Component } from '@angular/core';
import { TodoService } from './../services/todo-service';
import { TodoModel } from './../services/todo-model';

@Component({
    selector: 'todo-input',
    template: `<div>
    <form (submit)="onSubmit()">
        <input type="text" [(ngModel)]="todoModel.title">
    </form>
    </div>`
})

export class TodoInput {
    todoModel:TodoModel = new TodoModel();

    constructor(public todoService:TodoService) {

    }

    onSubmit() {
        this.todoService.addTodo(this.todoModel);
        console.log(this.todoService.todos);
        this.todoModel = new TodoModel();
    }
}