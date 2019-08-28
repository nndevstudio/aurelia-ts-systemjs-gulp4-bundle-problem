const { series } = require('gulp');
var aureliaBundler = require('aurelia-bundler');
var bundles = require('../bundles.js');

const buildModule = require('./build');

var config = {
  force: true,
  baseURL: '.',
  configPath: './config.js',
  bundles: bundles.bundles
};

function bundle() { 
  return aureliaBundler.bundle(config);
}
bundle.displayName = "Bundle";
bundle.description = "Custom BUNDLE function";

exports.default = series(buildModule.default, bundle);


