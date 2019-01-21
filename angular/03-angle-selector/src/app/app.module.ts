import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModules } from './material-modules';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MultiLevelRouterComponent, MultiLevelRouterChildComponent } from './multi-level-router/multi-level-router.component';
import { CustomErrorHandler } from './error-handler';
import { FormsModule } from '@angular/forms';
import { AngleSelectorModule } from './angle-selector/angle-selector.module';
import { ChildRoutingModule } from './multi-level-router/child-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    MultiLevelRouterComponent,
    MultiLevelRouterChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ...MaterialModules,
    AppRoutingModule,
    AngleSelectorModule,
    ChildRoutingModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: CustomErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
