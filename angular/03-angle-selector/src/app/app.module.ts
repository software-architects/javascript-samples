import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModules } from './material-modules';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngleSelectorStaticComponent } from './angle-selector-static/angle-selector-static.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MultiLevelRouterComponent, MultiLevelRouterChildComponent } from './multi-level-router/multi-level-router.component';
import { AngleSelectorBasicComponent, AngleSelectorBasicHostComponent } from './angle-selector-basic/angle-selector-basic.component';
import { CustomErrorHandler } from './error-handler';
import { FormsModule } from '@angular/forms';
import { AngleSelectorPointerComponent, AngleSelectorPointerHostComponent } from './angle-selector-pointer/angle-selector-pointer.component';

@NgModule({
  declarations: [
    AppComponent,
    AngleSelectorStaticComponent,
    BreadcrumbComponent,
    MultiLevelRouterComponent,
    MultiLevelRouterChildComponent,
    AngleSelectorBasicComponent,
    AngleSelectorBasicHostComponent,
    AngleSelectorPointerComponent,
    AngleSelectorPointerHostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ...MaterialModules
  ],
  providers: [
    { provide: ErrorHandler, useClass: CustomErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
