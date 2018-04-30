import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateRevenue } from './customer-form.component';

@Component({
    selector: 'app-customer-rx-form',
    templateUrl: './customer-rx-form.html'
})
export class CustomerRxFormComponent implements OnInit {
    public customerForm: FormGroup;
    public customerTypes = ['Unknown', 'Business', 'Commercial'];

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.customerForm = this.formBuilder.group({
            firstName: ['John'],
            lastName: ['Doe', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
            revenue: ['1000', [Validators.required, validateRevenue()]],
            isActive: [true],
            customerType: [this.customerTypes[0]]
        });
    }

    public save() {
        console.log(this.customerForm.value);
    }
}
