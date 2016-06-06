module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'jasmine'],
    files: [
      'js/*.js',
      'test/*Spec.js'
    ],
    exclude: [],
    preprocessors: {
      'test/*Spec.js': ['browserify']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    browserify: {
      debug: true,
      transform: []
    },
    singleRun: false,
    concurrency: Infinity,
    plugins: [
      'karma-browserify'
    ]
  });
};
