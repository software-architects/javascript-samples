import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Widget, WidgetBase } from '../widget';

@Widget()
@Component({
  selector: 'app-chart-widget',
  templateUrl: './chart-widget.component.html',
  styles: [':host { height: 100%; width: 100%; }']
})
export class ChartWidgetComponent extends WidgetBase {

  constructor(private httpClient: HttpClient) {
    super();
  }
}
