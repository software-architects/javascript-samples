import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarMakeListComponent } from './car-make-list.component';

describe('CarMakeListComponent', () => {
  let component: CarMakeListComponent;
  let fixture: ComponentFixture<CarMakeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarMakeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarMakeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
