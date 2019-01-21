import {Component, OnInit} from '@angular/core';
import {MediaObserver} from '@angular/flex-layout';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {WidgetConfiguration} from '../widget';
import {WidgetService} from '../widget.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit {
  widgets: WidgetConfiguration[] = [];
  gridColumns: Observable<number>;
  big: Observable<number>;
  small: Observable<number>;

  constructor(private widgetService: WidgetService, private mediaObserver: MediaObserver) {
    this.widgetService.widgets.subscribe(w => this.widgets = w);
  }

  ngOnInit() {
    // Number of columns for grid for each media query alias
    const cols_map =
        new Map([['xs', 1], ['sm', 4], ['md', 8], ['lg', 10], ['xl', 18]]);

    // Number of columns for a big widget for each media query alias
    const cols_map_big =
        new Map([['xs', 1], ['sm', 4], ['md', 4], ['lg', 4], ['xl', 4]]);

    // Number of columns for a small widget for each media query alias
    const cols_map_sml =
        new Map([['xs', 1], ['sm', 2], ['md', 2], ['lg', 2], ['xl', 2]]);

    // Find out the initial number of columns
    let start_cols: number;
    let start_cols_big: number;
    let start_cols_sml: number;
    cols_map.forEach((cols, mqAlias) => {
      if (this.mediaObserver.isActive(mqAlias)) {
        start_cols = cols;
      }
    });
    cols_map_big.forEach((cols_big, mqAlias) => {
      if (this.mediaObserver.isActive(mqAlias)) {
        start_cols_big = cols_big;
      }
    });
    cols_map_sml.forEach((cols_sml, mqAliast) => {
      if (this.mediaObserver.isActive(mqAliast)) {
        start_cols_sml = cols_sml;
      }
    });

    // Setup the observables for column numbers
    this.gridColumns = this.mediaObserver.media$.pipe(
        map(change => cols_map.get(change.mqAlias)), startWith(start_cols));
    this.big = this.mediaObserver.media$.pipe(
        map(change => cols_map_big.get(change.mqAlias)),
        startWith(start_cols_big));
    this.small = this.mediaObserver.media$.pipe(
        map(change => cols_map_sml.get(change.mqAlias)),
        startWith(start_cols_sml));

    this.createWidgets();
  }

  createWidgets(): void {
    this.widgetService.add({
      md: {
        name: 'Demo',
        icon: 'bar_chart',
        cols: this.big,
        rows: this.big,
        color: 'blue'
      },
      component: 'ChartWidgetComponent'
    });
    this.widgetService.add({
      md: {
        name: 'Demo',
        icon: 'pie_chart',
        cols: this.big,
        rows: this.small,
        color: 'lightblue'
      },
      component: 'ChartWidgetComponent'
    });
    this.widgetService.add({
      md: {
        name: 'Demo',
        icon: 'supervisor_account',
        cols: this.small,
        rows: this.small,
        color: 'green'
      },
      component: 'ChartWidgetComponent'
    });
    this.widgetService.add({
      md: {
        name: 'Demo',
        icon: 'bubble_chart',
        cols: this.small,
        rows: this.small,
        color: 'lightgreen'
      },
      component: 'ChartWidgetComponent'
    });
    this.widgetService.add({
      md: {
        name: 'Demo',
        icon: 'bar_chart',
        cols: this.big,
        rows: this.small,
        color: 'green'
      },
      component: 'ChartWidgetComponent'
    });
    this.widgetService.add({
      md: {
        name: 'Demo',
        icon: 'bubble_chart',
        cols: this.big,
        rows: this.small,
        color: 'red'
      },
      component: 'ChartWidgetComponent'
    });
    this.widgetService.add({
      md: {
        name: 'Demo',
        icon: 'bar_chart',
        cols: this.big,
        rows: this.big,
        color: 'blue'
      },
      component: 'ChartWidgetComponent'
    });
    this.widgetService.add({
      md: {
        name: 'Demo',
        icon: 'pie_chart',
        cols: this.big,
        rows: this.small,
        color: 'lightblue'
      },
      component: 'ChartWidgetComponent'
    });
    this.widgetService.add({
      md: {
        name: 'Demo',
        icon: 'supervisor_account',
        cols: this.small,
        rows: this.small,
        color: 'green'
      },
      component: 'ChartWidgetComponent'
    });
    this.widgetService.add({
      md: {
        name: 'Demo',
        icon: 'bubble_chart',
        cols: this.small,
        rows: this.small,
        color: 'lightgreen'
      },
      component: 'ChartWidgetComponent'
    });
    this.widgetService.add({
      md: {
        name: 'Demo',
        icon: 'bar_chart',
        cols: this.big,
        rows: this.small,
        color: 'green'
      },
      component: 'ChartWidgetComponent'
    });
    this.widgetService.add({
      md: {
        name: 'Demo',
        icon: 'bubble_chart',
        cols: this.big,
        rows: this.small,
        color: 'red'
      },
      component: 'ChartWidgetComponent'
    });
  }
}
