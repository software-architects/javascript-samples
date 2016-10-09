/*jslint browser: true*/
/*jslint plusplus: true */

// Note that this implementation requires another module. The module
// (commonjs format) is loaded using systemjs.
var PokemonService = require('./pokemon-service.js');

window.onload = function () {
    "use strict";

    var list = document.getElementById('pokemonList'),
        prev = document.getElementById('prev'),
        next = document.getElementById('next'),
        loadingIndicator = document.getElementById('loadingIndicator'),
        service = new PokemonService(),
        li,
        content,
        icon,
        text;

    function loadPokemons() {
        next.hidden = prev.hidden = true;
        loadingIndicator.hidden = false;

        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }

        service.loadPokemons(function (result) {
            loadingIndicator.hidden = true;
            prev.hidden = !result.previous;
            next.hidden = !result.next;

            result.pokemons.forEach(function (pokemon) {
                li = document.createElement('div');
                li.className = 'mdl-list__item';

                content = document.createElement('span');
                content.className = 'mdl-list__item-primary-content';

                icon = document.createElement('i');
                icon.className = 'material-icons mdl-list__item-avatar';
                icon.textContent = 'person';

                text = document.createElement('span');
                text.textContent = pokemon.name;

                content.appendChild(icon);
                content.appendChild(text);
                li.appendChild(content);
                list.appendChild(li);
            });
        });
    }

    next.onclick = function () {
        ++service.currentPage;
        loadPokemons();
    };

    prev.onclick = function () {
        --service.currentPage;
        loadPokemons();
    };

    loadPokemons();
};