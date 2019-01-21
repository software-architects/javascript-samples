import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiLevelRouterComponent, MultiLevelRouterChildComponent } from './multi-level-router.component';

const routes: Routes = [
  {
    path: 'cm-multi',
    component: MultiLevelRouterComponent,
    data: { breadcrumb: 'CM - Level 1' },
    children: [
      { path: 'cm-child', component: MultiLevelRouterChildComponent, data: { breadcrumb: 'CM - Level 2' } },
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'static' }
];

@NgModule({
  imports: [RouterModule.forChild(routes/*, { enableTracing: true }*/)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
