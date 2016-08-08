import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { TodoService } from './todo/services/todo-service';

bootstrap(AppComponent, [TodoService]);
