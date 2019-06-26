(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Example = factory());
}(this, function () { 'use strict';

  var add = (function (a, b) {
    return a + b;
  });

  return add;

}));
