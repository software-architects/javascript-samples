import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import { AngleSelectorPointerComponent } from './angle-selector-pointer.component';
import { DebugElement } from '@angular/core';

describe('AngleSelectorPointerComponent', () => {
  let component: AngleSelectorPointerComponent;
  let fixture: ComponentFixture<AngleSelectorPointerComponent>;
  let de: DebugElement;
  let dragHandleNativeElement: SVGElement;
  let centerNativeElement: SVGElement;
  const center = { x: 0, y: 0};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngleSelectorPointerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngleSelectorPointerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;

    dragHandleNativeElement = <SVGElement>de.nativeElement.querySelector('#drag-handle');
    centerNativeElement = <SVGElement>de.nativeElement.querySelector('#center');
    const centerBounding = centerNativeElement.getBoundingClientRect();
    center.x = centerBounding.left + centerBounding.width / 2;
    center.y = centerBounding.top + centerBounding.height / 2;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('changes angle on mouse move', () => {
    component.angle = 0;
    dragHandleNativeElement.dispatchEvent(new PointerEvent('pointerdown', { pointerId: 1 }));
    de.nativeElement.dispatchEvent(new PointerEvent('pointermove', { clientX: center.x + 10, clientY: center.y }));
    de.nativeElement.dispatchEvent(new PointerEvent('pointerup', { pointerId: 1 }));

    expect(component.angle).toBe(90);
  });
});
