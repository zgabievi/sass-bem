'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var config = require('./config');

gulp.task('scss:build', function () {
	return gulp.src(config.scss.src)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(config.scss.dest));
});

gulp.task('scss:watch', function () {
	gulp.watch(config.scss.src, ['scss:build']);
});

gulp.task('scss', ['scss:build', 'scss:watch']);