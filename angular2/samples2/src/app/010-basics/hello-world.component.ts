import { Component } from '@angular/core';

// This is a very simple component to demonstrate the basics. Note how
// the template uses interpolation to show a component property. For
// details see https://angular.io/docs/ts/latest/guide/displaying-data.html#!#interpolation

@Component({
    selector: 'hello-world',
    template: '<h2>Hello {{title}}!</h2>'
})
export class HelloWorldComponent {
    public title = "World";
}
