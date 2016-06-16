/* globals module, APPLICATION_SPEC  */

// Karma configuration

module.exports = function (config) {
  'use strict';

  var reporters = ['mocha', 'coverage', 'notify', 'growl'];
  if (config.singleRun) {
    reporters = ['dots'];
  }

  config.set({
    // base path, based on tmp/ folder
    basePath: '..',

    // frameworks to use
    frameworks: [
      'mocha',
      'chai',
      'sinon-chai',
    ],

    // list of files / patterns to load in the browser
    files: [
      'spec/javascripts/**/*_factory.js',
      APPLICATION_SPEC,
      'spec/javascripts/**/*_spec.js',
      'https://cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.10/ngStorage.min.js',
      'app/views/partials/**/*.html.erb',
    ],

    // list of files to exclude
    exclude: [],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: reporters,

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN ||
    //                  config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    // Preprocessors
    preprocessors: {
      'app/assets/javascripts/admin/angular/**/*.js': ['jshint', 'coverage'],
      'app/views/partials/**/*.html.erb': ['ng-html2js'],
    },

    coverageReporter: {
      dir: 'coverage/javascript/',
      reporters: [
        {
          type: 'html',
          subdir: 'report-html',
        }, {
          type: 'text-summary',
        },
      ],
    },

    // add the plugin settings
    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/views/',
      stripSuffix: '.erb',
    },

  });
};
