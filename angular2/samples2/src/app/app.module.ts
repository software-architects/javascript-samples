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
import { InOutUserComponent, InputOutputComponent } from './010-basics/input-output.component';
import { NgForComponent } from './020-directives/ngFor.component';
import { NgIfComponent } from './020-directives/ngIf.component';
import { TooltipDirective, TooltipComponent } from './020-directives/rsTooltip.directive';
import { Styled1Component, Styled2Component, StyledComponent } from './020-directives/view-encapsulation.component';
import { UpperLowercasePipe, CustomPipeDemoComponent } from './020-directives/upper-lowercase.pipe';
import { MyComponent } from './030-depencency-injection/di.component';
import { CustomerFormComponent, RevenueValidatorDirective } from  './040-forms/customer-form.component';
import { PokemonComponent, PokemonListComponent, PokemonDetailComponent } from './050-master-detail/pokemon-list.component';
import { Overlay } from './020-directives/overlay';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelloWorldComponent,
    TemplateDemoComponent,
    InputOutputComponent,
    InOutUserComponent,
    NgForComponent,
    NgIfComponent,
    TooltipDirective,
    TooltipComponent,
    Styled1Component,
    Styled2Component,
    StyledComponent,
    UpperLowercasePipe,
    CustomPipeDemoComponent,
    MyComponent,
    RevenueValidatorDirective,
    CustomerFormComponent,
    PokemonComponent, PokemonListComponent, PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    Overlay
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
