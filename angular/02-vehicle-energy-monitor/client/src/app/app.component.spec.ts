import {async, TestBed} from '@angular/core/testing';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';

import {AppComponent} from './app.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    // Configure module and compile components for testing
    // Read more about the TestBed at https://angular.io/guide/testing#testing-utility-apis
    TestBed
        .configureTestingModule({
          imports: [
            RouterTestingModule, FlexLayoutModule, MatToolbarModule,
            MatSidenavModule, MatButtonModule, MatIconModule,
            BrowserAnimationsModule
          ],
          declarations: [AppComponent],
        })
        .compileComponents();
  }));

  it('should create the app', async(() => {
       const fixture = TestBed.createComponent(AppComponent);
       const app = fixture.debugElement.componentInstance;
       expect(app).toBeTruthy();
     }));

  it('should create a toolbar', async(() => {
       const fixture = TestBed.createComponent(AppComponent);
       fixture.detectChanges();
       const compiled = fixture.debugElement.nativeElement;
       expect(compiled.querySelector('mat-toolbar').textContent).toBeTruthy();
     }));

  it('should create a side navigation bar', async(() => {
       const fixture = TestBed.createComponent(AppComponent);
       fixture.detectChanges();
       const compiled = fixture.debugElement.nativeElement;
       expect(compiled.querySelector('mat-sidenav-container').textContent)
           .toBeTruthy();
     }));
});
