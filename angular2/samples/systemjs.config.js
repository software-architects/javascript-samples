// Note that this systemjs configuration file is simplified for easier start.
// For a more complete systemjs configuration, see Angular2 tutorial at
// https://github.com/angular/quickstart/blob/master/systemjs.config.js
(function (global) {
  // map tells the System loader where to look for things
  var map = {
    'app': 'app',

    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs'
  };

  // packages tells the System loader how to load when no filename and/or no extension.
  // Note that we use bundles here to reduce the number of files to load. 
  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    '@angular/common': { main: 'bundles/common.umd.js', defaultExtension: 'js' },
    '@angular/compiler': { main: 'bundles/compiler.umd.js', defaultExtension: 'js' },
    '@angular/core': { main: 'bundles/core.umd.js', defaultExtension: 'js' },
    '@angular/forms': { main: 'bundles/forms.umd.js', defaultExtension: 'js' },
    '@angular/http': { main: 'bundles/http.umd.js', defaultExtension: 'js' },
    '@angular/platform-browser': { main: 'bundles/platform-browser.umd.js', defaultExtension: 'js' },
    '@angular/platform-browser-dynamic': { main: 'bundles/platform-browser-dynamic.umd.js', defaultExtension: 'js' },
    '@angular/router': { main: 'index.js', defaultExtension: 'js' }
  };

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

})(this);
