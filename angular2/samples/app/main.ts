import { bootstrap }    from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

// You can optionally switch from "HTML5 pushState"-style URLs (PathLocationStrategy) to 
// HashLocationStrategy. See https://angular.io/docs/ts/latest/guide/router.html#!#browser-url-styles
// for details. See also https://angular.io/docs/ts/latest/api/common/index/LocationStrategy-class.html
// for reference information.

bootstrap(AppComponent, [
    // Note that we opt-in to the new Angular2 forms API. For details
    // see https://angular.io/docs/ts/latest/guide/forms.html
    disableDeprecatedForms(),
    provideForms(),
    appRouterProviders
]);
