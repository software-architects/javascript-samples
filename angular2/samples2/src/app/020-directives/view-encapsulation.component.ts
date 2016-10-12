import { Component, ViewEncapsulation } from '@angular/core';

// For details about different view encapsulations see
// https://angular.io/docs/ts/latest/api/core/index/ViewEncapsulation-enum.html

@Component({
    selector: 'app-styled-component-1',
    template: `<div class="myStyle"></div>`,
    styles: [`div.myStyle { width: 100px; height: 100px; background-color: Red; float: left; }`],
    encapsulation: ViewEncapsulation.Native
})
export class Styled1Component {
}

@Component({
    selector: 'app-styled-component-2',
    template: `<div class="myStyle"></div>`,
    styles: [`div.myStyle { width: 100px; height: 100px; background-color: Green; float: left; }`],
    encapsulation: ViewEncapsulation.Native
})
export class Styled2Component {
}

@Component({
    selector: 'app-styled-components',
    template: `<app-styled-component-1></app-styled-component-1><app-styled-component-2></app-styled-component-2>`
})
export class StyledComponent {
}

