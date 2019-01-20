import { Component, ViewChild, ElementRef } from '@angular/core';
import { PopperContent } from 'ngx-popper';

@Component({
  selector: 'app-angle-selector-popper',
  templateUrl: './angle-selector-popper.component.html',
  styleUrls: ['./angle-selector-popper.component.scss']
})
export class AngleSelectorPopperComponent {
  angle = 90;

  constructor() { }
}
