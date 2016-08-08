import { Pipe } from '@angular/core';

@Pipe({
    name: "started"
})
export class StartedPipe{
    transform(value, status:string){
        return value.filter((item) => item.status === status);
    }
}