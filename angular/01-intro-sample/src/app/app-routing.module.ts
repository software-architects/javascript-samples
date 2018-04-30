import { InternationalizationComponent } from './080-i18n/i18n.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HelloWorldComponent} from './010-basics/hello-world.component';
import {HomeComponent} from './010-basics/home.component';
import {InOutUserComponent} from './010-basics/input-output.component';
import {AdminGuard, RouterComponent} from './010-basics/router.component';
import {TemplateDemoComponent} from './010-basics/template.component';
import {TicTacToeComponent} from './010-basics/tictactoe.component';
import {NgForComponent} from './020-directives/ngFor.component';
import {NgIfComponent} from './020-directives/ngIf.component';
import {TooltipComponent} from './020-directives/rsTooltip.directive';
import {CustomPipeDemoComponent} from './020-directives/upper-lowercase.pipe';
import {StyledComponent} from './020-directives/view-encapsulation.component';
import {MyComponent} from './030-depencency-injection/di.component';
import {CustomerFormComponent} from './040-forms/customer-form.component';
import {CustomerRxFormComponent} from './040-forms/customer-rx-form.component';
import {PokemonComponent, PokemonDetailComponent, PokemonListComponent} from './050-master-detail/pokemon-list.component';
import {ObservablesComponent} from './060-observables/observables.component';

const routes: Routes = [
  // Redirecting
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Simple routes
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'home', component: HomeComponent },
  { path: 'template-demo', component: TemplateDemoComponent },
  { path: 'admin', canActivate: [AdminGuard], children: [
    // Note the use of a component-less route here
    // (see https://angular.io/guide/router#component-less-route-grouping-routes-without-a-component)
    { path: 'router', component: RouterComponent, data: { foo: 'bar' } },
  ]},
  { path: 'input-output', component: InOutUserComponent },
  { path: 'tictactoe', component: TicTacToeComponent },
  { path: 'ng-for', component: NgForComponent },
  { path: 'ng-if', component: NgIfComponent },
  { path: 'styled-components', component: StyledComponent },
  { path: 'tooltip', component: TooltipComponent },
  { path: 'pipe', component: CustomPipeDemoComponent },
  { path: 'di', component: MyComponent },
  { path: 'customer-form', component: CustomerFormComponent },
  { path: 'customer-rx-form', component: CustomerRxFormComponent },
  { path: 'pokemon-list', component: PokemonListComponent },

  // Nested routes
  {
    path: 'pokemon-list',
    component: PokemonComponent,
    children: [
      { path: ':id', component: PokemonDetailComponent },
      { path: '', component: PokemonListComponent }
    ]
  },
  { path: 'observables', component: ObservablesComponent },
  { path: 'i18n', component: InternationalizationComponent }
];

@NgModule({
  // Tip: Try enable tracing as shown below to track down routing errors
  // (see also https://angular.io/guide/router#configuration)
  imports: [RouterModule.forRoot(routes/*, { enableTracing: true }*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
