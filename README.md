# arm4log
A simple an easy to use file logging module for NodeJS

[![npm:](https://img.shields.io/npm/v/arm4log.svg)](https://www.npmjs.com/arm4design/arm4log)
[![github:](https://img.shields.io/github/release/arm4design/arm4log.svg)](https://github.com/arm4design/arm4log)
[![github:](https://img.shields.io/github/issues/arm4design/arm4log.svg)](https://github.com/arm4design/arm4log/issues)
[![Build Status](https://img.shields.io/travis/arm4design/arm4log.svg)](https://travis-ci.org/arm4design/arm4log)

### Install
````javascript
npm install arm4log
````

### Usage
##### Instantiation
The logger needs to be instantiated since the module itself exports the constructor function, so:
````javascript
var arm4log = require('arm4log');
var logger = new arm4log();
````

##### Options
The constructor accepts an object with the following properties:
* path {string} [optional] - defaults to __dirname
* filename {string} [optional] - defaults to 'log'

##### Logging levels
You can log in 4 different levels: INFO, WARNING, ERROR, DATA by using the proper method passing a string with the message to be logged. 
````javascript
logger.info('The info you want to log');
// [INFO][2016-03-05 00:18:44]: The info you want to log
logger.warning('The warning you want to log');
// [WARNING][2016-03-05 00:18:44]: The warning you want to log
logger.error('The error you want to log');
// [ERROR][2016-03-05 00:18:44]: The error you want to log
logger.data('The data you want to log');
// [DATA][2016-03-05 00:18:44]: The data you want to log
````

##### Full documentation
Check the jsdoc [here](http://arm4dev.com/jsdoc/arm4log/1.0.0/index.html)
or create it locally just installing [jsdoc](https://github.com/jsdoc3/jsdoc) and 
````javascript
jsdoc --readme ${path-to-readme} --package ${path-to-package.json} ${path-to-cloned-folder}
````

### Tests
It uses [mocha](https://github.com/mochajs/mocha) and [chai](https://github.com/chaijs/chai)
````javascript
npm test
````

### License
[GNU 3.0](https://github.com/arm4design/arm4log/blob/master/LICENSE)