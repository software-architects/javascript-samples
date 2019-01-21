import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule, MatButtonModule, MatCardModule, MatListModule, MatIconModule, MatTooltipModule, MatSidenavModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WidgetHostComponent } from './widget-host/widget-host.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartWidgetComponent } from './chart-widget/chart-widget.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WidgetHostComponent,
    DashboardComponent,
    ChartWidgetComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  entryComponents: [ChartWidgetComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
