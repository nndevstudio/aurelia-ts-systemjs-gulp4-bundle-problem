const { series } = require('gulp');
var tools = require('aurelia-tools');
var args = require('../args');

// source code for the tasks called in this file
// is located at: https://github.com/aurelia/tools/blob/master/src/dev.js

// updates dependencies in this folder
// from folders in the parent directory
function updateOwnDeps () {
    tools.updateOwnDependenciesFromLocalRepositories(args.depth);
}

// quickly pulls in all of the aurelia
// github repos, placing them up one directory
// from where the command is executed,
// then runs `npm install`
// and `gulp build` for each repo
function buildDevEnv() {
    tools.buildDevEnv();
}

// quickly pulls in all of the aurelia
// github repos, placing them up one directory
// from where the command is executed
function pullDevEnv() {
    tools.pullDevEnv();
}

exports.updateOwnDeps = series(updateOwnDeps);
exports.buildDevEnv = series(buildDevEnv);
exports.pullDevEnv = series(pullDevEnv);
