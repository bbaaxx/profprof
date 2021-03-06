/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app'),
    pickFiles = require('broccoli-static-compiler'),
    mergeTrees = require('broccoli-merge-trees');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('bower_components/moment/min/moment.min.js');
app.import('bower_components/pikaday/pikaday.js');
app.import('bower_components/showdown/compressed/showdown.js');
app.import('bower_components/emberfire/dist/emberfire.min.js');

var bootstrapDir = 'bower_components/bootstrap-sass-official/assets';

// select bootstrap JavaScript components to include
var bootstrapComponents = ['collapse','dropdown', 'alert'];

for (var index in bootstrapComponents) {
  app.import(bootstrapDir + '/javascripts/bootstrap/' + bootstrapComponents[index] + '.js');
}

var bootstrapAssets = pickFiles(bootstrapDir + '/fonts/bootstrap', {
  srcDir: '/',
  destDir: '/fonts/bootstrap'
});
var fontawesomeFonts = pickFiles('bower_components/fontawesome/fonts', {
  srcDir: '/',
  destDir: '/assets/fonts'
});

module.exports = mergeTrees([app.toTree(), bootstrapAssets, fontawesomeFonts ]);

