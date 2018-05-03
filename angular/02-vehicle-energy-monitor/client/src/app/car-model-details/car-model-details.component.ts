import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-car-model-details',
  templateUrl: './car-model-details.component.html',
  styleUrls: ['./car-model-details.component.css']
})
export class CarModelDetailsComponent implements OnInit {
  public detailsForm: FormGroup;

  private validateSomething(): ValidatorFn {
    return (control: any): {[key: string]: any} => {
      console.dir(control);
      // Revenue has to be > 100 or empty.
      if (!control.value || parseFloat(control.value) > 100) {
        // Note that null means "no error"
        return null;
      } else {
        return {'invalidRevenue': true};
      }
    };
  }

  constructor(private fb: FormBuilder) {
    this.detailsForm = fb.group({
      make: fb.control({value: '', disabled: true}),
      model: fb.control({value: '', disabled: true}),
      year: fb.control({value: '', disabled: true}),
      engine: fb.control('', [Validators.maxLength(250), Validators.required]),
      doors: fb.control(
          2, [Validators.min(2), Validators.max(5), Validators.required]),
      maxPower_HP: fb.control(0, [Validators.min(1), Validators.max(2000), Validators.required]),
      maxSpeed_KM_h: fb.control(0, [Validators.min(1), Validators.max(500), Validators.required]),
      acceleration0to100KMh_s: fb.control(0, [Validators.min(1), Validators.max(200), Validators.required]),
      fuelTankVolume_L: fb.control(0, [Validators.min(1), Validators.max(1000)]),
      maxTorque_Nm: fb.control(0, [Validators.min(1), Validators.max(10000), Validators.required]),
      cylinders: fb.control(0, [Validators.min(1), Validators.max(12)]),
      fuelType: fb.control(1, [Validators.required]),
      co2emissionMax_g_km: fb.control(0, [Validators.min(1), Validators.max(1000)]),
    }, {
      validator: this.validateSomething
    });
  }

  ngOnInit() {}
}
