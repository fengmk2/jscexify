/*!
 * jscexify - lib/fs.js
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var jscexify = require('./jscexify');
var fs = require('fs');
var path = require('path');
fs.exists = fs.exists || path.exists;

var callbacks = [
  'exists',
  ['watch', 'event', 'filename'],
];

var standards = [
  'rename',
  'truncate',
  'chown', 'fchown', 'lchown',
  'chmod', 'fchmod', 'lchmod',
  'stat', 'lstat', 'fstat',
  'link', 'symlink', 'unlink',
  'readlink',
  'realpath',
  'rmdir', 'mkdir', 'readdir',
  'close', 'open',
  'utimes', 'futimes',
  'fsync',
  ['write', 'written', 'buffer'], 
  ['read', 'bytesRead', 'buffer'],
  'readFile',
  'writeFile',
  'appendFile',
];

jscexify(fs, callbacks, standards);

console.log(fs.watchAsync.toString())
