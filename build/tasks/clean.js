const { src, series } = require('gulp');
var paths = require('../paths');
var del = require('del');
var vinylPaths = require('vinyl-paths');

var aureliaBundler = require('aurelia-bundler');
var bundles = require('../bundles.js');
var config = {
  force: true,
  baseURL: '.',
  configPath: './config.js',
  bundles: bundles.bundles
};

function unbundle() {
  return aureliaBundler.unbundle(config);
}
unbundle.displayName = "Unbundle";
unbundle.description = "Custom UNBUNDLE function";


////deletes all files in the output path
function clean() {  
  return src([paths.output], { allowEmpty: true })
    .pipe(vinylPaths(del));
}
clean.displayName = "Clean";
clean.description = "Custom CLEAN function";


exports.default = series(unbundle, clean);

