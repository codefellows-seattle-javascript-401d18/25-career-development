'use strict';

const readWrite = require('./lib/read-write');
// const transform = require('./lib/transform');

parser = new DOMParser();
doc = parser.parseFromString(stringContainingHTMLSource, "text/html");
