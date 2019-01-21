import { SpeedupAngleChangerDirective } from './speedup-angle-changer.directive';
import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { take } from 'rxjs/operators';

@Component({
  template: `<button appSpeedupAngleChanger></button>`
})
class TestComponent { }

describe('SpeedupChangerDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let de: DebugElement;
  let speedup: SpeedupAngleChangerDirective;
  let button: HTMLButtonElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ SpeedupAngleChangerDirective, TestComponent ]
    })
    .createComponent(TestComponent);

    fixture.detectChanges();

    de = fixture.debugElement.query(By.directive(SpeedupAngleChangerDirective));
    speedup = de.injector.get(SpeedupAngleChangerDirective);
    button = fixture.debugElement.query(By.css('button')).nativeElement;
  });

  beforeEach(() => {
    try {
      jasmine.clock().uninstall();
    } catch {
      // Ignore errors when uninstalling
    }
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should create an instance', () => {
    expect(de).toBeTruthy();
  });

  it('increases value over time', () => {
    speedup.value = 0;
    button.dispatchEvent(new PointerEvent('pointerdown', { pointerId: 1 }));
    jasmine.clock().tick(2010);
    expect(speedup.value).toBe(4);
    jasmine.clock().tick(2010);
    expect(speedup.value).toBe(12);
    button.dispatchEvent(new PointerEvent('pointerup', { pointerId: 1 }));
    jasmine.clock().tick(2010);
    expect(speedup.value).toBe(12);
  });

  it('raises event when value changes', () => {
    speedup.value = 0;
    const handler = jasmine.createSpy('handler');
    speedup.valueChange.pipe(take(1)).subscribe(handler);
    button.dispatchEvent(new PointerEvent('pointerdown', { pointerId: 1 }));
    jasmine.clock().tick(510);
    expect(handler).toHaveBeenCalled();
    button.dispatchEvent(new PointerEvent('pointerup', { pointerId: 1 }));
  });
});
