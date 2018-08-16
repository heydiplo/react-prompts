'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('./constants');

var initialState = [];
var index = 0;

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.OPEN_PROMPT:
      {
        index += 1;

        return [].concat(state, [_extends({}, action.payload, { id: index })]);
      }
    case _constants.CLOSE_PROMPT:
      {
        var newState = [];
        if (!action.payload.id) {
          throw new Error("id is required to close prompt");
        }
        var _id = action.payload.id;

        for (var i = 0, l = state.length; i < l; i += 1) {
          if (state[i].id !== _id) newState.push(state[i]);
        }

        return newState;
      }
    default:
      {
        return state;
      }
  }
};