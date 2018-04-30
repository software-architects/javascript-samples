import { Component, Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormControl } from '@angular/forms';
import { IPokemonReference } from '../050-master-detail/pokemon-list.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class PokeSearchService {
    constructor(private http: Http) { }

    public search(name: string): Observable<IPokemonReference[]> {
        return this.http.get(`http://localhost:1337/pokesearch?name=${name}`)
            .map(res => <IPokemonReference[]>res.json());
    }
}

@Component({
    selector: 'app-customer-form',
    templateUrl: './observables.html',
    providers: [PokeSearchService]
})
export class ObservablesComponent implements OnInit {
    // Note that this sample uses Reactive forms
    // See also https://blog.thoughtram.io/angular/2016/06/22/model-driven-forms-in-angular-2.html
    public nameControl = new FormControl();
    public pokemons: Observable<IPokemonReference[]>;

    constructor(private search: PokeSearchService) {}

    ngOnInit() {
        // Note how we use Rx to debounce values
        this.pokemons = this.nameControl.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(v => this.search.search(this.nameControl.value));
    }
}
