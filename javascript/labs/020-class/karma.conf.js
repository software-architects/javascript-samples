module.exports = function (config) {
    "use strict";

    config.set({
        frameworks: ['jasmine'],

        files: [
            'pokemon-service.js',
            'pokemon-service.spec.js'
        ],

        logLevel: config.LOG_INFO,

        browsers: ['Chrome'],

        // autoWatch: true,

        singleRun: true
    });
};
