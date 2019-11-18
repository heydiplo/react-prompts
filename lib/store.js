'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('./utils');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var prompts = [];
  var index = 0;
  var subscribers = [];

  var getState = function getState() {
    return prompts;
  };
  var subscribe = function subscribe(f) {
    subscribers.push(f);
  };
  var unsubcribe = function unsubcribe(f) {
    (0, _utils.removeFromArray)(subscribers, f);
  };
  var emit = function emit() {
    for (var i = 0, l = subscribers.length; i < l; i += 1) {
      subscribers[i](prompts);
    }
  };
  var act = function act(action) {
    var newPrompts = (0, _reducer2.default)(prompts, action);

    if (prompts !== newPrompts) {
      prompts = newPrompts;
      emit();
    }
  };
  var close = function close(id) {
    return act({ type: _constants.CLOSE_PROMPT, payload: { id: id } });
  };

  var open = function open(payload) {
    return new Promise(function (_resolve, _reject) {
      index += 1;
      var id = index;

      act({
        type: _constants.OPEN_PROMPT,
        payload: _extends({}, payload, {
          id: id,
          resolve: function resolve(value) {
            _resolve(value);
            close(id);
          },
          reject: function reject(error) {
            _reject(error);
            close(id);
          }
        })
      });
    });
  };

  return {
    getState: getState,
    subscribe: subscribe,
    unsubcribe: unsubcribe,
    open: open,
    close: close
  };
};