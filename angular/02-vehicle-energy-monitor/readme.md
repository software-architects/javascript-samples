# Learn by Example - Modern Web Development with Angular

## Database

Source for data about models and makes: [https://github.com/n8barr/automotive-model-year-data](https://github.com/n8barr/automotive-model-year-data), licensed under [CC-BY](http://creativecommons.org/licenses/by/2.5/), and is free for you to use and modify under that license.

* Server: *ng-workshop.database.windows.net*
* Database: *ng-workshop*
* User: *dev*
* Ask your trainer for the password

## Service

* Code in [*server*](server) folder
* Set environment variable `DBPWD` with database password (see above) before running the server code with `npm start`
* Uses port 8082 by default; set environment variable `PORT` if you want to use a different one
* Sample requests in [*demo-requests.http*](server/demo-requests.http)

## Project creation

### [npx](https://www.npmjs.com/package/npx)

```bash
npm install @angular/cli
npx ng --version
npx ng new vehicle-energy-monitor --directory client --routing --style sass --skip-git --service-worker
```

### Add *Angular Material*

* Follow [this guide](https://material.angular.io/guide/getting-started)...
* Add *Roboto* font ([guide](https://material.angular.io/guide/typography))

### Add *Angular Flex-Layout*

Follow [this guide](https://github.com/angular/flex-layout/wiki/Using-Angular-CLI)...

### Setup Angular Service Worker

* Install [http-server](https://www.npmjs.com/package/http-server) with `npm install http-server --save-dev`
* Do prod build with `npm run build`
* Serve prod build with `npx http-server dist -p 8083` and see service worker in action
* Add `"urls": [ "https://fonts.googleapis.com/**", "https://fonts.gstatic.com/" ]` to *ngsw-config.json*
* [Read more...](https://angular.io/guide/service-worker-config)

## Build Responsive Menu

* Import necessary modules:

```ts
...
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
...

@NgModule({
declarations: [...],
imports: [
    ...
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
],
providers: [],
bootstrap: [...]
})
export class AppModule { ... }
```

* Create response menu:

```html
<div>
  <mat-toolbar color="primary" ngClass.lt-sm="toolbar-height">
    <span>Workshop</span>
    <span class="fill-remaining-space"></span>
    <div fxShow fxHide.lt-sm>
      <a routerLink="/" mat-button>Menu Item 1</a>
      <a routerLink="/" mat-button>Menu Item 2</a>
      <a routerLink="/" mat-button>Menu Item 3</a>
    </div>

    <div fxShow fxHide.gt-xs>
      <a (click)="sidenav.toggle()">
        <mat-icon>menu</mat-icon>
      </a>
    </div>
  </mat-toolbar>

  <mat-sidenav-container fxFlexFill>
    <mat-sidenav #sidenav fxLayout="column">
      <div fxLayout="column">
        <a (click)="sidenav.toggle()" mat-button>Close</a>
        <a routerLink="/" mat-button>Menu Item 1</a>
        <a routerLink="/" mat-button>Menu Item 2</a>
        <a routerLink="/" mat-button>Menu Item 3</a>
      </div>
    </mat-sidenav>

    <mat-sidenav-content fxFlexFill>
      <router-outlet></router-outlet>
    </mat-sidenav-content>
  </mat-sidenav-container>
</div>
```

* Add some styles to *app.component.css*:

```css
.fill-remaining-space {
    flex: 1 1 auto;
}

.toolbar-height {
    height: 64px;
}
```

* Read more about...
  * [Responsive Layout API...](https://github.com/angular/flex-layout/wiki/Responsive-API)
  * [Angular Material Components...](https://material.angular.io/components/categories)

## Add Service and Component

### Add Stand-alone Component

* Generate service with `npx ng generate service lorem-ipsum -m app`
* Generate component with `npx ng generate component lorem-ipsum --module app`


* Generate module containing components and services for demo content with `npx ng generate module demo-content --module app --routing`


