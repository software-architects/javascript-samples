import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngleSelectorBasicComponent } from './angle-selector-basic.component';

describe('AngleSelectorBasicComponent', () => {
  let component: AngleSelectorBasicComponent;
  let fixture: ComponentFixture<AngleSelectorBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngleSelectorBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngleSelectorBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should throw error for invalid angles', () => {
    expect(() => component.angle = -181).toThrowError();
    expect(() => component.angle = 181).toThrowError();
  });

  it('calculates arc correctly', () => {
    const angles = [
      { angle: 0, clockwise: true, x: 60, y: 13 },
      { angle: 90, clockwise: true, x: 107, y: 60 },
      { angle: 180, clockwise: true, x: 60, y: 107 },
      { angle: -90, clockwise: false, x: 13, y: 60 }
    ];

    for (const item of angles) {
      component.angle = item.angle;
      expect(component.clockwise).toBe(item.clockwise);
      expect(component.arrowPositionX).toBeCloseTo(item.x);
      expect(component.arrowPositionY).toBeCloseTo(item.y);
    }
  });
});
