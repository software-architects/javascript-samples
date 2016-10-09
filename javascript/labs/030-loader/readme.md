# JavaScript Introduction


## Your Job

This example is based on [the previous lab](../020-class). Make sure you did the previous lab
before trying that one.

In this example you have to change the Pokemon service so that it becomes a module in 
[commonjs](http://requirejs.org/docs/commonjs.html) format. Once you have done that, integrate
[systemjs](https://github.com/systemjs/systemjs) in `index.html` and `index.js`. The goal is
that *systemjs* loads `pokemon-service.js` automatically when needed.

Just like in the last lab, try to stick to ECMAScript 5 features. 


## Advices and Tips

* Read more about [commonjs](http://requirejs.org/docs/commonjs.html)

* Read more about [system.js](https://github.com/systemjs/systemjs)

* You are an experienced JavaScript developer and you finish the lab early? Try creating a second
  version using [ECMAScript 2015 `import`](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/import) instead.


## Tools

* Don't forget to check your JavaScript's quality using [JSHint](http://jshint.com/) and 
  [JSLint](http://www.jslint.com/).

* Use *Network* tab of [Chrome DevTools](https://developer.chrome.com/devtools) and see how
  system.js loads files whenever needed.

* [webpack](https://webpack.github.io/docs/) is another alternative to dynamically loading
  modules at runtime or bundling with *Gulp* (see previous lab).
  * First, read [basics about webpack](https://webpack.github.io/docs/usage.html)
  * Next, try running it on your code: `webpack ./index.js scripts-all.js`
  * Open `scripts-all.js` and take a look at the resulting bundle
  * Discuss advantages/disadvantages of the different approaches with your peers
