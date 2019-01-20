import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngleSelectorStaticComponent } from './angle-selector-static/angle-selector-static.component';
import { AngleSelectorBasicComponent, AngleSelectorBasicHostComponent } from './angle-selector-basic/angle-selector-basic.component';
import {
  AngleSelectorPointerComponent,
  AngleSelectorPointerHostComponent
} from './angle-selector-pointer/angle-selector-pointer.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngleSelectorPopperComponent } from './angle-selector-popper/angle-selector-popper.component';
import { NgxPopperModule } from 'ngx-popper';

@NgModule({
  declarations: [
    AngleSelectorStaticComponent,
    AngleSelectorBasicComponent,
    AngleSelectorBasicHostComponent,
    AngleSelectorPointerComponent,
    AngleSelectorPointerHostComponent,
    AngleSelectorPopperComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    NgxPopperModule
  ],
  exports: [
    AngleSelectorStaticComponent,
    AngleSelectorBasicComponent,
    AngleSelectorBasicHostComponent,
    AngleSelectorPointerComponent,
    AngleSelectorPointerHostComponent,
    AngleSelectorPopperComponent
  ]
})
export class AngleSelectorModule { }
