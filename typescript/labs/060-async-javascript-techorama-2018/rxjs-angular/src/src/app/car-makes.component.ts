import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, startWith, switchMap} from 'rxjs/operators';

import {UrlBuilderService} from './url-builder.service';

export interface IModel {
  id: number,
  year: number,
  make: string,
  model: string
}

@Component({
  selector: 'app-car-makes',
  templateUrl: './car-makes.component.html',
  styleUrls: ['./car-makes.component.css']
})
export class CarMakesComponent implements OnInit {
  public filteredMakes: Observable<string[]>;
  public filterForm = new FormGroup({
    make: new FormControl()
  });

  constructor(private http: HttpClient, private urlBuilder: UrlBuilderService) {}

  ngOnInit() {
    // Create observable that gets years from web api and
    // turns each year into a string
    const buildMakesUrl = (makeFilter: string) =>
        this.urlBuilder.buildUrl(`https://vehicle-data.azurewebsites.net/api/makes`, {make: makeFilter});
    this.filteredMakes = this.filterForm.get('make').valueChanges.pipe(
        startWith(''), debounceTime(250),
        switchMap(val => this.http.get<string[]>(buildMakesUrl(val))));
  }
}
