var gulp = require('gulp'),
  gutil = require('gulp-util'),
  gulpSass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  uglifyJs = require('gulp-uglify'),
  uglifyCss = require('gulp-uglifycss');


var jsSources = [ 
  'js/vendor/jquery-1.11.2.min.js',
  'js/main.js'
];

// concatenate and uglify js files
gulp.task('js-concat-ug', function(){
  return gulp.src(jsSources)
    .pipe(concat('scripts.min.js'))
    .pipe(uglifyJs())
    .pipe(gulp.dest('js'));
});

// process scss to css, then minify
gulp.task('sass-ug', function() {
  return gulp.src('scss/*.scss')
    .pipe(sourcemaps.init())
      .pipe(gulpSass().on('error', gulpSass.logError))
      .pipe(sourcemaps.write('/maps'))
      .pipe(uglifyCss({
          "uglyComments": true
      }))
      .pipe(gulp.dest('css'));
});

// watch task
gulp.task('default', function() {
  gulp.watch('js/main.js', ['js-concat-ug']);
  gulp.watch('scss/*.scss', ['sass-ug']);
});

