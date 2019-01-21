import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

export interface BreadCrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  public breadcrumbs: Observable<BreadCrumb[]>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.breadcrumbs = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      distinctUntilChanged(),
      map(() => this.buildBreadCrumb(this.activatedRoute.root)));
    }

  private buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: BreadCrumb[] = []): BreadCrumb[] {
    // If no routeConfig is avalailable we are on the root path
    const label = route.routeConfig ? route.routeConfig.data.breadcrumb : 'Home';
    const path = route.routeConfig ? route.routeConfig.path : '';
    // In the routeConfig the complete path is not available, so we rebuild it each time
    const nextUrl = `${url}${path}/`;
    const breadcrumb = {
      label: label,
      url: nextUrl
    };
    const newBreadcrumbs = [ ...breadcrumbs, breadcrumb ];
    if (route.firstChild) {
        // If we are not on our current path yet,
        // there will be more children to look after, to build our breadcumb
        return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }

    return newBreadcrumbs;
  }
}
