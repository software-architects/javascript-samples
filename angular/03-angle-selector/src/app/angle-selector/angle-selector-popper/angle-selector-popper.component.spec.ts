import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngleSelectorPopperComponent } from './angle-selector-popper.component';
import { NgxPopperModule } from 'ngx-popper';

describe('AngleSelectorPopperComponent', () => {
  let component: AngleSelectorPopperComponent;
  let fixture: ComponentFixture<AngleSelectorPopperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngleSelectorPopperComponent ],
      imports: [ NgxPopperModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngleSelectorPopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
