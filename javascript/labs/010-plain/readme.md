# JavaScript Introduction


## Your Job

Create a simple website showing a list of Pokemons.

You have to get the Pokemon list from the RESTful Web API offered by [Pokeapi](http://pokeapi.co/)
(details see below).

The site must show five Pokemons per page and offer paging buttons (next/previous). The paging
buttons must be invisible if no more data is available (i.e. hide *previous* button on first page).

Display a loading indicator while loading data from the Web API.


## The Web API

The Web API relevant for our sample is documented [here](http://pokeapi.co/docsv2/#pokemon).
As you can see, you can get a list of five Pokemons using the URL
[http://pokeapi.co/api/v2/pokemon/?limit=5](http://pokeapi.co/api/v2/pokemon/?limit=5).

Note that the Web API supports paging out of the box. [Here](http://pokeapi.co/docsv2/#resource-lists)
you can find more details about paging in the Pokemon Web API.

**Tip**: Before you start coding, use [Postman](https://www.getpostman.com/) to try the Web API.


## Advices and Tips

* Don't use any JavaScript libraries (e.g. *JQuery*, *Angular*) for this first sample.

* Use a CSS framework like [Bootstrap](http://getbootstrap.com/)
  [Material Design Lite](https://getmdl.io/styles/index.html) to make your web app look nice.
  If you are completely new to HTML and CSS, you can skip this and focus on JavaScript.

* You are completely new to HTML, CSS and JavaScript? Here are some important functions and classes
  you might need in your code:
  * [getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
  * [window.onload](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload)
  * [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
  * [hidden](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden)-Attribute
  * [document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
  * [appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
  * [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className)
  * [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
  * [onclick](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick)

* You are an experienced JavaScript developer and you finish the lab early? Try creating a second
  version using [JQuery](https://jquery.com/) instead of plain HTML and JavaScript.

* Note: The sample code contains not ECMAScript 2016 features (e.g. `let` instead of `var`).
  In practice, you should use the latest ECMAScript language version and use a transpiler like
  [TypeScript](typescriptlang.org) or [Babel](https://babeljs.io/) to transpile into previous 
  versions of ECMAScript.

## Tools

* Use your favorite editor to write the code. If you are not sure, try 
  [Visual Studio Code](http://code.visualstudio.com/)

* Run your web app locally using [lite-server](https://github.com/johnpapa/lite-server)

* Check your JavaScript's quality using [JSHint](http://jshint.com/) and
  [JSLint](http://www.jslint.com/).

* Practice debugging in [Chrome DevTools](https://developer.chrome.com/devtools)