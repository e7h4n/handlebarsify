var Handlebars = require('handlebars');
var through = require('through');
var path = require('path');
var _ = require('underscore');

var Handlebarsify = function (options) {
    this.options = options;
};

Handlebarsify.prototype.transform = function (file) {
    var options = _.defaults({
        extensions: ['.handlebars', '.handlebar', '.hbs']
    }, this.options);

    if (options.extensions.indexOf(path.extname(file)) === -1) {
        return through();
    }

    var buffer = '';

    return through(function (chunk) {
        buffer += chunk;
    }, function () {
        var precompile = Handlebars.precompile(buffer);
        precompile = 'module.exports = Handlebars.template(' + precompile + ');';

        if (options.module) {
            // use relative path to require Handlebars module
            // file: src/a/b/c/d.handlebars
            // module: src/d/e/Handlebars.js
            // --> hbsModule: ../../../../lib/Handlebars.js
            var from = path.dirname(file);
            var hbsModule = './' + path.relative(from, options.module);

            precompile = 'var Handlebars = require("' + hbsModule + '");' + precompile;
        }

        this.queue(precompile);
        this.queue(null);
    });
};

var transform = new Handlebarsify();
module.exports = transform.transform.bind(transform);

module.exports.create = function (options) {
    var transform = new Handlebarsify(options);
    return transform.transform.bind(transform);
};
