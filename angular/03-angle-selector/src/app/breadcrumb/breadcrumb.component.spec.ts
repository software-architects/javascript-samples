import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponent } from './breadcrumb.component';
import { NavigationEnd, Router, ActivatedRoute, RouterEvent } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

class MockRouter {
  public events = new ReplaySubject<RouterEvent>();
}

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;
  let router: MockRouter;

  const dummyActiveRoute = {
    root: {
      firstChild: {
        routeConfig: {
          data: { breadcrumb: 'Dummy' },
          path: 'dummy'
        }
      }
    }
  };

  beforeEach(async(() => {
    router = new MockRouter();

    TestBed.configureTestingModule({
      imports: [],
      declarations: [ BreadcrumbComponent ],
      providers: [
        { provide: Router, useValue: router },
        { provide: ActivatedRoute, useValue: dummyActiveRoute }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise event in case of router event', () => {
    const subscription = component.breadcrumbs.subscribe(bc => {
      expect(bc.length).toBe(2);
      expect(bc[0]).toEqual({ label: 'Home', url: '/' });
      expect(bc[1]).toEqual({ label: 'Dummy', url: '/dummy/' });
    });

    router.events.next(new NavigationEnd(1, `/dummy`, ''));
    subscription.unsubscribe();
  });
});
