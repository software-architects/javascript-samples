# TypeScript Introduction


## Your Job

This example is based on [the previous lab](../010-plain). Make sure you did the previous lab
before trying that one.

In this example, your job is to create a TypeScript class `PokemonService` encapsulating the Web 
API access. The class has to offer a property `currentPage` with which a user can control which page
to load next. Additionally, it has to contain a method `loadPokemons` that does the Web API call.
The function gets a callback function as its parameter. It has to call the callback function
once it got the Web API results.

Create a separate file for the new class.

Once you created the TypeScript class, change `index.ts` so that it uses the new class.


## Advices and Tips

* You are an experienced TypeScript developer and you finish the lab early? 
  Try to change `PokemonService.loadPokemons` so that it returns a `Promise`. Next, change
  `index.ts` so that it uses `async/await`.

* Once you added Gulp (see below), try debugging with [Chrome DevTools](https://developer.chrome.com/devtools)
  again. Note how map-files enable source-level debugging in TypeScript.
  

## Tools

### Automate Tasks with Gulp

In this sample, we want to try out [Gulp](http://gulpjs.com/). Therefore, we have to install it
using *NPM* together with some plugins we are going to use:

```
npm init
npm install gulp gulp-concat gulp-sourcemaps gulp-watch gulp-typescript del concurrently pump --save-dev
```

Next, create a Gulpfile as shown [here](Gulpfile.js). Lookup the different modules used in the sample
to get a deeper understanding how this Gulpfile works.

Now you can use your Gulpfile by running `gulp` in the command line. Also try to run Gulp
continuously in the background by running `gulp watch`.

