/*!
 * jscexify - lib/jscexify.js
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var Jscex = require('jscex');
require("jscex-jit").init();
require("jscex-async").init();
require("jscex-async-powerpack").init();
var Binding = Jscex.Async.Binding;

if (process.env.NODE_ENV === 'test' && Jscex.logger.level < Jscex.Logging.Level.INFO) {
  // ignore debug logging for test env
  Jscex.logger.level = Jscex.Logging.Level.INFO;
}

function transform(isCallback, m, args) {
  // support 'methodname' and ['methodname', 'arg1', 'arg2', ...]
  if (typeof args === 'string') {
    args = [args];
  }
  var method = args.shift();
  var fn = m[method];
  if (typeof fn !== 'function') {
    return;
  }
  var params = [fn];
  if (args.length >= 2) {
    params = params.concat(args);
  }
  var fnType = isCallback ? Binding.fromCallback : Binding.fromStandard;
  m[method + 'Async'] = fnType.apply(Binding, params);
}

module.exports = function jscexify(m, callbacks, standards) {
  callbacks = callbacks || [];
  standards = standards || [];

  callbacks.forEach(function (args) {
    transform(true, m, args);
  });

  standards.forEach(function (args) {
    transform(true, m, args);
  });
};