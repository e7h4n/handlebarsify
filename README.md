# handlebarsify

[![Build Status](https://travis-ci.org/perfectworks/handlebarsify.png?branch=master)](https://travis-ci.org/perfectworks/handlebarsify)

Transform handlebars template for [browserify]. It's well tested, stable and fast.

## Usage

Npm install first:

```
    npm install handlebarsify handlebars
```

Then whip up a `main.js` which `require` a handlebars template `tmp.handlebars`:

```js
var tmpl = require('./tmpl.handlebars');
console.log(tmpl({
    name: 'pw'
});
```

And tmpl.handlebars can be:

```handlebars
hello {{name}}.
```

### CLI usage

Use `-t` flag of browserify to use it:

```bash
browserify -t handlebarsify main.js > main.bundle.js
```

### API usage

```js
var handlebarsify = require('handlebarsify');
var browserify = require('browserify');
var b = browserify('./main.js');

b.transform(handlebarsify);
b.bundle().pipe(fs.createWriteStream('./main.bundle.js'));
```

## Configure

use `handlebarsify.create(options)` to get a configured transformer:

```js
var handlebarsify = require('handlebarsify').create({
    extensions: ['.handlebars', '.hbs'],
    module: 'handlebars/dist/cjs/handlebars.runtime'
});

// ...

b.transform(handlebarsify);
```

Support `options`:
* `extensions`: handlebars file extension name list. `[default: ['.handlebars', '.hbs']]`
* `module`: module path which point to `handlebars` or `handlebars.runtime`. `[default: 'handlebars/dist/cjs/handlebars.runtime']`
 * If `module` is `null`, handlebarsify will not require any handlebars module. This is useful when you have a global `Handlebars` in page.

## Coming soon

 * SourceMap

## License

MIT

[browserify]: http://browserify.org/
