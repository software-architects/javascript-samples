import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { HomeComponent } from './010-basics/home.component';
import { HelloWorldComponent } from './010-basics/hello-world.component';
import { TemplateDemoComponent } from './010-basics/template.component';
import { NgForComponent } from './020-directives/ngFor.component';
import { NgIfComponent } from './020-directives/ngIf.component';
import { TooltipComponent } from './020-directives/rsTooltip.directive';
import { StyledComponents } from './020-directives/view-encapsulation.component';
import { CustomPipeDemoComponent } from './020-directives/upper-lowercase.pipe';
// import { MyComponent } from './030-depencency-injection/di.component';
// import { CustomerFormComponent } from  './040-forms/customer-form.component';
// import { PokemonComponent, PokemonListComponent, PokemonDetailComponent } from './050-master-detail/pokemon-list.component';

// Here we setup the router config for our samples application. For details see
// https://angular.io/docs/ts/latest/api/router/index/RouterConfig-type-alias.html
const appRoutes: Routes = [
    // Redirecting
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    // Simple routes
    { path: 'hello-world', component: HelloWorldComponent },
    { path: 'home', component: HomeComponent },
    { path: 'template-demo', component: TemplateDemoComponent },
    { path: 'ng-for', component: NgForComponent },
    { path: 'ng-if', component: NgIfComponent },
    { path: 'styled-components', component: StyledComponents },
    { path: 'tooltip', component: TooltipComponent },
    { path: 'pipe', component: CustomPipeDemoComponent },
    // { path: 'di', component: MyComponent },
    // { path: 'customer-form', component: CustomerFormComponent },
    // { path: 'pokemon-list', component: PokemonListComponent },

    // // Nested routes
    // {
    //     path: 'pokemon-list',
    //     component: PokemonComponent,
    //     children: [
    //         { path: ':id',  component: PokemonDetailComponent },
    //         { path: '',     component: PokemonListComponent }
    //     ]
    // }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);