const gulp = require('gulp');

const babelify = require('babelify'),
	sass = require('gulp-sass'),
	jasmine = require('gulp-jasmine'),
	uglify = require('gulp-uglify'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	gutil = require('gulp-util'),
	buffer = require('vinyl-buffer'),
	sourcemaps = require('gulp-sourcemaps');

const browserSync = require('browser-sync'),
	reload = browserSync.reload;

const paths = {
	SRC: './public',
	DIST: './public/dist',
	TEST: './test'};

paths.SCRIPTS = [paths.SRC + '/scripts/**/*.jsx', paths.SRC + '/scripts/**/*.js'];
paths.STYLES = [paths.SRC + '/styles/**/*.scss'];
paths.TESTS = [paths.TEST + '/**/*.js'];

gulp.task('compile', function() {

	var mainFilePath = paths.SRC + "/scripts/config/main.js";

	var bundler = browserify({
		entries: mainFilePath,
		debug: true,
		transform: [babelify.configure({presets: ["es2015", "react"]})]
	});

	return bundler.bundle()
			.pipe(source("main.js"))

			.pipe(buffer())
			.pipe(sourcemaps.init({loadMaps: true}))
			    // Add transformation tasks to the pipeline here.
//			    .pipe(uglify())
//			    .on('error', gutil.log)
			.pipe(sourcemaps.write('./'))

			.pipe(gulp.dest(paths.DIST + "/scripts"));

//	return gulp.src(paths.SCRIPTS)
//		.pipe(babel({
//			presets: ['es2015', 'react']
//		}))
//		.pipe(browserify())
//		.pipe(gulp.dest(paths.DIST + '/scripts'));
});

gulp.task('test', function () {
	return gulp.src(paths.TESTS)
		.pipe(jasmine());
});

gulp.task('style', function () {
	return gulp.src(paths.STYLES)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(paths.DIST + '/styles'));
});

gulp.task('serve', function() {
	
	browserSync.init({
		server: {
			baseDir: paths.SRC
		}
	});

	gulp.watch(paths.SCRIPTS, ['compile']).on('change', browserSync.reload);
	gulp.watch(paths.STYLES, ['style']).on('change', browserSync.reload);
});

gulp.task('default', ['compile', 'style']);

