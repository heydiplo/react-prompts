"use strict";

exports.__esModule = true;


// mutates array
var removeFromArray = exports.removeFromArray = function removeFromArray(array, element) {
  for (var i = 0, l = array.length; i < l; i += 1) {
    if (array[i] === element) array.splice(i, 1);
  }
};