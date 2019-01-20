import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngleSelectorPointerComponent } from './angle-selector-pointer.component';
import { DebugElement } from '@angular/core';

describe('AngleSelectorPointerComponent', () => {
  let component: AngleSelectorPointerComponent;
  let fixture: ComponentFixture<AngleSelectorPointerComponent>;
  let ne: SVGElement;
  let dragHandleNe: SVGElement;
  let centerNe: SVGElement;
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
    ne = fixture.debugElement.nativeElement;

    dragHandleNe = ne.querySelector('#drag-handle');
    centerNe = ne.querySelector('#center');
    const centerBounding = centerNe.getBoundingClientRect();
    center.x = centerBounding.left + centerBounding.width / 2;
    center.y = centerBounding.top + centerBounding.height / 2;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('changes angle on mouse move', () => {
    component.angle = 0;
    dragHandleNe.dispatchEvent(new PointerEvent('pointerdown', { pointerId: 1 }));
    ne.dispatchEvent(new PointerEvent('pointermove', { clientX: center.x + 10, clientY: center.y }));
    ne.dispatchEvent(new PointerEvent('pointerup', { pointerId: 1 }));

    expect(component.angle).toBe(90);
  });
});
