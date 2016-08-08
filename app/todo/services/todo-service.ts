import { Injectable } from '@angular/core';
import { TodoModel } from './todo-model'

@Injectable()
export class TodoService {
    todos = [
        new TodoModel("comer"),
        new TodoModel("bailar"),
        new TodoModel("pagar", "completed"),
        new TodoModel("ejercicio"),
        new TodoModel("ropa"),
        new TodoModel("baño", "completed"),
        new TodoModel("cobrar")
    ];

    addTodo(todo:TodoModel){
        this.todos = [...this.todos, todo];
    }

    toggleTodo(todo:TodoModel){
        todo.toggle();

        const i = this.todos.indexOf(todo);

        /*immutable array is required for angular 2*/
        this.todos = [
            ...this.todos.slice(0, i),
            todo,
            ...this.todos.slice(i + 1)
        ];

    }
}