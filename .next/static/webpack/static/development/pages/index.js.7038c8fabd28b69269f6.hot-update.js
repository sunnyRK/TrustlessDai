webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/esm/react-toastify.js\");\n/* harmony import */ var _config_instances_contractInstances__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config/instances/contractInstances */ \"./config/instances/contractInstances.js\");\n/* harmony import */ var _config_web3_web3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config/web3/web3 */ \"./config/web3/web3.js\");\n/* harmony import */ var _config_web3_web3__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_config_web3_web3__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _functions_getWitness__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../functions/getWitness */ \"./functions/getWitness.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);\n\n\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\nvar Index = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Index, _Component);\n\n  var _super = _createSuper(Index);\n\n  function Index() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Index);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"ontransfer\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var accounts, daiInstance, approvehash, zkInstance, hash;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              _context.prev = 1;\n              _context.next = 4;\n              return _config_web3_web3__WEBPACK_IMPORTED_MODULE_13___default.a.eth.getAccounts();\n\n            case 4:\n              accounts = _context.sent;\n              _context.next = 7;\n              return Object(_config_instances_contractInstances__WEBPACK_IMPORTED_MODULE_12__[\"getERCContractInstance\"])(_config_web3_web3__WEBPACK_IMPORTED_MODULE_13___default.a);\n\n            case 7:\n              daiInstance = _context.sent;\n              _context.next = 10;\n              return daiInstance.methods.approve(\"0xBEe02FD1e5b9e3B34A856Fb1E6493dFC854968dB\", \"10\").send({\n                from: accounts[0]\n              });\n\n            case 10:\n              approvehash = _context.sent;\n              console.log(\"approveHash: \", approvehash);\n              _context.next = 14;\n              return Object(_config_instances_contractInstances__WEBPACK_IMPORTED_MODULE_12__[\"getZkSnarkInstance\"])(_config_web3_web3__WEBPACK_IMPORTED_MODULE_13___default.a);\n\n            case 14:\n              zkInstance = _context.sent;\n              _context.next = 17;\n              return zkInstance.methods.transferNoteToContract(\"10\", \"0xE33f4C2306eFE9BF66a64A3c42408d2Fe1Cb890f\").send({\n                from: accounts[0]\n              });\n\n            case 17:\n              hash = _context.sent;\n              console.log(\"Transaction hash: \", hash);\n              _context.next = 24;\n              break;\n\n            case 21:\n              _context.prev = 21;\n              _context.t0 = _context[\"catch\"](1);\n              console.log(_context.t0);\n\n            case 24:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 21]]);\n    })));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"onClaim\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      var accounts, zkInstance, witnessparams, response, hash;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              event.preventDefault();\n              _context2.prev = 1;\n              _context2.next = 4;\n              return _config_web3_web3__WEBPACK_IMPORTED_MODULE_13___default.a.eth.getAccounts();\n\n            case 4:\n              accounts = _context2.sent;\n              _context2.next = 7;\n              return Object(_config_instances_contractInstances__WEBPACK_IMPORTED_MODULE_12__[\"getZkSnarkInstance\"])(_config_web3_web3__WEBPACK_IMPORTED_MODULE_13___default.a);\n\n            case 7:\n              zkInstance = _context2.sent;\n              witnessparams = Object(_functions_getWitness__WEBPACK_IMPORTED_MODULE_15__[\"getWitness\"])('0xAeF37Da1db647bC187a46AEBEB662CF269636e54', // sender\n              '9', '0xE33f4C2306eFE9BF66a64A3c42408d2Fe1Cb890f', // receiver\n              '2');\n              console.log(witnessparams); // const url = \"http://localhost:3001/createproof\";\n              // await Axios.get(\"http://localhost:3001/createproof?witness=168904202930327939080492230969004622904 339630068017193623570711849636010664817 1216631698 326532002671535014699329485375999702230 0 0 80710054703952517336223123171789823554 92441430577956810800440641638774416100 3812576291 9221067889684513358870464131861547279 0 0 168904202930327939080492230969004622904 339630068017193623570711849636010664817 0 0\"\n              // await Axios.get(\"http://localhost:3001/createproof?witness=80710054703952517336223123171789823554 92441430577956810800440641638774416100 3812576291 9221067889684513358870464131861547279 0 0 168904202930327939080492230969004622904 339630068017193623570711849636010664817 1216631698 326532002671535014699329485375999702230 0 0 80710054703952517336223123171789823554 92441430577956810800440641638774416100 0 0\",{    \n\n              _context2.next = 12;\n              return axios__WEBPACK_IMPORTED_MODULE_16___default.a.get(\"http://localhost:3001/createproof?witness=\" + witnessparams, {}).then(function (res) {\n                if (res.statusText == 'OK') {\n                  console.log(\"response:\", res);\n                  response = res;\n                } else {\n                  alert(\"error\");\n                  console.log(res);\n                }\n              })[\"catch\"](function (err) {\n                alert(\"err\");\n                console.log(err);\n              });\n\n            case 12:\n              _context2.next = 14;\n              return zkInstance.methods.claimNote(response.data.proof.a, response.data.proof.b, response.data.proof.c, response.data.inputs, \"20\").send({\n                from: accounts[0]\n              });\n\n            case 14:\n              hash = _context2.sent;\n              _context2.next = 20;\n              break;\n\n            case 17:\n              _context2.prev = 17;\n              _context2.t0 = _context2[\"catch\"](1);\n              console.log(_context2.t0);\n\n            case 20:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[1, 17]]);\n    })));\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_14__[\"default\"], null, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_11__[\"ToastContainer\"], null), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Container\"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Grid\"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Grid\"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"], {\n        onSubmit: this.ontransfer\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"].Field, null), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"].Field, null), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Button\"], null, \"transfer\"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Grid\"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"], {\n        onSubmit: this.onClaim\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Button\"], null, \"claim\"))))));\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiZ2V0RVJDQ29udHJhY3RJbnN0YW5jZSIsImRhaUluc3RhbmNlIiwibWV0aG9kcyIsImFwcHJvdmUiLCJzZW5kIiwiZnJvbSIsImFwcHJvdmVoYXNoIiwiY29uc29sZSIsImxvZyIsImdldFprU25hcmtJbnN0YW5jZSIsInprSW5zdGFuY2UiLCJ0cmFuc2Zlck5vdGVUb0NvbnRyYWN0IiwiaGFzaCIsIndpdG5lc3NwYXJhbXMiLCJnZXRXaXRuZXNzIiwiQXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwic3RhdHVzVGV4dCIsInJlc3BvbnNlIiwiYWxlcnQiLCJlcnIiLCJjbGFpbU5vdGUiLCJkYXRhIiwicHJvb2YiLCJhIiwiYiIsImMiLCJpbnB1dHMiLCJvbnRyYW5zZmVyIiwib25DbGFpbSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEs7Ozs7Ozs7Ozs7Ozs7Ozs7bVpBRVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1RDLG1CQUFLLENBQUNDLGNBQU47QUFEUztBQUFBO0FBQUEscUJBR2tCQyx5REFBSSxDQUFDQyxHQUFMLENBQVNDLFdBQVQsRUFIbEI7O0FBQUE7QUFHQ0Msc0JBSEQ7QUFBQTtBQUFBLHFCQUtxQkMsbUdBQXNCLENBQUNKLHlEQUFELENBTDNDOztBQUFBO0FBS0NLLHlCQUxEO0FBQUE7QUFBQSxxQkFNcUJBLFdBQVcsQ0FBQ0MsT0FBWixDQUFvQkMsT0FBcEIsQ0FDdEIsNENBRHNCLEVBRXRCLElBRnNCLEVBR3hCQyxJQUh3QixDQUduQjtBQUNIQyxvQkFBSSxFQUFFTixR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Qyx1REFBRCxDQUFNLEtBQU4sT0FKSixFQU9JLE1BQUMseURBQUQsbUJBUEosQ0FESixDQURKLEVBYUksTUFBQyx1REFBRCxDQUFNLEdBQU4sUUFDSSxNQUFDLHVEQUFEO0FBQU0sZ0JBQVEsRUFBRSxLQUFLQztBQUFyQixTQUNJLE1BQUMseURBQUQsZ0JBREosQ0FESixDQWJKLENBREosQ0FGRixDQURGO0FBMEJIOzs7O0VBdEhlQywrQzs7QUF5SEx2QyxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgRm9ybSwgQnV0dG9uLCBHcmlkLCBJbnB1dCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHtnZXRaa1NuYXJrSW5zdGFuY2UsIGdldEVSQ0NvbnRyYWN0SW5zdGFuY2V9IGZyb20gJy4uL2NvbmZpZy9pbnN0YW5jZXMvY29udHJhY3RJbnN0YW5jZXMnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vY29uZmlnL3dlYjMvd2ViMyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7Z2V0V2l0bmVzc30gZnJvbSBcIi4uL2Z1bmN0aW9ucy9nZXRXaXRuZXNzXCI7XG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBvbnRyYW5zZmVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgICAgICAgICBjb25zdCBkYWlJbnN0YW5jZSA9IGF3YWl0IGdldEVSQ0NvbnRyYWN0SW5zdGFuY2Uod2ViMyk7XG4gICAgICAgICAgICBjb25zdCBhcHByb3ZlaGFzaCA9IGF3YWl0IGRhaUluc3RhbmNlLm1ldGhvZHMuYXBwcm92ZShcbiAgICAgICAgICAgICAgICBcIjB4QkVlMDJGRDFlNWI5ZTNCMzRBODU2RmIxRTY0OTNkRkM4NTQ5NjhkQlwiLFxuICAgICAgICAgICAgICAgIFwiMTBcIlxuICAgICAgICAgICAgKS5zZW5kKHtcbiAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFwcHJvdmVIYXNoOiBcIiwgYXBwcm92ZWhhc2gpO1xuXG4gICAgICAgICAgICBjb25zdCB6a0luc3RhbmNlID0gYXdhaXQgZ2V0WmtTbmFya0luc3RhbmNlKHdlYjMpO1xuICAgICAgICAgICAgY29uc3QgaGFzaCA9IGF3YWl0IHprSW5zdGFuY2UubWV0aG9kcy50cmFuc2Zlck5vdGVUb0NvbnRyYWN0KFxuICAgICAgICAgICAgICAgIFwiMTBcIixcbiAgICAgICAgICAgICAgICBcIjB4RTMzZjRDMjMwNmVGRTlCRjY2YTY0QTNjNDI0MDhkMkZlMUNiODkwZlwiLFxuICAgICAgICAgICAgKS5zZW5kKHtcbiAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRyYW5zYWN0aW9uIGhhc2g6IFwiLCBoYXNoKTtcblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgb25DbGFpbSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgICAgIGNvbnN0IHprSW5zdGFuY2UgPSBhd2FpdCBnZXRaa1NuYXJrSW5zdGFuY2Uod2ViMyk7XG4gICAgICAgICAgICBjb25zdCB3aXRuZXNzcGFyYW1zID0gZ2V0V2l0bmVzcyhcbiAgICAgICAgICAgICAgICAnMHhBZUYzN0RhMWRiNjQ3YkMxODdhNDZBRUJFQjY2MkNGMjY5NjM2ZTU0JywgLy8gc2VuZGVyXG4gICAgICAgICAgICAgICAgJzknLCBcbiAgICAgICAgICAgICAgICAnMHhFMzNmNEMyMzA2ZUZFOUJGNjZhNjRBM2M0MjQwOGQyRmUxQ2I4OTBmJywgLy8gcmVjZWl2ZXJcbiAgICAgICAgICAgICAgICAnMidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh3aXRuZXNzcGFyYW1zKVxuXG4gICAgICAgICAgICAvLyBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jcmVhdGVwcm9vZlwiO1xuICAgICAgICAgICAgLy8gYXdhaXQgQXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2NyZWF0ZXByb29mP3dpdG5lc3M9MTY4OTA0MjAyOTMwMzI3OTM5MDgwNDkyMjMwOTY5MDA0NjIyOTA0IDMzOTYzMDA2ODAxNzE5MzYyMzU3MDcxMTg0OTYzNjAxMDY2NDgxNyAxMjE2NjMxNjk4IDMyNjUzMjAwMjY3MTUzNTAxNDY5OTMyOTQ4NTM3NTk5OTcwMjIzMCAwIDAgODA3MTAwNTQ3MDM5NTI1MTczMzYyMjMxMjMxNzE3ODk4MjM1NTQgOTI0NDE0MzA1Nzc5NTY4MTA4MDA0NDA2NDE2Mzg3NzQ0MTYxMDAgMzgxMjU3NjI5MSA5MjIxMDY3ODg5Njg0NTEzMzU4ODcwNDY0MTMxODYxNTQ3Mjc5IDAgMCAxNjg5MDQyMDI5MzAzMjc5MzkwODA0OTIyMzA5NjkwMDQ2MjI5MDQgMzM5NjMwMDY4MDE3MTkzNjIzNTcwNzExODQ5NjM2MDEwNjY0ODE3IDAgMFwiXG4gICAgICAgICAgICAvLyBhd2FpdCBBeGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvY3JlYXRlcHJvb2Y/d2l0bmVzcz04MDcxMDA1NDcwMzk1MjUxNzMzNjIyMzEyMzE3MTc4OTgyMzU1NCA5MjQ0MTQzMDU3Nzk1NjgxMDgwMDQ0MDY0MTYzODc3NDQxNjEwMCAzODEyNTc2MjkxIDkyMjEwNjc4ODk2ODQ1MTMzNTg4NzA0NjQxMzE4NjE1NDcyNzkgMCAwIDE2ODkwNDIwMjkzMDMyNzkzOTA4MDQ5MjIzMDk2OTAwNDYyMjkwNCAzMzk2MzAwNjgwMTcxOTM2MjM1NzA3MTE4NDk2MzYwMTA2NjQ4MTcgMTIxNjYzMTY5OCAzMjY1MzIwMDI2NzE1MzUwMTQ2OTkzMjk0ODUzNzU5OTk3MDIyMzAgMCAwIDgwNzEwMDU0NzAzOTUyNTE3MzM2MjIzMTIzMTcxNzg5ODIzNTU0IDkyNDQxNDMwNTc3OTU2ODEwODAwNDQwNjQxNjM4Nzc0NDE2MTAwIDAgMFwiLHsgICAgXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2U7ICAgIFxuICAgICAgICAgICAgYXdhaXQgQXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2NyZWF0ZXByb29mP3dpdG5lc3M9XCIrd2l0bmVzc3BhcmFtcywge30pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1c1RleHQgPT0gJ09LJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZTpcIiwgcmVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSByZXNcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiZXJyb3JcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiZXJyXCIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5wcm9vZi5hKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5pbnB1dHMpXG5cblxuICAgICAgICAgICAgY29uc3QgaGFzaCA9IGF3YWl0IHprSW5zdGFuY2UubWV0aG9kcy5jbGFpbU5vdGUoXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5wcm9vZi5hLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEucHJvb2YuYixcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLnByb29mLmMsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5pbnB1dHMsXG4gICAgICAgICAgICAgICAgXCIyMFwiXG4gICAgICAgICAgICApLnNlbmQoe1xuICAgICAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY29uc3QgaGFzaCA9IGF3YWl0IHprSW5zdGFuY2UubWV0aG9kcy5jbGFpbU5vdGUoXG4gICAgICAgICAgICAvLyAgICAgW1wiMHgxNjhiYWIxYmJiYzE1OTM2YmViNTY1YjUxY2U4ZmVhOTk4MDA2YTBmYTk1Njc0MTdhYTYyNjFmNDZkY2QxNmY5XCIsIFwiMHgwMWU1Yzc5NGFiODI5OTcwNWMzMTkzNjZkMWJiMmJlZTc5Yjk2ZjA1ZmEwOGM5YWExMDNmOGRjYjQzYTg4MDZiXCJdLFxuICAgICAgICAgICAgLy8gICAgIFtbXCIweDExNjdmOTc0MDExNGZlMTRkZGIwNTQ1YzQxMTgzNjI1ODlmZDdlN2VmMGJjYWRhMDJjMDIxMmIxNTM3NTVkNTFcIiwgXCIweDFiOTI0NTFmN2EyZjhjZTg5NjE3MWE4ZDU4NDJmMzQ1NTQ0NmYyYjM1ZTFmYjgxYTFmNTA0MGNiY2FjZTU0ZWRcIl0sIFtcIjB4MzA1ODM5NjVhMjg0Zjg3ZjczM2NmMGM1NzAxNmQ5ODQ0NjUwMGYzMTU1OWY4MTBiYzZhYTZkMGM0NGYyYmRkNVwiLCBcIjB4MDY2YjY0ZGRlNTUyNWQzNDkwMTE3MDdiNmY2NjRjYzFjMWM0YjU4YzNiODIyMDE2MzgxNzk2Njc1NTY1ZmRmNFwiXV0sXG4gICAgICAgICAgICAvLyAgICAgW1wiMHgxMmQ3OWY1YWM0YzZjYWM4NGM5N2ExMTNiZmE5ZDJhMGMyN2JiZTgxOGU0Y2EwYWFkNGU5ZTcwMTVmMmVjMjRhXCIsIFwiMHgxNzA5M2JiYjg1OWFiNTMyMzJiNDA4YjAxMmU3NjFiMWRjODdjMGNjOWQxMmQwOWU4ZDJjOTkyNDNkMWYxN2M3XCJdLFxuICAgICAgICAgICAgLy8gICAgIFtcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA3ZjExYzQyNmI1NDE4ZTdmNmQxNTc3ZDMzMjE3ODQzOFwiLCBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBmZjgyNWYyZTU3NTBhY2M2MzljZjkyM2IzNGYwMjM3MVwiLCBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzY2I4MzBlZDA2ZjNkMGU1NmQ3ZDBhZDM1MDEwZGU0MlwiLCBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA0NThiOTI2OWIwYzA3Zjc1MmU1OTJjZDc4MzI1MjJlNFwiLCBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA3ZjExYzQyNmI1NDE4ZTdmNmQxNTc3ZDMzMjE3ODQzOFwiLCBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBmZjgyNWYyZTU3NTBhY2M2MzljZjkyM2IzNGYwMjM3MVwiLCBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMVwiXSxcbiAgICAgICAgICAgIC8vICAgICBcIjIwXCJcbiAgICAgICAgICAgIC8vICkuc2VuZCh7XG4gICAgICAgICAgICAvLyAgICAgZnJvbTogYWNjb3VudHNbMF1cbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJUcmFuc2FjdGlvbiBoYXNoOiBcIiwgaGFzaCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIvPlxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub250cmFuc2Zlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPnRyYW5zZmVyPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uQ2xhaW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+Y2xhaW08L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})