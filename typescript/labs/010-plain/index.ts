// Implement interfaces representing the result of the Pokeapi.
interface IPokemonDetail {
    url: string;
    name: string;
}

interface IPokemonResult {
    previous: string;
    results: IPokemonDetail[];
    next: string;
}

// Run our script once the browser has finished loading all resources
// and has created the DOM. For details see 
// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload
window.onload = () => {
    // Get relevant elements in DOM by id.
    // Want to know which browsers support getElementById? Check
    // http://caniuse.com/#search=getElementbyid
    const list = document.getElementById("pokemonList"),
        prev = document.getElementById("prev"),
        next = document.getElementById("next"),
        loadingIndicator = document.getElementById("loadingIndicator");
    let currentPage = 1,
        pageSize = 5;

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
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("load", () => {
            // Hide loading indicator
            loadingIndicator.hidden = true;

            // Parse result
            const jsonResult = <IPokemonResult>JSON.parse(xhr.response);

            // Selectively show/hide buttons
            prev.hidden = !jsonResult.previous;
            next.hidden = !jsonResult.next;

            // Iterate over result and create Pokemon results in DOM
            jsonResult.results.forEach(pokemon => {
                // Build DOM using JavaScript functions. Note that you could
                // use "innerHtml" instead.
                const li = document.createElement("div");
                li.className = "mdl-list__item";

                const content = document.createElement("span");
                content.className = "mdl-list__item-primary-content";

                const icon = document.createElement("i");
                icon.className = "material-icons mdl-list__item-avatar";
                icon.textContent = "person";

                const text = document.createElement("span");
                text.textContent = pokemon.name;

                content.appendChild(icon);
                content.appendChild(text);
                li.appendChild(content);
                list.appendChild(li);
            });
        });

        // Build URL
        let url = "http://pokeapi.co/api/v2/pokemon/?limit=" + pageSize;
        if (currentPage > 1) {
            url += "&offset=" + (currentPage - 1) * pageSize;
        }

        // Send request
        xhr.open("GET", url);
        xhr.send();
    }

    // Next page
    next.onclick = () => {
        ++currentPage;
        loadPokemons();
    };

    // Previous page
    prev.onclick = () => {
        if (currentPage > 1) {
            --currentPage;
            loadPokemons();
        }
    };

    // Initial load of first Pokemon page
    loadPokemons();
};