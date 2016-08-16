import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
    selector: 'clock',
    template: `<div>
        <h1>{{clock | async | date: 'medium'}}</h1>
    </div>`
})

export class Clock {

    clock = Observable
        .interval(1000)
        .map(() => new Date());

}