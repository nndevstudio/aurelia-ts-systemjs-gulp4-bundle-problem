'use strict';

const { src, dest, series } = require('gulp');
const del = require('del');
const vinylPaths = require('vinyl-paths');
const jspm = require('jspm');
const paths = require('../paths');
const bundles = require('../bundles.js');
const resources = require('../export.js');
const fs = require('fs');

const bundleModule = require('./bundle');

function getBundles() {
  let bl = [];
  for (let b in bundles.bundles) {
    bl.push(b + '*.js');
  }
  return bl;
}

function getExportList() {
  return resources.list.concat(getBundles());
}

function normalizeExportPaths() {
  const pathsToNormalize = resources.normalize;

  let promises =  pathsToNormalize.map(pathSet => {
    const packageName = pathSet[ 0 ];
    const fileList = pathSet[ 1 ];

    return jspm.normalize(packageName).then((normalized) => {
      const packagePath = normalized.substring(normalized.indexOf('jspm_packages'), normalized.lastIndexOf('.js'));
      return fileList.map(file => packagePath + file);
    });
  });

  return Promise.all(promises)
    .then((normalizedPaths) => {
      return normalizedPaths.reduce((prev, curr) => prev.concat(curr), []);
    });
}

function cleanExport () {
  return src([paths.exportSrv])
    .pipe(vinylPaths(del));
}
function exportCopy () {
  return src(getExportList(), { base: '.' })
    .pipe(dest(paths.exportSrv));
}
function exportNormalizedResources () {
  return normalizeExportPaths().then(normalizedPaths => {
    return src(normalizedPaths, { base: '.' })
      .pipe(dest(paths.exportSrv));
  });
}
function copyOidcClient() {
  return src('node_modules/oidc-client/lib/oidc-client.min.js')
    .pipe(dest('dist/'));
}
function renameOidcClient(done) {
  fs.rename('dist/oidc-client.min.js', 'dist/oidc-client.js', function (err) {
    if (err) {
      throw err;
    }
    done();
  });
}

exports.default = exports.export = series(bundleModule.default, copyOidcClient, renameOidcClient,
  cleanExport, exportNormalizedResources, exportCopy);
