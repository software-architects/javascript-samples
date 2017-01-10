/*jslint browser: true*/
/*jslint plusplus: true */

// Run our script once the browser has finished loading all resources
// and has created the DOM. For details see 
// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload
window.onload = function () {
    // Note that we use the function form of "use strict" here. For details
    // see http://yuiblog.com/blog/2010/12/14/strict-mode-is-coming-to-town/
    "use strict";

    // Get relevant elements in DOM by id.
    // Want to know which browsers support getElementById? Check
    // http://caniuse.com/#search=getElementbyid
    var list = document.getElementById('pokemonList'),
        prev = document.getElementById('prev'),
        next = document.getElementById('next'),
        loadingIndicator = document.getElementById('loadingIndicator'),
        currentPage = 1,
        pageSize = 5,
        li,
        content,
        icon,
        text,
        url;

    // Helper function to load Pokemons
    function loadPokemons() {
        // Display loading indicator and hide navigation buttons
        next.hidden = prev.hidden = true;
        loadingIndicator.hidden = false;

        // Remove all Pokemons from DOM
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }

        // Build XHR. Need details about XMLHttpRequest? Check
        // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function () {
            // Hide loading indicator
            loadingIndicator.hidden = true;

            // Parse result
            var jsonResult = JSON.parse(xhr.response);

            // Selectively show/hide buttons
            prev.hidden = !jsonResult.previous;
            next.hidden = !jsonResult.next;

            // Iterate over result and create Pokemon results in DOM
            jsonResult.results.forEach(function (pokemon) {
                // Build DOM using JavaScript functions. Note that you could
                // use 'innerHtml' instead.
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

        // Build URL
        // url = 'http://localhost:1337/pokemons?limit=' + pageSize;
        url = 'http://pokeapi.co/api/v2/pokemon/?limit=' + pageSize;
        if (currentPage > 1) {
            url += "&offset=" + (currentPage - 1) * pageSize;
        }

        // Send request
        xhr.open('GET', url);
        xhr.send();
    }

    // Next page
    next.onclick = function () {
        ++currentPage;
        loadPokemons();
    };

    // Previous page
    prev.onclick = function () {
        if (currentPage > 1) {
            --currentPage;
            loadPokemons();
        }
    };

    // Initial load of first Pokemon page
    loadPokemons();
};