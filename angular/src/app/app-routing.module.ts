import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './010-basics/home.component';
import { HelloWorldComponent } from './010-basics/hello-world.component';
import { TemplateDemoComponent } from './010-basics/template.component';
import { InOutUserComponent } from './010-basics/input-output.component';
import { NgForComponent } from './020-directives/ngFor.component';
import { NgIfComponent } from './020-directives/ngIf.component';
import { TooltipComponent } from './020-directives/rsTooltip.directive';
import { StyledComponent } from './020-directives/view-encapsulation.component';
import { CustomPipeDemoComponent } from './020-directives/upper-lowercase.pipe';
import { MyComponent } from './030-depencency-injection/di.component';
import { CustomerFormComponent } from './040-forms/customer-form.component';
import { PokemonComponent, PokemonListComponent, PokemonDetailComponent } from './050-master-detail/pokemon-list.component';
import { ObservablesComponent } from './060-observables/observables.component';
import { CustomerRxFormComponent } from './040-forms/customer-rx-form.component';
import { TicTacToeComponent } from './010-basics/tictactoe.component';

const routes: Routes = [
  // Redirecting
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Simple routes
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'home', component: HomeComponent },
  { path: 'template-demo', component: TemplateDemoComponent },
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
  { path: 'observables', component: ObservablesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
