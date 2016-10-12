import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
    selector: 'app-input-output',
    template: `
        <div class="bg-primary" style="padding: 10px;">
            This is our input/output-demo with content set to {{ content }}.
        </div>
        <button type="button" class="btn" (click)="emitEvent()">Click here to fire event</button>
    `
})
export class InputOutputComponent implements OnInit {
    private eventCounter = 0;

    @Input() public content = 'Demo';
    @Output() public firedEvent = new EventEmitter();

    ngOnInit() {
        console.log(`Content has currently the value ${this.content}`);
    }

    emitEvent() {
        this.firedEvent.next([this.content, ++this.eventCounter]);
    }
}


@Component({
    selector: 'app-inout-user',
    template: `
        <h2>Input/Output Demo</h2>
        <div>
            <app-input-output [content]="myName" (firedEvent)="onEvent($event)"></app-input-output>
        </div>
    `
})
export class InOutUserComponent {
    public myName = 'Rainer';

    onEvent(parameter: any) {
        alert(`Received ${JSON.stringify(parameter)}`);
    }
}
