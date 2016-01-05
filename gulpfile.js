const gulp = require('gulp');

const babelify = require('babelify'),
	sass = require('gulp-sass'),
	jasmine = require('gulp-jasmine'),
	uglify = require('gulp-uglify'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	gutil = require('gulp-util'),
	buffer = require('vinyl-buffer'),
	rename = require('gulp-rename'),
	watchify = require('watchify'),
	notify = require('gulp-notify'),
	htmlreplace = require('gulp-html-replace');

const browserSync = require('browser-sync'),
	reload = browserSync.reload;

var nodeEnv = process.env.NODE_ENV;

const paths = {
	SRC: './public',
	DIST: './public/build',
	TEST: './test'};

paths.SCRIPTS = [paths.SRC + '/scripts/**/*.js'];
paths.STYLES = [paths.SRC + '/styles/**/*.scss'];
paths.TESTS = [paths.TEST + '/**/*.js'];


function handleErrors() {
	var args = Array.prototype.slice.call(arguments);
	notify.onError({
		title: 'Compile Error',
		message: '<%= error.message %>'
	}).apply(this, args);
	this.emit('end');
}

function bindBundleToHtml (bundleName) {
	gulp.src(paths.SRC + '/index.html')
			.pipe(htmlreplace({
					'js': '/' + bundleName
				}))
			.pipe(gulp.dest(paths.DIST));
}

function buildScript(file, watch) {

	var props = {
		entries: [paths.SRC + '/scripts/' + file],
		debug : true,
		transform:  [babelify.configure({presets: ['react', 'es2015']})]
	};

	var bundler = watch ? watchify(browserify(props)) : browserify(props);

	function rebundle() {
		var stream = bundler.bundle();

		if(nodeEnv == "prod") {
			var bundleName = 'app.min.js';

			bindBundleToHtml(bundleName);
			return stream
					.on('error', handleErrors)
					.pipe(source(file))
					.pipe(buffer())
					.pipe(uglify())
					.pipe(rename(bundleName))
					.pipe(gulp.dest(paths.DIST));
		}

		bindBundleToHtml('main.js');
		return stream
				.on('error', handleErrors)
				.pipe(source(file))
				.pipe(gulp.dest(paths.DIST))
				.pipe(reload({stream:true}));
	}

	bundler.on('update', function() {
		rebundle();
		gutil.log('Rebundle...');
	});

	return rebundle();
}

gulp.task('scripts', function() {
  return buildScript('main.js', false);
});

gulp.task('test', function () {
	return gulp.src(paths.TESTS)
			.pipe(jasmine());
});

gulp.task('style', function () {
	return gulp.src(paths.STYLES)
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest(paths.DIST))
			.pipe(reload({stream:true}));
});

gulp.task('serve', function() {
	
	browserSync.init({
		server: {
			baseDir: paths.DIST
		}
	});

	gulp.watch(paths.SCRIPTS, ['scripts']);
	gulp.watch(paths.STYLES, ['style']);
});

gulp.task('default', ['scripts', 'style']);
