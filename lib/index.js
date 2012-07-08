/*!
 * jscexify - lib/index.js
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var modules = [
  'fs'
];

modules.forEach(function (name) {
  require('./' + name);
});
