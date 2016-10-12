import { Component, Injectable, Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

@Injectable()
export class Customer {
    constructor(
        public firstName: string,
        public lastName: string,
        public isActive = true,
        public type = 'Business',
        public revenue = 0) { }
}

// Custom validation directives
function validateRevenue(revenueControl: FormControl) {
    // Revenue has to be > 100 or empty. 
    if (!revenueControl.value || parseFloat(revenueControl.value) > 100) {

        // Note that null means "no error" 
        return null;
    } else {
        return { 'invalidRevenue': true };
    }
}

// This custom directive demonstrates the use a a custom validator
@Directive({
    selector: '[appRevenueInput]',
    providers: [{ provide: NG_VALIDATORS, useExisting: validateRevenue, multi: true }]
})
export class RevenueValidatorDirective { }

@Component({
    selector: 'app-customer-form',
    templateUrl: 'customer-form.html'
})
export class CustomerFormComponent {
    public customer: Customer;
    public customerTypes = ['Unknown', 'Business', 'Commercial'];

    constructor() {
        this.customer = new Customer('John', 'Doe');
    }

    public save() {
        console.log(JSON.stringify(this.customer));
    }
}
