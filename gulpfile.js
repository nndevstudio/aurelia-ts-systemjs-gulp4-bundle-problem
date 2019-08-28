const watchItModule = require('./build/tasks/watchit');
const exportReleaseModule = require('./build/tasks/export-release');
const { task, series, parallel} = require('gulp');

const bs = require('browser-sync').create();
function browserSync() {
  bs.init({
    server: {
      baseDir: './dist/'
    }
  });
}

exports.default = exports.watchit = parallel(browserSync, watchItModule.default);
exports.export = series(exportReleaseModule.default);


//------------------------------------------------------------------------
//var bundles = require('./build/bundles.js');
//var aureliaBundler = require('aurelia-bundler');
//var config = {
//  force: true,
//  baseURL: '.',
//  configPath: './config.js',
//  bundles: bundles.bundles
//};
//function bundle() {
//  return aureliaBundler.bundle(config);
//}
//exports.bundle = series(bundle);

