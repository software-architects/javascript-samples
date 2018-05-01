import 'rxjs/add/observable/from';

import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {debounceTime, flatMap, map, startWith, switchMap, tap, withLatestFrom, zip, zipAll} from 'rxjs/operators';

import {environment} from '../../environments/environment';
import { UrlBuilderService } from '../url-builder-service/url-builder.service';

export interface IModel {
  id: number,
  year: number,
  make: string,
  model: string
}

@Component({
  selector: 'app-car-make-list',
  templateUrl: './car-make-list.component.html',
  styleUrls: ['./car-make-list.component.css']
})
export class CarMakeListComponent implements OnInit {
  public filteredYears: Observable<string[]>;
  public filteredMakes: Observable<string[]>;
  public filteredModels: Observable<IModel[]>;
  public filterForm = new FormGroup({
    year: new FormControl(),
    make: new FormControl()
  });

  constructor(private http: HttpClient, private urlBuilder: UrlBuilderService) {}

  ngOnInit() {
    // Create observable that gets years from web api and
    // turns each year into a string
    const yearsObservable =
        this.http.get<number[]>(`${environment.webApiBaseUrl}/years`)
            .pipe(map(yearsNumeric => yearsNumeric.map(y => y.toString())));

    this.filteredYears = this.filterForm.get('year').valueChanges.pipe(
        startWith(''), debounceTime(250), withLatestFrom(yearsObservable),
        tap(([val, years]) =>
                console.log(`Looking for "${val}" in [ ${years.join(', ')} ]`)),
        map(([val, years]) => years.filter(y => !val || y.startsWith(val))));

    const buildMakesUrl = (makeFilter: string) =>
        this.urlBuilder.buildUrl(`${environment.webApiBaseUrl}/makes`, {make: makeFilter});
    this.filteredMakes = this.filterForm.get('make').valueChanges.pipe(
        startWith(''), debounceTime(250),
        switchMap(val => this.http.get<string[]>(buildMakesUrl(val))));
  }

  public onYearSelected(event: MatAutocompleteSelectedEvent) {
    console.log(`User selected ${event.option.value}`);
  }

  // We import this service from an upgraded AngularJS service.
  // private buildUrl(base: string, filter: any): string {
  //   const filterWithValue = Object.keys(filter)
  //                               .filter(f => !!filter[f])
  //                               .map(f => `${f}=${filter[f]}`)
  //                               .join('&');
  //   return filterWithValue ? `${base}?${filterWithValue}` : base;
  // }

  public onRefresh() {
    const formModel = this.filterForm.value;
    const url = this.urlBuilder.buildUrl(`${environment.webApiBaseUrl}/models`, {year: formModel.year, make: formModel.make});
    this.filteredModels = this.http.get<IModel[]>(url);
  }
}
