import { Component, ViewEncapsulation } from '@angular/core';

// For details about different view encapsulations see
// https://angular.io/docs/ts/latest/api/core/index/ViewEncapsulation-enum.html

@Component({
    selector: 'styled-component-1',
    template: `<div class="myStyle"></div>`,
    styles: [`div.myStyle { width: 100px; height: 100px; background-color: Red; float: left; }`],
    encapsulation: ViewEncapsulation.Native
})
export class StyledComponent1 {
}

@Component({
    selector: 'styled-component-2',
    template: `<div class="myStyle"></div>`,
    styles: [`div.myStyle { width: 100px; height: 100px; background-color: Green; float: left; }`],
    encapsulation: ViewEncapsulation.Native
})
export class StyledComponent2 {
}

@Component({
    selector: 'styled-components',
    template: `<styled-component-1></styled-component-1><styled-component-2></styled-component-2>`
})
export class StyledComponents {
}

