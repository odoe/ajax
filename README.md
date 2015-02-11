# UnchartedCode Ajax [![Build Status][travis-badge]][travis-badge-url]

This is an extremely simple wrapper around [jQuery's ajax](http://api.jquery.com/jquery.ajax/) method which makes working with it testable in an Ember environment. Comparable to [ic-ajax](https://github.com/instructure/ic-ajax).

## Installation

Include the library as a dependency from within an [ember-cli](http://www.ember-cli.com/) application.

```bash
ember install:addon ember-cli-uncharted-ajax
```

## Usage

Import into your project

```javascript
import UnchartedAjax from 'uncharted-ajax';
```

and then use it in your code.

```javascript
UnchartedAjax(
  url: "https://api.somedomain.com/user"
  method: "POST"
)
```

## Development

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

[travis-badge]: https://travis-ci.org/unchartedcode/ajax.svg?branch=master
[travis-badge-url]: https://travis-ci.org/unchartedcode/ajax
