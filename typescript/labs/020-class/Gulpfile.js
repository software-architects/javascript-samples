"use strict";
/* jshint node: true */

var sources = ['pokemon-service.ts', 'index.ts'];

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    pump = require('pump'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    del = require('del'),
    ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', function (cb) {
    pump([
        gulp.src(sources),
        sourcemaps.init(),
        tsProject(),
        concat('scripts-all.js'),
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
