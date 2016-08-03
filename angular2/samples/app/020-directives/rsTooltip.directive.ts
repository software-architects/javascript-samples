import { Component, Directive, HostListener, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import Overlay from './overlay';

// The following class is inspired by the following book:
// Gechev, Minko. Switching to Angular 2. Packt Publishing.
// It is a great book and I can really recommand buying it.

@Directive({
    selector: '[rsTooltip]'
})
export class Tooltip {
    // For details see https://angular.io/docs/ts/latest/api/core/index/Input-var.html
    @Input()
    rsTooltip: string;

    constructor(private el: ElementRef, private overlay: Overlay) {
        // el is an Angular wrapper (for details see 
        // https://angular.io/docs/ts/latest/api/core/index/ElementRef-class.html)
        this.overlay.attach(el.nativeElement);
    }

    // Note that we use the HostListener decorator to add event handlers.
    // See https://angular.io/docs/ts/latest/api/core/index/HostListener-var.html
    // for details.

    @HostListener('mouseenter')
    onMouseEnter() {
        this.overlay.open(this.el, this.rsTooltip);
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.overlay.close();
    }
}

// The following component uses the rsTooltip. Note the use of providers
// and directives.
@Component({
    selector: 'tooltip-sample',
    template: `<h2>Tooltip Sample</h2>
        <button class="btn" rsTooltip="This is a test">Test</button>`,
    providers: [Overlay],
    directives: [Tooltip]
})
export class TooltipComponent {
}