import { Pipe } from '@angular/core';

@Pipe({
    name: "search"
})
export class SearchPipe{
    transform(value, term:string){
        return value.filter((item) => item.title.startsWith(term));
    }
}