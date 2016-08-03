import { Component } from '@angular/core';

@Component({
    selector: 'template-demo',
    template: `
        <h2>Template Demo</h2>
        <p>
            This demo introduces things you can do in templates. For details see 
            <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html" target="_blank">Angular documentation</a>.
        </p>
        <ul>
            <li>Interpolation: {{ isAngularCool }}</li>
            <li>One way (component to view): <button [disabled]="angularIsCool" class="btn">Add scope</button></li>
            <li>
                One way to directive property: 
                <div [ngClass]="{'bg-primary': angularIsCool}" style="padding: 5px;">Angular is cool</div>
            </li>
            <li>Event binding: <button (click)="sayIt()" class="btn">Say it</button></li>
            <li>
                Two-way binding:
                <div class="input-group">
                    <input type="text" class="form-control" [(ngModel)]="message" />
                    <div class="input-group-addon">{{ message }}</div>
                </div>
            </li>
            <li>Class: <span [class.text-danger]="angularIsCool">Angular Rulez</span></li>
            <li>Style: <span [style.color]="angularIsCool ? 'blue' : 'red'">Angular forever</span></li>
            <li>
                Reference variables:
                <div class="input-group">
                    <input type="text" class="form-control" #messageField value="I think, Angular is cool" >
                    <div class="input-group-addon" (click)="sayIt(messageField.value)">Say it</div>
                </div>
            </li>
        </ul>
    `
})
export class TemplateDemoComponent {
    public angularIsCool = true;
    public isAngularCool = 'Yes, Angular is cool!';

    public message = "Angular is pretty cool!";

    public sayIt(message?: string) {
        alert(message || "Angular is cool!");
    }
}