import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoremIpsumComponent } from './lorem-ipsum/lorem-ipsum.component';
import { CarMakeListComponent } from './car-make-list/car-make-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'about' },
  { path: 'about', component: LoremIpsumComponent },
  { path: 'car-makes', component: CarMakeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
