import { Component } from '@angular/core';
import { HelloWorldComponent } from './010-basics/hello-world.component';

// Note that Angular's router is not part of Angular core as not all applications need routing. 
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES, HelloWorldComponent]
})
export class AppComponent { }
