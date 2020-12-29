self["webpackHotUpdate_hcorta_react_echarts"]("main",{

/***/ "./src/components/ReactEcharts/index.js":
/*!**********************************************!*\
  !*** ./src/components/ReactEcharts/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReactEcharts": () => /* binding */ ReactEcharts
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts/lib/echarts */ "./node_modules/echarts/lib/echarts.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils */ "./src/utils/index.js");
 // Dependencies

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




 // Utils


var ReactEcharts = /*#__PURE__*/function (_Component) {
  _inherits(ReactEcharts, _Component);

  var _super = _createSuper(ReactEcharts);

  function ReactEcharts(props) {
    var _this;

    _classCallCheck(this, ReactEcharts);

    _this = _super.call(this, props);

    _this.disposeEchartsInstance = function () {
      _this.echartsLib.dispose(_this.containerRef);
    };

    _this.setEchartsInstance = function () {
      _this.echartsInstance = _this.echartsLib.init(_this.containerRef, _this.props.theme, _this.props.options);
    };

    _this.setResizeObserver = function () {
      var ro = new ResizeObserver(function () {
        _this.echartsInstance.resize();
      });
      ro.observe(_this.containerRef);
    };

    _this.bindEchartsEvents = function () {
      var _this$props = _this.props,
          onEvents = _this$props.onEvents,
          on = _this$props.on;

      if (on) {
        _this.echartsInstance.on(on);
      }

      var _loop = function _loop(event) {
        if (typeof event === 'string' && typeof onEvents[event] === 'function') {
          _this.echartsInstance.on(event, function (param) {
            onEvents[event](param, _this.echartsInstance);
          });
        }
      };

      for (var event in onEvents) {
        _loop(event);
      }
    };

    _this.renderDOM = function () {
      _this.echartsInstance.setOption(_this.props.option, _this.props.notMerge, _this.props.lazyUpdate);
    };

    _this.renderLoading = function () {
      if (_this.props.isLoading) {
        _this.echartsInstance.showLoading(_this.props.loadingOption);
      }

      _this.echartsInstance.hideLoading();
    };

    _this.echartsLib = echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_2__;
    _this.echartsInstance = null;
    _this.containerRef = null;
    return _this;
  }

  _createClass(ReactEcharts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setEchartsInstance();
      this.setResizeObserver();
      this.bindEchartsEvents();
      this.renderLoading();
      this.renderDOM();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(prevProps) {
      return this.props.shouldComponentUpdate(prevProps, this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('UNMONUT');
      this.disposeEchartsInstance();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!(0,utils__WEBPACK_IMPORTED_MODULE_4__.isEqual)(prevProps.isLoading, this.props.isLoading)) {
        this.renderLoading();
      }

      if (!(0,utils__WEBPACK_IMPORTED_MODULE_4__.isEqual)(prevProps.lazyUpdate, this.props.lazyUpdate) || !(0,utils__WEBPACK_IMPORTED_MODULE_4__.isEqual)(prevProps.notMerge, this.props.notMerge) || !(0,utils__WEBPACK_IMPORTED_MODULE_4__.isEqual)(prevProps.option, this.props.option) || !(0,utils__WEBPACK_IMPORTED_MODULE_4__.isEqual)(prevProps.theme, this.props.theme) || !(0,utils__WEBPACK_IMPORTED_MODULE_4__.isEqual)(prevProps.options, this.props.options) || !(0,utils__WEBPACK_IMPORTED_MODULE_4__.isEqual)(prevProps.onEvents, this.props.onEvents)) {
        return this.renderDOM();
      }

      if (!(0,utils__WEBPACK_IMPORTED_MODULE_4__.isEqual)(prevProps.style, this.props.style) || !(0,utils__WEBPACK_IMPORTED_MODULE_4__.isEqual)(prevProps.className, this.props.className)) {
        return this.echartsInstance.resize();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          style = _this$props2.style,
          className = _this$props2.className,
          id = _this$props2.id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        ref: function ref(_ref) {
          return _this2.containerRef = _ref;
        },
        style: style,
        id: id,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('react-echarts', className)
      });
    }
  }]);

  return ReactEcharts;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component); // ReactEcharts.propTypes = {
//   option: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
//   echarts: PropTypes.object, // eslint-disable-line react/forbid-prop-types
//   notMerge: PropTypes.bool,
//   lazyUpdate: PropTypes.bool,
//   style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
//   className: PropTypes.string,
//   theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   onChartReady: PropTypes.func,
//   showLoading: PropTypes.bool,
//   loadingOption: PropTypes.object, // eslint-disable-line react/forbid-prop-types
//   onEvents: PropTypes.object, // eslint-disable-line react/forbid-prop-types
//   options: PropTypes.shape({
//     devicePixelRatio: PropTypes.number,
//     renderer: PropTypes.oneOf(['canvas', 'svg']),
//     width: PropTypes.oneOfType([
//       PropTypes.number,
//       PropTypes.oneOf([null, undefined, 'auto'])
//     ]),
//     height: PropTypes.oneOfType([
//       PropTypes.number,
//       PropTypes.oneOf([null, undefined, 'auto'])
//     ])
//   }),
//   shouldSetOption: PropTypes.func
// }

ReactEcharts.defaultProps = {
  style: {},
  className: '',
  shouldComponentUpdate: function shouldComponentUpdate() {
    return true;
  },
  notMerge: false,
  lazyUpdate: false,
  theme: null,
  onChartReady: function onChartReady() {},
  isLoading: false,
  loadingOption: null,
  onEvents: {},
  on: null,
  options: {
    renderer: 'svg'
  },
  // External added props
  echartsRef: null,
  onMount: null,
  onChange: null,
  // echarts option as props
  title: null,
  legend: null,
  grid: null,
  xAxis: null,
  yAxis: null,
  polar: null,
  radiusAxis: null,
  angleAxis: null,
  radar: null,
  dataZoom: null,
  visualMap: null,
  tooltip: null,
  axisPointer: null,
  toolbox: null,
  brush: null,
  geo: null,
  parallel: null,
  parallelAxis: null,
  singleAxis: null,
  timeline: null,
  graphic: null,
  calendar: null,
  dataset: null,
  aria: null,
  series: null,
  color: null,
  backgroundColor: null,
  textStyle: null,
  animation: true,
  animationThreshold: 2000,
  animationDuration: 1000,
  animationEasing: 'cubicOut',
  animationDelay: 0,
  animationDurationUpdate: 300,
  animationEasingUpdate: 'cubicOut',
  animationDelayUpdate: 0,
  blendMode: 'source-over',
  hoverLayerThreshold: 3000,
  useUTC: false,
  media: null
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "973cb9e96689eda93707"
/******/ 	})();
/******/ 	
/******/ }
);
//# sourceMappingURL=main.971b9a603fc11c96305e.hot-update.js.map