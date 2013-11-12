var browserify = require('./');
var through = require('through');

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            globalHandlebars: {
                files: {
                    'test/dist/test.global.js': 'test/src/test.js'
                },
                options: {
                    transform: [browserify.create({
                        module: null
                    })]
                },
            },
            npm: {
                files: {
                    'test/dist/test.npm.js': 'test/src/test.js'
                },
                options: {
                    transform: [browserify]
                },
            },
            fakeHandlebars: {
                files: {
                    'test/dist/test.fake.js': 'test/src/test.js'
                },
                options: {
                    transform: [browserify.create({
                        module: './test/src/FakeHandlebars.js'
                    })]
                }
            }
        },

        mocha: {
            options: {
                run: true
            },
            all: ['test/test.*.html']
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-mocha');

    grunt.task.registerTask('test', ['browserify', 'mocha']);
};
