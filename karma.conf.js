// Karma configuration
// Generated on Fri Mar 20 2020 18:00:13 GMT-0300 (GMT-03:00)

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine"],

    // list of files / patterns to load in the browser
    files: [
      "node_modules/angular/angular.js",
      "node_modules/angular-mocks/angular-mocks.js",
      "node_modules/angular-ui-router/release/angular-ui-router.js",
      "src/app/spas/app.module.js",
      "src/app/spas/contatos/detalhar/detalhe-contatos.controller.spec.js",

      /*"specs/app/spas/home/home-spec.js",
      "specs/app/spas/menu/menu-spec.js",
      "specs/app/spas/perfil/perfil-incluir-alterar-spec.js",
      "specs/app/spas/perfil/perfil-listar-spec.js",
      "specs/app/spas/pessoa/pessoa-incluir-alterar-spec.js",*/
     // "specs/app/spas/pessoa/pessoa-listar-spec.js",
      /* "specs/app/spas/stefanini/filters-spec.js",*/
      
      //"specs/app/app.js",

      //"specs/app/spas/pessoa/*.spec.js"
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress", "spec"],

    // web server port
    port: 9876,

    hostname: "localhost",

    listenAddress: "localhost",

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["Chrome"],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};