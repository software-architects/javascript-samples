/// <reference path="./pokemon-service.ts" />

window.onload = () => {
    const list = document.getElementById('pokemonList'),
        prev = document.getElementById('prev'),
        next = document.getElementById('next'),
        loadingIndicator = document.getElementById('loadingIndicator'),
        service = new PokemonService();

    function loadPokemons() {
        next.hidden = prev.hidden = true;
        loadingIndicator.hidden = false;

        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }

        service.loadPokemons(result => {
            loadingIndicator.hidden = true;
            prev.hidden = !result.previous;
            next.hidden = !result.next;

            result.results.forEach(function (pokemon) {
                const li = document.createElement('div');
                li.className = 'mdl-list__item';

                const content = document.createElement('span');
                content.className = 'mdl-list__item-primary-content';

                const icon = document.createElement('i');
                icon.className = 'material-icons mdl-list__item-avatar';
                icon.textContent = 'person';

                const text = document.createElement('span');
                text.textContent = pokemon.name;

                content.appendChild(icon);
                content.appendChild(text);
                li.appendChild(content);
                list.appendChild(li);
            });
        });
    }

    next.onclick = () => {
        ++service.currentPage;
        loadPokemons();
    };

    prev.onclick = () => {
        --service.currentPage;
        loadPokemons();
    };

    loadPokemons();
};