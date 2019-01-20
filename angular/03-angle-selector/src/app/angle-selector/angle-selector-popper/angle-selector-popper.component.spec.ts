import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngleSelectorPopperComponent } from './angle-selector-popper.component';
import { NgxPopperModule, PopperController, PopperContent } from 'ngx-popper';
import { FlexModule } from '@angular/flex-layout';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AngleSelectorPointerComponent } from '../angle-selector-pointer/angle-selector-pointer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AngleSelectorPopperComponent', () => {
  let component: AngleSelectorPopperComponent;
  let fixture: ComponentFixture<AngleSelectorPopperComponent>;
  let popper: PopperContent;
  let inputNe: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngleSelectorPointerComponent, AngleSelectorPopperComponent ],
      imports: [ NgxPopperModule, FlexModule, MatInputModule, MatFormFieldModule, FormsModule, NoopAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngleSelectorPopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const de = fixture.debugElement;
    const popperDe = de.query(By.directive(PopperContent));
    popper = popperDe.injector.get(PopperContent);
    inputNe = de.query(By.css('input')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open popup if input gets focus', () => {
    popper.show = jasmine.createSpy('show');
    inputNe.dispatchEvent(new FocusEvent('focus', {}));
    expect(<jasmine.Spy>popper.show).toHaveBeenCalled();
  });
});
