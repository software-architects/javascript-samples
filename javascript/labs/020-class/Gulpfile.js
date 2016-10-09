"use strict";
/* jshint node: true */

var sources = ['pokemon-service.js', 'index.js'];

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    del = require('del');

gulp.task('scripts', function (cb) {
    pump([
        gulp.src(sources),
        sourcemaps.init(),
        concat('scripts-all.js'),
        uglify(),
        sourcemaps.write('./'),
        gulp.dest('./')
    ],
        cb);
});

gulp.task('clean', function () {
    return del([
        'scripts-all.*'
    ]);
});

gulp.task('watch', function () {
    gulp.watch(sources, ['scripts']);
});

gulp.task('default', ['scripts']);
