const { src, dest, series, parallel } = require('gulp');

var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var typescript = require('gulp-typescript');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');

var cleanModule = require('./clean');

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
var typescriptCompiler = typescriptCompiler || null;

function buildSystem() {
  if (!typescriptCompiler) {
    typescriptCompiler = typescript.createProject('tsconfig.json', {
      "typescript": require('typescript')
    });
  }
  return src(paths.dtsSrc.concat(paths.source)) // XNM-NOTE: If slow bulid-system try somethinglike: gulp.src([paths.src + '**/*.ts', '!' + paths.github, '!' + paths.npm], { base: '.' })   
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(changed(paths.output, { extension: '.ts' }))
    .pipe(sourcemaps.init({ loadMaps: true }))   
    .pipe(typescriptCompiler())
    .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '/src' }))
    .pipe(dest(paths.output)); 
}
buildSystem.displayName = "Build system";
buildSystem.description = "Custom BUILD SYSTEM function";

function buildHtml() {
  return src(paths.html)
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(changed(paths.output, { extension: '.html' }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(paths.output));
}
buildHtml.displayName = "Build HTML";
buildHtml.description = "Custom BUILD HTML function";

function buildStyles() {
  // We instruct gulp to pull the source from the path we specified
  return src(paths.style)
    // The plumber step will ensure that if we write syntactically invalid 
    // sass, even though the step won't run, the gulp task won't exit. This
    // is helpful because it allows us to fix our syntax without having to 
    // restart the gulp watch task.
    .pipe(plumber())
    // The changed step will analyze which files have changed and require
    // rebuilding.
    .pipe(changed(paths.style))

    // The sass step will compile and compress the sass.
    .pipe(sass({ outputStyle: 'compressed' }))
       
    // And our last steps write the output and sourcemaps to the build destination.
    // properties: https://github.com/floridoo/gulp-sourcemaps
    //.pipe(sourcemaps.write('.'))
    .pipe(dest(paths.output))
    .pipe(browserSync.stream());
}
buildStyles.displayName = "Bild styles";
buildStyles.description = "Custom BUILED STYLES function";


exports.buildSystem = series(buildSystem);
exports.buildHtml = series(buildHtml);
exports.buildStyles = series(buildStyles);

exports.default = series(cleanModule.default, parallel(buildSystem, buildHtml, buildStyles));



