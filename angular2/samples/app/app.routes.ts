import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent } from './010-basics/home.component';
import { HelloWorldComponent } from './010-basics/hello-world.component';
import { NgForComponent } from './020-directives/ngFor.component';
import { NgIfComponent } from './020-directives/ngIf.component';
import { TooltipComponent } from './020-directives/rsTooltip.directive';
import { StyledComponents } from './020-directives/view-encapsulation.component';
import { MyComponent } from './030-depencency-injection/di.component';
import { CustomerFormComponent } from  './040-forms/customer-form.component';
import { TemplateDemoComponent } from './010-basics/template.component';
import { PokemonComponent, PokemonListComponent, PokemonDetailComponent } from './050-master-detail/pokemon-list.component';
import { CustomPipeDemoComponent } from './020-directives/upper-lowercase.pipe';

const routes: RouterConfig = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'hello-world', component: HelloWorldComponent },
    { path: 'home', component: HomeComponent },
    { path: 'ng-for', component: NgForComponent },
    { path: 'ng-if', component: NgIfComponent },
    { path: 'styled-components', component: StyledComponents },
    { path: 'tooltip', component: TooltipComponent },
    { path: 'di', component: MyComponent },
    { path: 'customer-form', component: CustomerFormComponent },
    { path: 'template-demo', component: TemplateDemoComponent },
    { path: 'pokemon-list', component: PokemonListComponent },
    { path: 'pipe', component: CustomPipeDemoComponent },
    {
        path: 'pokemon-list',
        component: PokemonComponent,
        children: [
            { path: ':id',  component: PokemonDetailComponent },
            { path: '',     component: PokemonListComponent }
        ]
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];