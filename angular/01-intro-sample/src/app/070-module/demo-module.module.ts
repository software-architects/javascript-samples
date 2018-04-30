import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoModuleComponent } from './demo-module.component';

const demoModuleRoutes: Routes = [
    { path: 'demo-route', component: DemoModuleComponent }
];

@NgModule({
  declarations: [
    DemoModuleComponent
  ],
  imports: [
    RouterModule.forChild(demoModuleRoutes)
  ],
  exports: [
    DemoModuleComponent,
    RouterModule
  ],
  providers: []
})
export class DemoModule { }
