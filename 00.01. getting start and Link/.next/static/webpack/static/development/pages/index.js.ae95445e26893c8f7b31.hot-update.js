webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "/Users/oyangchin/Documents/practice/Nextjs/NEXT-Demo/00.01. getting start and Link/components/MyLayout.js";

// components/MyLayout.js

var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD' //===== error
  // const withLayout = Page => {
  //   return () => (
  //     <div style={layoutStyle}>
  //       <Header />
  //       {props.children}
  //     </div>
  //   )
  // }
  // export default withLayout
  // //===== success
  // export default function Layout(props) {
  //   return (
  //     <div style={layoutStyle}>
  //       <Header />
  //       {props.children}
  //     </div>
  //   )
  // }
  //===== success

};

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.ae95445e26893c8f7b31.hot-update.js.map