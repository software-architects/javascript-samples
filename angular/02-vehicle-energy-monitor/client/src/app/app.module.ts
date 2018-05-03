import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { UpgradeModule } from '@angular/upgrade/static';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarMakeListComponent } from './car-make-list/car-make-list.component';
import { LoremIpsumService } from './lorem-ipsum.service';
import { LoremIpsumComponent } from './lorem-ipsum/lorem-ipsum.component';
import { UrlBuilderServiceProvider } from './url-builder-service/url-builder.upgraded-service';
import { CarModelDetailsComponent } from './car-model-details/car-model-details.component';

@NgModule({
  declarations: [AppComponent, LoremIpsumComponent, CarMakeListComponent, CarModelDetailsComponent],
  imports: [
    BrowserModule, AppRoutingModule,
    ServiceWorkerModule.register(
        '/ngsw-worker.js', {enabled: environment.production}),
    HttpClientModule, ReactiveFormsModule, FlexLayoutModule, MatToolbarModule,
    MatSidenavModule, MatButtonModule, MatIconModule, MatFormFieldModule,
    MatAutocompleteModule, MatInputModule, MatCardModule,
    BrowserAnimationsModule, UpgradeModule
  ],
  providers: [LoremIpsumService, UrlBuilderServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {
    // Note that this is not exactly as described in the documentation
    // at https://angular.io/guide/upgrade. However, if you need an AngularJS
    // service during bootstrapping the Angular app, this is a valid workaround.
    // For details see discussion in the following GitHub issue:
    // https://github.com/angular/angular/issues/14993
    upgrade.bootstrap(document.body, ['vehicle-monitor'], {strictDi: true});
  }
}
