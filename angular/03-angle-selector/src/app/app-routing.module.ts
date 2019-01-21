import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiLevelRouterComponent, MultiLevelRouterChildComponent } from './multi-level-router/multi-level-router.component';
import { AngleSelectorStaticComponent } from './angle-selector/angle-selector-static/angle-selector-static.component';
import { AngleSelectorBasicHostComponent } from './angle-selector/angle-selector-basic/angle-selector-basic.component';
import { AngleSelectorPointerHostComponent } from './angle-selector/angle-selector-pointer/angle-selector-pointer.component';
import { AngleSelectorPopperComponent } from './angle-selector/angle-selector-popper/angle-selector-popper.component';
import { SpeedupAngleChangerHostDirective } from './angle-selector/speedup-angle-changer.directive';

const routes: Routes = [
  { path: 'static', component: AngleSelectorStaticComponent, data: { breadcrumb: 'Static HTML/CSS' } },
  { path: 'basic', component: AngleSelectorBasicHostComponent, data: { breadcrumb: 'Basic Component' } },
  { path: 'pointer', component: AngleSelectorPointerHostComponent, data: { breadcrumb: 'With Pointer' } },
  { path: 'popper', component: AngleSelectorPopperComponent, data: { breadcrumb: 'With Popper' } },
  { path: 'speedup', component: SpeedupAngleChangerHostDirective, data: { breadcrumb: 'Directive' } },
  {
    path: 'multi',
    component: MultiLevelRouterComponent,
    data: { breadcrumb: 'Level 1' },
    children: [
      { path: 'child', component: MultiLevelRouterChildComponent, data: { breadcrumb: 'Level 2' } },
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'static' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, { enableTracing: true }*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
