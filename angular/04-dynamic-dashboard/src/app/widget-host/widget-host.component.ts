import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input, Injector } from '@angular/core';
import { WidgetConfiguration, WidgetMetadata, widgetRegistry, WidgetBase } from '../widget';

@Component({
  selector: 'app-widget-host',
  template: '<div #host></div>',
  styles: [':host { height: 100%; width: 100%;}']
})
export class WidgetHostComponent implements OnInit {
  @ViewChild('host', {read: ViewContainerRef}) container: ViewContainerRef;
  
  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  @Input() set widget(data: WidgetConfiguration) {
    const injector = Injector.create([], this.container.parentInjector);
    const factory = this.resolver.resolveComponentFactory(widgetRegistry[data.component]);
    const component = factory.create(injector);

    const w: WidgetBase = <any>component.instance;
    w.metadata = <any>{};
    Object.assign(w.metadata, data.md);

    this.container.insert(component.hostView);
  }
}
