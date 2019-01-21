import {Observable} from 'rxjs';

export interface WidgetMetadata {
  name: string;
  icon: string;
  cols: Observable<number>;
  rows: Observable<number>;
  color: string;
}

export interface WidgetConfiguration {
  md: WidgetMetadata,
  component: string
}

export class WidgetBase {
  metadata: WidgetMetadata;
}

export const widgetRegistry: { [typeIdentifier: string]: any } = { };

export function Widget(): any {
  return function(target: any): any {
    widgetRegistry[target.name] = target;
    return target;
  };
}
