import { Component, Input, Pipe, PipeTransform } from '@angular/core';

@Component({
  template: `
    <div fxLayout="column">
      <mat-form-field class="example-full-width">
        <input matInput type="number" placeholder="Angle" value="90" [(ngModel)]="angle">
      </mat-form-field>
      <app-angle-selector-basic [angle]="angle"></app-angle-selector-basic>
    </div>`
})
export class AngleSelectorBasicHostComponent {
  angle = 90;
}

// We could use a pipe in the template to turn angles into SVG translations
@Pipe({name: 'rotate'})
export class RotatePipe implements PipeTransform {
  transform(angle: number): string {
    return `rotate(${angle})`;
  }
}

@Component({
  selector: 'app-angle-selector-basic',
  templateUrl: './angle-selector-basic.component.html',
  styleUrls: ['./angle-selector-basic.component.scss']
})
export class AngleSelectorBasicComponent {
  get clockwise() {
    return this.angle >= 0;
  }

  get arrowPositionX(): number {
    return 60 + Math.cos((this.angle - 90) * Math.PI / 180) * 47;
  }

  get arrowPositionY(): number {
    return 60 + Math.sin((this.angle - 90) * Math.PI / 180) * 47;
  }

  private angleValue = 0;

  @Input()
  set angle(angle: number) {
    if (angle < -180 || angle > 180) {
      throw new Error('Invalid angle');
    }

    this.angleValue = angle;
  }

  get angle() { return this.angleValue; }

  constructor() {
  }
}
