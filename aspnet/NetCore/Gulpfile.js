var path = require("path");
var gulp = require("gulp");
var del = require("del");
var ts = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");

// Demonstrate splitting Gulpfile
var config = require("./config");

// Create TypeScript project from tsconfig.json
var tsClientProject = ts.createProject("tsconfig.json", {
    typescript: require("typescript")
});

// Cleanup by deleting target directory
gulp.task("clean", function () {
    del.sync(path.join(config.APP_DIST, "**/*"));
});

// Compile the typescript files of the client app
gulp.task("clientApp", [], function () {
    var tsResult = gulp.src(path.join(config.APP_SRC, "**/*.ts"))
        .pipe(sourcemaps.init())
    	.pipe(ts(tsClientProject))
        .pipe(sourcemaps.write("."))
  		.pipe(gulp.dest(config.APP_DIST));
});

gulp.task("index", [], function () {
    // Combine external styles into single file
    gulp.src([ "node_modules/bootstrap/dist/css/bootstrap.css" ])
        .pipe(gulp.dest(config.APP_DIST));

    // Copy all HTML files
    gulp.src(path.join(config.APP_SRC, "**/*.html"))
        .pipe(gulp.dest(config.APP_DIST));
});

//Set a default tasks
gulp.task("default", ["clean", "clientApp", "index"], function () { });

// Define a watch task
gulp.task("watch", function () {
    gulp.watch(path.join(config.APP_SRC, "**/*"), ["default"]);
});