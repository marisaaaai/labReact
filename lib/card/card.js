"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
require("./card.css");
var _k = _interopRequireDefault(require("../images/k.jpg"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Card = function Card(_ref) {
  var card = _ref.card,
    index = _ref.index,
    isInactive = _ref.isInactive,
    isFlipped = _ref.isFlipped,
    isDisabled = _ref.isDisabled,
    onClick = _ref.onClick;
  var handleClick = function handleClick() {
    !isFlipped && !isDisabled && onClick(index);
    console.log(card);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames.default)("card", {
      "is-flipped": isFlipped,
      "is-inactive": isInactive
    }),
    onClick: handleClick,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "card-face card-font-face",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: _k.default,
        alt: "k"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "card-face card-back-face",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: card.image,
        alt: "l"
      })
    })]
  });
};
var _default = Card;
exports.default = _default;