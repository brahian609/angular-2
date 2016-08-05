import { Injectable } from '@angular/core';
import { TodoModel } from './todo-model'

@Injectable()
export class TodoService {
    todos = [
        new TodoModel("brahian"),
        new TodoModel("steveen"),
        new TodoModel("giraldo")
    ];
}