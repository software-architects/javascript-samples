import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WidgetConfiguration } from './widget';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  private widgetStore: BehaviorSubject<WidgetConfiguration[]> = new BehaviorSubject<WidgetConfiguration[]>([]);

  add(widget: WidgetConfiguration): void {
    this.widgetStore.next(this.widgetStore.getValue().concat(widget));
  }

  get widgets(): BehaviorSubject<WidgetConfiguration[]> {
    return this.widgetStore;
  }
}
