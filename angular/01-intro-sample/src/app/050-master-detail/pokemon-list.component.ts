import { Component, Injectable, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';

// The following three interface represent the data model for the components
export interface IPokemonReference {
    id: string;
    name: string;
}

export interface IPokemonListResult {
    count: number;
    results: IPokemonReference[];
}

export interface IPokemonDetails {
    id: number;
    name: string;
    baseExperience: number;
    height: number;
    weight: number;
    frontDefaultSprite: string;
}

// The following to interface represent the data model returned from the PokeAPI. For details see
// https://pokeapi.co/docsv2/#pokemon
export interface IPokeApiListResultRow {
    url: string;
    name: string;
}

export interface IPokeApiListResult {
    count: number;
    results: IPokeApiListResultRow[];
}

// The following service encapsulates data access methods for the PokeAPI.
@Injectable()
export class PokemonService {
    private pokemonListUrl = 'https://pokeapi.co/api/v2/pokemon/';

    // Note the use of Angular's Http service here. For details see
    // https://angular.io/docs/ts/latest/api/http/index/Http-class.html
    constructor(private http: Http) { }

    public get(page: number): Observable<IPokemonListResult> {
        // Calculate paging
        let url = `${this.pokemonListUrl}?limit=10`;
        if (page > 1) {
            url += `&offset=${(page - 1) * 10}`;
        }

        return this.http
            .get(url)
            .map(res => {
                // Note that in this case we are using a TypeScript interface for typesafe access
                // to the data that PokeAPI returned.
                const pokeResult = (<IPokeApiListResult>res.json());
                return {
                    count: pokeResult.count,
                    results:
                    pokeResult.results
                        .map(r => {
                            return {
                                id: r.url.substring(r.url.lastIndexOf('/', r.url.length - 2) + 1, r.url.length - 1),
                                name: r.name
                            };
                        })
                };
            });
    }

    public getDetails(id: number): Observable<IPokemonDetails> {
        const url = `${this.pokemonListUrl}${id}/`;
        return this.http
            .get(url)
            .catch((err, c) => {
                console.log(err);
                return c;
            })
            .map(res => {
                const pokeResult = res.json();
                // Note that for demonstration purposes we do not use a TypeScript interface for
                // PokeAPI's result (in contrast to the method shown above).
                return {
                    id: <number>pokeResult.id,
                    name: <string>pokeResult.name,
                    baseExperience: <number>pokeResult.base_experience,
                    height: <number>pokeResult.height,
                    weight: <number>pokeResult.weight,
                    frontDefaultSprite: <string>pokeResult.sprites.front_default
                };
            });
    }
}

// Note that we reference HTTP_PROVIDERS here. For details see
// https://angular.io/docs/ts/latest/api/http/index/HTTP_PROVIDERS-let.html
@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.html',
    providers: [PokemonService]
})
export class PokemonListComponent implements OnInit {
    public isLoadingList = false;
    public pokemons: IPokemonReference[];
    public currentPage = 1;
    public numberOfPages = 1;

    constructor(private pokemonService: PokemonService, private router: Router) { }

    public ngOnInit() {
        this.refreshList();
    }

    public paging(offset: number) {
        this.currentPage += offset;
        this.refreshList();
    }

    public details(id: number) {
        this.router.navigate(['/pokemon-list', id]);
    }

    public refreshList() {
        this.isLoadingList = true;
        this.pokemonService.get(this.currentPage)
            .forEach(p => {
                this.numberOfPages = Math.ceil(p.count / 10);
                this.pokemons = p.results;
            })
            .then(() => this.isLoadingList = false);
    }
}

// Note that we reference HTTP_PROVIDERS here. For details see
// https://angular.io/docs/ts/latest/api/http/index/HTTP_PROVIDERS-let.html
@Component({
    selector: 'app-pokemon-detail',
    templateUrl: './pokemon-details.html',
    providers: [ PokemonService ]
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
    public isLoadingList = false;
    private selectedPokemonId: number;
    private sub: any;
    public pokemon: IPokemonDetails;

    constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route
            .params
            .subscribe(params => {
                this.selectedPokemonId = +params['id'];
                this.refreshDetails();
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public refreshDetails() {
        this.isLoadingList = true;
        this.pokemonService.getDetails(this.selectedPokemonId)
            .forEach(p => this.pokemon = p)
            .then(() => this.isLoadingList = false);
    }
}

// Note that the following template has its own router-outlet. Child routes
// will be rendered into this outlet.
@Component({
    selector: 'app-pokemons',
    template: '<h2>Pokemons</h2><router-outlet></router-outlet>'
})
export class PokemonComponent { }
