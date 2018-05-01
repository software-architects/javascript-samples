import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { module } from 'angular';

import { AppModule } from './app/app.module';
import { UrlBuilderService } from './app/url-builder-service/url-builder.service';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

module('vehicle-monitor', []).service('UrlBuilderService', UrlBuilderService);

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
