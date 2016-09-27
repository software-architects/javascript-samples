import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing,
         appRoutingProviders }  from './app.routes';

import { HomeComponent } from './010-basics/home.component';
import { HelloWorldComponent } from './010-basics/hello-world.component';
import { TemplateDemoComponent } from './010-basics/template.component';
import { NgForComponent } from './020-directives/ngFor.component';
import { NgIfComponent } from './020-directives/ngIf.component';
import { Tooltip, TooltipComponent } from './020-directives/rsTooltip.directive';
import { StyledComponent1, StyledComponent2, StyledComponents } from './020-directives/view-encapsulation.component';
import { UpperLowercasePipe, CustomPipeDemoComponent } from './020-directives/upper-lowercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelloWorldComponent,
    TemplateDemoComponent,
    NgForComponent,
    NgIfComponent,
    Tooltip,
    TooltipComponent,
    StyledComponent1,
    StyledComponent2,
    StyledComponents,
    UpperLowercasePipe,
    CustomPipeDemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
