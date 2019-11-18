'use strict';

exports.__esModule = true;

var _constants = require('./constants');

var initialState = [];

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.OPEN_PROMPT:
      {
        return [].concat(state, [action.payload]);
      }
    case _constants.CLOSE_PROMPT:
      {
        var newState = [];
        if (!action.payload.id) {
          throw new Error("id is required to close prompt");
        }
        var id = action.payload.id;

        for (var i = 0, l = state.length; i < l; i += 1) {
          if (state[i].id !== id) newState.push(state[i]);
        }

        return newState;
      }
    default:
      {
        return state;
      }
  }
};