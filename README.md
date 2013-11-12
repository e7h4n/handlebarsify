# handlebarsify

Transform handlebars template form browserify.

## CLI Usage

```
    npm install handlebarsify
    browserify -t handlebarsify main.js > main.bundle.js
```

Where main.js can be:

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

Notice: in cli usage, handlebarsify will *NOT* package handlebars runtime to bundle file, so you must include handlebars.runtime.js in your html manually like this:

```html
<script src="handlebars.runtime.js"></script>
<script src="main.bundle.js"></script>
```

## API Usage

Handlebarsify API support two transform mode: global mode and custom module mode.

The behavior of global mode is same with handlebarsify CLI usage, so you need include handlebars.runtime.js manually.

```js
    var handlebarsify = require('handlebarsify');
    var browserify = require('browserify');
    var b = browserify('./main.js');

    b.transform(handlebarsify);
    b.bundle().pipe(fs.createWriteStream('./main.bundle.js'));
```

The custom module mode, allow you assign a Handlebars module name and bundle it.

```js
    var handlebarsify = require('handlebarsify');
    var browserify = require('browserify');
    var b = browserify('./main.js');

    b.transform(handlebarsify.create({
        module: 'handlebars-runtime'
    });
    b.bundle().pipe(fs.createWriteStream('./main.bundle.js'));
```
