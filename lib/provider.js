'use strict';

exports.__esModule = true;

var _react = require('react');

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PromptsProvider = function (_React$Component) {
  _inherits(PromptsProvider, _React$Component);

  function PromptsProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, PromptsProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      prompts: _this.props.store.getState()
    }, _this.updateState = function (prompts) {
      return _this.setState({ prompts: prompts });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  PromptsProvider.prototype.componentDidMount = function componentDidMount() {
    this.props.store.subscribe(this.updateState);
  };

  PromptsProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    this.props.store.unsubcribe(this.updateState);
  };

  PromptsProvider.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        close = _props.store.close;
    var prompts = this.state.prompts;


    return children({ prompts: prompts, close: close });
  };

  return PromptsProvider;
}(React.Component);

exports.default = PromptsProvider;