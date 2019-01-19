import { Component, OnInit } from '@angular/core';

@Component({
  template: '<h2 class="mat-h2">Level 2</h2><p>Lorem ipsum...</p>'
})
export class MultiLevelRouterChildComponent { }

@Component({
  template: '<h1 class="mat-h1">Level 1</h1><router-outlet></router-outlet>'
})
export class MultiLevelRouterComponent { }
