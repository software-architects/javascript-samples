import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angle-selector-popper',
  templateUrl: './angle-selector-popper.component.html',
  styleUrls: ['./angle-selector-popper.component.scss']
})
export class AngleSelectorPopperComponent implements OnInit {
  angle = 90;

  constructor() { }

  ngOnInit() {
  }

}
