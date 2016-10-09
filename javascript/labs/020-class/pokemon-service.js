/*jslint browser: true*/

// Create PokemonService class
var PokemonService = (function () {
    "use strict";

    // Some static variables
    PokemonService.url = 'http://pokeapi.co/api/v2/pokemon/?limit=';
    PokemonService.pageSize = 5;

    // Constructor
    function PokemonService() {
        this.currentPage = 1;
    }

    // Instance functions
    PokemonService.prototype.loadPokemons = function (callback) {
        var xhr = new XMLHttpRequest(),
            url = PokemonService.url + PokemonService.pageSize;
        xhr.addEventListener("load", function () {
            var result = {},
                jsonResult = JSON.parse(xhr.response);

            if (jsonResult.previous) {
                result.previous = jsonResult.previous;
            }

            if (jsonResult.next) {
                result.next = jsonResult.next;
            }

            result.pokemons = [];
            jsonResult.results.forEach(function (pokemon) {
                result.pokemons.push({ url: pokemon.url, name: pokemon.name });
            });

            callback(result);
        });

        if (this.currentPage > 1) {
            url += "&offset=" + (this.currentPage - 1) * PokemonService.pageSize;
        }

        xhr.open('GET', url);
        xhr.send();
    };

    return PokemonService;
}());