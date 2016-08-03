import { Component } from '@angular/core';

@Component({
    selector: 'ng-for-sample',
    template: `
        <h2>Demo for <i>NgIf</i></h2>
        <p>
            See <a href="https://angular.io/docs/ts/latest/api/common/index/NgIf-directive.html" target="_blank">Angular reference</a> for details.
        </p>
        <form>
            <div class="checkbox">
                <label>
                    <!--
                        Note that we assign the checkbox the name details. Additionally, we set
                        dummy event handler for keyboard and mouse. This is necessary because
                        Angular does only update the bindings if we do something in response
                        to an async event.
                        -->
                    <input #details type="checkbox" (keyup)="0" (click)="0"> Show details
                </label>
            </div>
            <!-- Note use of NgIf -->
            <p class="bg-primary" *ngIf="details.checked" style="padding: 10px;">
                Hey, Luke! May the Force be with you. I care. So, what do you think of her, Han? You're all clear, kid. Let's blow this thing and go home! I call it luck. What good is a reward if you ain't around to use it? Besides, attacking that battle station ain't my idea of courage. It's more like…suicide.
            </p>
        </form>`
})
export class NgIfComponent {
}