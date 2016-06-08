var browserify = require('browserify');
var gulp = require('gulp');
var rename = require("gulp-rename");
var Server = require('karma').Server;
var source = require('vinyl-source-stream');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('browserify_module', ['build_module'], function () {
  return browserify('./dist/namespace.js')
    .bundle()
    .pipe(source('calc.js'))
    .pipe(rename('calc-browser.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('build_module', function () {
  return gulp.src('src/ts/calc.ts')
    .pipe(ts(tsProject))
    .pipe(gulp.dest('dist'));
});

gulp.task('test', ['browserify_module'], function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});
