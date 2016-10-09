# JavaScript Introduction


## Your Job

This example is based on [the previous lab](../010-plain). Make sure you did the previous lab
before trying that one.

In this example, your job is to create a JavaScript class `PokemonService` encapsulating the Web 
API access. The class has to offer a property `currentPage` with which a user can control which page
to load next. Additionally, it has to contain a method `loadPokemons` that does the Web API call.
The function gets a callback function as its parameter. It has to call the callback function
once it got the Web API results.

Create a separate file for the new class.

Create the new class using ECMAScript 5 functionality 
([read more](https://developer.mozilla.org/en/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Custom_objects)).
Note that ECMAScript 2015 has much nicer syntax for classes
([read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)).

Once you created the JavaScript class, change `index.js` so that it uses the new class.


## Advices and Tips

* Read more about ECMAScript 5 classes in
  [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Custom_objects)

* You are an experienced JavaScript developer and you finish the lab early? Try creating a second
  version using [ECMAScript 2015 classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) instead.

* Once you added Gulp (see below), try debugging with [Chrome DevTools](https://developer.chrome.com/devtools)
  again. Note how map-files enable source-level debugging although the JavaScript code is uglified.
  

## Tools

### Don't Forget to Lint

Don't forget to check your JavaScript's quality using [JSHint](http://jshint.com/) and 
[JSLint](http://www.jslint.com/).

### Automate Tasks with Gulp

In this sample, we want to try out [Gulp](http://gulpjs.com/). Therefore, we have to install it
using *NPM* together with some plugins we are going to use:

```
npm init
npm install gulp gulp-concat gulp-sourcemaps gulp-uglify gulp-watch del concurrently pump --save-dev
```

Next, create a Gulpfile as shown [here](Gulpfile.js). Lookup the different modules used in the sample
to get a deeper understanding how this Gulpfile works.

Now you can use your Gulpfile by running `gulp` in the command line. Also try to run Gulp
continuously in the background by running `gulp watch`.

### Testing

We want to automate testing of our new class. For that, install [Jasmine](http://jasmine.github.io/)
and [Karma](https://karma-runner.github.io/1.0/index.html) plus some plugins that we are 
going to use:

```
npm install jasmine-core karma karma-chrome-launcher karma-jasmine --save-dev
```

Of course we have to write a unit test. Start by reading the first samples in the 
[Jasmine docs](http://jasmine.github.io/edge/introduction.html). You will quickly understand the
fundamental concept of Jasmine as the simple tasks are really simple.

Once you understood Jasmine's basics, write two unit tests for our class:

* Make sure that `currentPage` is initially set to 1.
* Make sure that the first call to `loadPokemons` return five properly initialized records.

You can find a sample solution for the test [here](pokemon-service.spec.js). 

Next, create a Karma config file as shown [here](karma.conf.js). Once this is done,
run your test with `npm run test` or `karma start`.
