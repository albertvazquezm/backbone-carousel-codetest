'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./styles/**/*.scss', ['sass']);
});

gulp.task('dev', ['sass', 'sass:watch']);
