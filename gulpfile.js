var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var pkg = require('./package.json');
var Server = require('karma').Server;
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var tsify = require('tsify');
var uglify = require('gulp-uglify');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('browserify_module', ['build_module'], function () {
  return browserify('./public/namespace.js')
    .plugin(tsify)
    .bundle()
    .pipe(source(pkg.name + '-browser.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public/dist'));
});

gulp.task('build_module', function () {
  return gulp.src('src/ts/**/*.ts')
    .pipe(ts(tsProject))
    .pipe(gulp.dest('public/dist'));
});

gulp.task('test', ['browserify_module'], function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});
