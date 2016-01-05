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
	sourcemaps = require('gulp-sourcemaps');

var watchify = require('watchify');
var notify = require('gulp-notify');
var htmlreplace = require('gulp-html-replace');

var nodeEnv = process.env.NODE_ENV;

const browserSync = require('browser-sync'),
	reload = browserSync.reload;

const paths = {
	SRC: './public',
	DIST: './public/dist',
	TEST: './test'};

paths.SCRIPTS = [paths.SRC + '/scripts/**/*.jsx', paths.SRC + '/scripts/**/*.js'];
paths.STYLES = [paths.SRC + '/styles/**/*.scss'];
paths.TESTS = [paths.TEST + '/**/*.js'];


function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}

function buildScript(file, watch) {
  
  var props = {
    entries: ['./public/scripts/' + file],
    debug : true,
    transform:  [babelify.configure({presets: ['react', 'es2015']})]
  };

  // watchify() if watch requested, otherwise run browserify() once 
  var bundler = watch ? watchify(browserify(props)) : browserify(props);

  function rebundle() {
    var stream = bundler.bundle();
    if(nodeEnv == "prod") {
			gulp.src('./public/index.html')
				.pipe(htmlreplace({
							'js': '/app.min.js'
						}))
				.pipe(gulp.dest('./public/build/'));
      return stream
          .on('error', handleErrors)
          .pipe(source(file))
          .pipe(buffer())
          .pipe(uglify())
          .pipe(rename('app.min.js'))
          .pipe(gulp.dest('./public/build'));
    }

		gulp.src('./public/index.html')
				.pipe(htmlreplace({
							'js': '/main.js'
						}))
				.pipe(gulp.dest('./public/build/'));
    return stream
        .on('error', handleErrors)
        .pipe(source(file))
        .pipe(gulp.dest('./public/build/'))
        .pipe(reload({stream:true}));
  }

  // listen for an update and run rebundle
  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });

  // run it once the first time buildScript is called
  return rebundle();
}

gulp.task('scripts', function() {
  return buildScript('main.js', false); // this will once run once because we set watch to false
});


// gulp.task('compile', function() {

// 	var mainFilePath = paths.SRC + "/scripts/config/main.js";

// 	var bundler = browserify({
// 		entries: mainFilePath,
// 		debug: true,
// 		transform: [babelify.configure({presets: ["es2015", "react"]})]
// 	});

// 	return bundler.bundle()
// 			.pipe(source("main.js"))

// 			.pipe(buffer())
// 			.pipe(sourcemaps.init({loadMaps: true}))
// 			    // Add transformation tasks to the pipeline here.
// //			    .pipe(uglify())
// //			    .on('error', gutil.log)
// 			.pipe(sourcemaps.write('./'))

// 			.pipe(gulp.dest(paths.DIST + "/scripts"));

// //	return gulp.src(paths.SCRIPTS)
// //		.pipe(babel({
// //			presets: ['es2015', 'react']
// //		}))
// //		.pipe(browserify())
// //		.pipe(gulp.dest(paths.DIST + '/scripts'));
// });

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
			baseDir: paths.SRC + '/build'
		}
	});

	gulp.watch(paths.SCRIPTS, ['scripts']).on('change', browserSync.reload);
	gulp.watch(paths.STYLES, ['style']).on('change', browserSync.reload);
});

gulp.task('default', ['scripts', 'style']);

