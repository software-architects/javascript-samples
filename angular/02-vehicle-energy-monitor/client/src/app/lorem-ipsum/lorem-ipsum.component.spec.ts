import {Component, SimpleChange} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoremIpsumService} from '../lorem-ipsum.service';

import {LoremIpsumComponent} from './lorem-ipsum.component';

describe('LoremIpsumComponent', () => {

  // These tests test the component class on its own
  // Read more at https://angular.io/guide/testing#component-class-testing
  describe('basic logic', () => {
    it('should create', () => {
      expect(new LoremIpsumComponent(new LoremIpsumService())).toBeTruthy();
    });

    it('should initialize Count with default value', () => {
      expect(new LoremIpsumComponent(new LoremIpsumService()).Count).toBe(5);
    });

    it('should contain lorem ipsum text after initialization', () => {
      const component = new LoremIpsumComponent(new LoremIpsumService());
      component.ngOnInit();
      expect(component.loremIpsumContent).toBeTruthy();
    });
  });

  // These tests test the component class with spies
  // Read more at https://jasmine.github.io/2.0/introduction.html#section-Spies
  describe('basic logic with spies', () => {
    it('should create and initialize with default value', () => {
      // Create spy object
      const serviceMock: {generate: jasmine.Spy} =
          jasmine.createSpyObj('LoremIpsumService', ['generate']);

      // Make spy object return something (not necessary here, for demo purposes
      // only)
      serviceMock.generate.and.returnValue('<p>dummy</p>');

      const component = new LoremIpsumComponent(serviceMock);
      component.ngOnInit();

      expect(component).toBeTruthy();

      // Verify that service has been called with correct parameters
      expect(serviceMock.generate.calls.count()).toEqual(1);
      expect(serviceMock.generate.calls.argsFor(0)).toEqual([5]);
    });
  });

  // These tests test the component class with its UI
  // Read more at https://angular.io/guide/testing#component-dom-testing
  describe('UI', () => {
    let component: LoremIpsumComponent;
    let fixture: ComponentFixture<LoremIpsumComponent>;
    let compiled: HTMLElement;
    const initialNumberOfParagraphs = 3;

    beforeEach(async(() => {
      // Configure module and compile components for testing
      // Read more about the TestBed at
      // https://angular.io/guide/testing#testing-utility-apis
      TestBed
          .configureTestingModule({
            declarations: [LoremIpsumComponent],
            providers: [LoremIpsumService]
          })
          .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(LoremIpsumComponent);
      component = fixture.componentInstance;
      compiled = fixture.debugElement.nativeElement;

      // Initialize number of paragraphs
      component.Count = initialNumberOfParagraphs;
      fixture.detectChanges();
    });

    it('should display lorem ipsum text', () => {
      // Read more about querySelectorAll on MDN
      // at
      // https://developer.mozilla.org/de/docs/Web/API/Element/querySelectorAll
      expect(compiled.querySelectorAll('div p').length)
          .toBe(initialNumberOfParagraphs);
    });

    it('should refresh lorem ipsum text when count changes', () => {
      // Change number of paragraphs
      component.Count = 5;

      // Note that we have to manually call ngOnChanges
      component.ngOnChanges(
          {Count: new SimpleChange(component.Count, 5, false)});
      fixture.detectChanges();

      expect(compiled.querySelectorAll('div p').length).toBe(5);
    });
  });

  // These tests test the component class with its UI and data binding
  describe('Binding with test host', () => {
    // Create a dummy test host that uses the component we want to test.
    // Note the data binding to property Count
    @Component(
        {template: '<app-lorem-ipsum [Count]="Count"></app-lorem-ipsum>'})
    class TestHostComponent {
      Count: number;
    }

    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;
    const initialNumberOfParagraphs = 3;

    beforeEach(async(() => {
      TestBed
          .configureTestingModule({
            declarations: [LoremIpsumComponent, TestHostComponent],
            providers: [LoremIpsumService]
          })
          .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(TestHostComponent);
      component = fixture.componentInstance;
      compiled = fixture.debugElement.nativeElement;

      // Initialize number of paragraphs. Note that we change the number
      // of paragraphs on the parent component.
      component.Count = 3;
      fixture.detectChanges();
    });

    it('should display lorem ipsum text', () => {
      expect(compiled.querySelectorAll('app-lorem-ipsum div p').length)
          .toBe(initialNumberOfParagraphs);
    });

    it('should refresh lorem ipsum text when count changes', async(() => {
         // Change number of paragraphs. Note that we change the number
         // of paragraphs on the parent component.
         component.Count = 5;
         fixture.detectChanges();

         expect(compiled.querySelectorAll('app-lorem-ipsum div p').length)
             .toBe(5);
       }));
  });
});
