# TypeScript Introduction


## Your Job

This example is based on [the previous lab](../020-class). Make sure you did the previous lab
before trying that one.

In this example you have to change the Pokemon service so that it becomes a module in 
[amd](http://requirejs.org/docs/whyamd.html) format. Once you have done that, integrate
[systemjs](https://github.com/systemjs/systemjs) in `index.html` and `index.ts`. The goal is
that *systemjs* loads `pokemon-service.ts` automatically when needed.


## Advices and Tips

* Read more about [amd](http://requirejs.org/docs/whyamd.html)

* Read more about [system.js](https://github.com/systemjs/systemjs)


## Tools

* Use *Network* tab of [Chrome DevTools](https://developer.chrome.com/devtools) and see how
  system.js loads files whenever needed.

* [webpack](https://webpack.github.io/docs/) is another alternative to dynamically loading
  modules at runtime or bundling with *Gulp* (see previous lab).
  * First, read [basics about webpack](https://webpack.github.io/docs/usage.html)
  * Read about the [TypeScript loader for webpack](https://github.com/TypeStrong/ts-loader)
  * Create a `webpack.config.js` so that webpack will care for compiling TypeScript
  * Next, try running it on your code: `webpack`
  * Open `bundle.js` and take a look at the resulting bundle
  * Discuss advantages/disadvantages of the different approaches with your peers
