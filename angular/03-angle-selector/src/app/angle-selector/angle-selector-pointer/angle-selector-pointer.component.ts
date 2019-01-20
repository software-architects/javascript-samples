import { Component, OnInit, Input, ViewChild, ElementRef, HostListener, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  template: `
    <div fxLayout="column">
      <mat-form-field class="example-full-width">
        <input matInput type="number" placeholder="Angle" value="90" [(ngModel)]="angle"
          max="180" min="-180">
      </mat-form-field>
      <app-angle-selector-pointer [(angle)]="angle"></app-angle-selector-pointer>
    </div>`
})
export class AngleSelectorPointerHostComponent {
  angle = 90;
}

@Component({
  selector: 'app-angle-selector-pointer',
  templateUrl: './angle-selector-pointer.component.html',
  styleUrls: ['./angle-selector-pointer.component.scss']
})
export class AngleSelectorPointerComponent {
  private isDragging = false;

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

    if (angle !== this.angleValue) {
      this.angleValue = angle;
      this.angleChange.next(angle);
    }
  }

  get angle() { return this.angleValue; }

  @Output() angleChange = new EventEmitter<number>();

  @ViewChild('dragHandle') protected dragHandle: ElementRef;
  private get dragHandleNativeElement() { return <SVGElement>this.dragHandle.nativeElement; }
  @ViewChild('center') protected center: ElementRef;
  private get centerNativeElement() { return <SVGElement>this.center.nativeElement; }

  private centerCoord = { x: 0, y: 0 };

  constructor() {
  }

  public startDrag(event: PointerEvent): void {
    this.isDragging = true;
    const centerClientRect = this.centerNativeElement.getBoundingClientRect();
    this.centerCoord.x = centerClientRect.left + centerClientRect.width / 2;
    this.centerCoord.y = centerClientRect.top + centerClientRect.height / 2;
    this.dragHandleNativeElement.setPointerCapture(event.pointerId);
  }

  @HostListener('pointermove', ['$event'])
  private drag(event: PointerEvent): void {
    if (this.isDragging) {
      const deltaX = event.clientX - this.centerCoord.x;
      const deltaY = event.clientY - this.centerCoord.y;

      let newAngle = Math.round((Math.atan(deltaY / deltaX) * 180 / Math.PI + 90) / 15) * 15;
      if (newAngle !== this.angle) {
        if (deltaX < 0) {
          newAngle = -180 + newAngle;
        }

        this.angle = newAngle;
      }
    }
  }

  @HostListener('pointerup', ['$event'])
  private endDrag(event?: PointerEvent): void {
    if (this.isDragging) {
      if (event) {
        this.dragHandleNativeElement.releasePointerCapture(event.pointerId);
      }

      this.isDragging = false;
    }
  }
}
