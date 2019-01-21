import { Directive, Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { Subscription, interval, concat } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  template: `
    <div fxLayout="column">
      <div fxLayout="row">
        <mat-form-field class="example-full-width">
          <input matInput type="number" placeholder="Angle" value="90" [(ngModel)]="angle"
            max="180" min="-180">
        </mat-form-field>
        <button appSpeedupAngleChanger [(appSpeedupValue)]="angle" [appSpeedupDirection]="1" mat-mini-fab>
          <mat-icon>arrow_upward</mat-icon>
        </button>
        <button appSpeedupAngleChanger [(appSpeedupValue)]="angle" [appSpeedupDirection]="-1" mat-mini-fab>
          <mat-icon>arrow_downward</mat-icon>
        </button>
      </div>
      <app-angle-selector-pointer [(angle)]="angle"></app-angle-selector-pointer>
    </div>`,
    styles: ['button { margin-left: 5px; }']
})
export class SpeedupAngleChangerHostDirective {
  angle = 90;
}

@Directive({
  selector: '[appSpeedupAngleChanger]'
})
export class SpeedupAngleChangerDirective {

  private timerSubscription: Subscription;

  constructor(private host: ElementRef) { }

  // tslint:disable-next-line:no-input-rename
  @Input('appSpeedupValue') value = 0;

  // tslint:disable-next-line:no-output-rename
  @Output('appSpeedupValueChange') valueChange = new EventEmitter<number>();

  // tslint:disable-next-line:no-input-rename
  @Input('appSpeedupDirection') direction = 1;

  @HostListener('pointerdown', ['$event'])
  protected pointerdown(event: PointerEvent) {
    (<HTMLElement>this.host.nativeElement).setPointerCapture(event.pointerId);

    this.timerSubscription = concat(
      interval(500).pipe(take(4)),
      interval(250).pipe(take(8)),
      interval(125).pipe(take(16)),
      interval(50)).subscribe(() => {
        this.value += this.direction;
        if (this.value > 180) {
          this.value -= 360;
        } else if (this.value < -180) {
          this.value += 360;
        }

        this.valueChange.emit(this.value);
      });
  }

  @HostListener('pointerup', ['$event'])
  protected pointerup(event: PointerEvent) {
    if (this.timerSubscription) {
      (<HTMLElement>this.host.nativeElement).releasePointerCapture(event.pointerId);
      this.timerSubscription.unsubscribe();
    }
  }
}
