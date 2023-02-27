'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const terser = require('gulp-terser');
const rename = require('gulp-rename');

function es() {
    return gulp.src('./sass/styles.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({basename: 'styles.min'}))
        .pipe(gulp.dest('./css'));
}

/*function es() {
    return gulp.src('./js/scripts.js')
        .pipe(terser())
        .pipe(rename({basename: 'scripts.min'}))
        .pipe(gulp.dest('./js'));
}*/

/*function es(){
    minsass();
    minjs();
}*/

exports.default = es;
