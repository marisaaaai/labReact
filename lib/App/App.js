"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;
var _react = require("react");
var _Button = _interopRequireDefault(require("react-bootstrap/Button"));
var _card = _interopRequireDefault(require("../card/card"));
require("./app.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var _Array = [{
  type: "bb",
  image: require("../images/battleborn.png")
}, {
  type: "dya",
  image: require("../images/dya.jpg")
}, {
  type: "hf",
  image: require("../images/hotfuss.png")
}, {
  type: "st",
  image: require("../images/samstown.png")
}, {
  type: "s",
  image: require("../images/sawdust.png")
}, {
  type: "ww",
  image: require("../images/ww.jpg")
}, {
  type: "dh",
  image: require("../images/dh.jpg")
}, {
  type: "dwyw",
  image: require("../images/dwyw.jpg")
}];
function mezclar(array) {
  var length = array.length;
  for (var i = length; i > 0; i--) {
    var randomIndex = Math.floor(Math.random() * i);
    var currentIndex = i - 1;
    var temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}
function App() {
  var Array2 = _Array;
  var Array3 = _Array.concat(Array2);
  var _useState = (0, _react.useState)(mezclar.bind(null, Array3)),
    _useState2 = _slicedToArray(_useState, 2),
    cartas = _useState2[0],
    crearCartas = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    voltear = _useState4[0],
    setVoltear = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    correctas = _useState6[0],
    setCorrectas = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    voltearTodas = _useState8[0],
    setvoltearTodas = _useState8[1];
  var _useState9 = (0, _react.useState)(0),
    _useState10 = _slicedToArray(_useState9, 2),
    movimientos = _useState10[0],
    setMovimientos = _useState10[1];
  var _useState11 = (0, _react.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    completo = _useState12[0],
    setCompleto = _useState12[1];
  var timeout = (0, _react.useRef)(null);
  console.log("hola");
  var regresar = function regresar() {
    setvoltearTodas(true);
  };
  var cara = function cara() {
    setvoltearTodas(false);
  };
  var check = function check() {
    if (Object.keys(correctas).length === _Array.length) {
      setCompleto(true);
    }
  };
  var evaluar = function evaluar() {
    var _voltear = _slicedToArray(voltear, 2),
      first = _voltear[0],
      second = _voltear[1];
    cara();
    if (cartas[first].type === cartas[second].type) {
      setCorrectas(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, cartas[first].type, true));
      });
      setVoltear([]);
      return;
    }
    // This is to flip the cards back after 500ms duration
    timeout.current = setTimeout(function () {
      setVoltear([]);
    }, 500);
  };
  var handleCardClick = function handleCardClick(index) {
    if (voltear.length === 1) {
      setVoltear(function (prev) {
        return [].concat(_toConsumableArray(prev), [index]);
      });
      setMovimientos(function (moves) {
        return moves + 1;
      });
      regresar();
    } else {
      clearTimeout(timeout.current);
      setVoltear([index]);
    }
  };
  (0, _react.useEffect)(function () {
    var timeout = null;
    if (voltear.length === 2) {
      timeout = setTimeout(evaluar, 300);
    }
    return function () {
      clearTimeout(timeout);
    };
  }, [voltear]);
  (0, _react.useEffect)(function () {
    check();
  }, [correctas]);
  var checkIsFlipped = function checkIsFlipped(index) {
    return voltear.includes(index);
  };
  var checkIsInactive = function checkIsInactive(cartas) {
    return Boolean(correctas[cartas.type]);
  };
  var Restart = function Restart() {
    setCorrectas({});
    setVoltear([]);
    setCompleto(false);
    setMovimientos(0);
    setvoltearTodas(false);
    crearCartas(mezclar(_Array.concat(_Array)));
  };
  console.log("what");
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "App",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("header", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
        children: "Juega Memoria a The Killers"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "container",
      children: cartas.map(function (card, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_card.default, {
          card: card,
          index: index,
          isDisabled: voltearTodas,
          isInactive: checkIsInactive(cartas),
          isFlipped: checkIsFlipped(index),
          onClick: handleCardClick
        }, index);
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("footer", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "moves",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "bold",
          children: "Movimientos: "
        }), movimientos]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "restart",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        onClick: Restart,
        variant: "primary",
        children: "Restart"
      })
    })]
  });
}