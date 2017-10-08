import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, CanActivate, Router} from '@angular/router';

// Note the implementation of a Route guard
// (see https://angular.io/guide/router#milestone-5-route-guards)
@Injectable()
export class AdminGuard implements CanActivate {
  canActivate() {
    console.log('AdminGuard called');
    return true;
  }
}

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: []
})
export class RouterComponent implements OnInit {
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
  }

}
