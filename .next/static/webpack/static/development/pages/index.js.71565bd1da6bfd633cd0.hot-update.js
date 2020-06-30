webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/esm/react-toastify.js\");\n/* harmony import */ var _config_instances_contractInstances__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config/instances/contractInstances */ \"./config/instances/contractInstances.js\");\n/* harmony import */ var _config_web3_web3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config/web3/web3 */ \"./config/web3/web3.js\");\n/* harmony import */ var _config_web3_web3__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_config_web3_web3__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _functions_getWitness__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../functions/getWitness */ \"./functions/getWitness.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);\n\n\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\nvar Index = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Index, _Component);\n\n  var _super = _createSuper(Index);\n\n  function Index() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Index);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"ontransfer\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var accounts, daiInstance, approvehash, zkInstance, hash;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              _context.prev = 1;\n              _context.next = 4;\n              return _config_web3_web3__WEBPACK_IMPORTED_MODULE_13___default.a.eth.getAccounts();\n\n            case 4:\n              accounts = _context.sent;\n              _context.next = 7;\n              return Object(_config_instances_contractInstances__WEBPACK_IMPORTED_MODULE_12__[\"getERCContractInstance\"])(_config_web3_web3__WEBPACK_IMPORTED_MODULE_13___default.a);\n\n            case 7:\n              daiInstance = _context.sent;\n              _context.next = 10;\n              return daiInstance.methods.approve(\"0xBEe02FD1e5b9e3B34A856Fb1E6493dFC854968dB\", \"10\").send({\n                from: accounts[0]\n              });\n\n            case 10:\n              approvehash = _context.sent;\n              console.log(\"approveHash: \", approvehash);\n              _context.next = 14;\n              return Object(_config_instances_contractInstances__WEBPACK_IMPORTED_MODULE_12__[\"getZkSnarkInstance\"])(_config_web3_web3__WEBPACK_IMPORTED_MODULE_13___default.a);\n\n            case 14:\n              zkInstance = _context.sent;\n              _context.next = 17;\n              return zkInstance.methods.transferNoteToContract(\"10\", \"0xE33f4C2306eFE9BF66a64A3c42408d2Fe1Cb890f\").send({\n                from: accounts[0]\n              });\n\n            case 17:\n              hash = _context.sent;\n              console.log(\"Transaction hash: \", hash);\n              _context.next = 24;\n              break;\n\n            case 21:\n              _context.prev = 21;\n              _context.t0 = _context[\"catch\"](1);\n              console.log(_context.t0);\n\n            case 24:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 21]]);\n    })));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"onClaim\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      var accounts, zkInstance, witnessparams, res2;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              event.preventDefault();\n              _context2.prev = 1;\n              _context2.next = 4;\n              return _config_web3_web3__WEBPACK_IMPORTED_MODULE_13___default.a.eth.getAccounts();\n\n            case 4:\n              accounts = _context2.sent;\n              _context2.next = 7;\n              return Object(_config_instances_contractInstances__WEBPACK_IMPORTED_MODULE_12__[\"getZkSnarkInstance\"])(_config_web3_web3__WEBPACK_IMPORTED_MODULE_13___default.a);\n\n            case 7:\n              zkInstance = _context2.sent;\n              witnessparams = Object(_functions_getWitness__WEBPACK_IMPORTED_MODULE_15__[\"getWitness\"])('0xAeF37Da1db647bC187a46AEBEB662CF269636e54', // sender\n              '9', '0xE33f4C2306eFE9BF66a64A3c42408d2Fe1Cb890f', // receiver\n              '2');\n              console.log(witnessparams); // const url = \"http://localhost:3001/createproof\";\n              // await Axios.get(\"http://localhost:3001/createproof?witness=168904202930327939080492230969004622904 339630068017193623570711849636010664817 1216631698 326532002671535014699329485375999702230 0 0 80710054703952517336223123171789823554 92441430577956810800440641638774416100 3812576291 9221067889684513358870464131861547279 0 0 168904202930327939080492230969004622904 339630068017193623570711849636010664817 0 0\"\n              // await Axios.get(\"http://localhost:3001/createproof?witness=80710054703952517336223123171789823554 92441430577956810800440641638774416100 3812576291 9221067889684513358870464131861547279 0 0 168904202930327939080492230969004622904 339630068017193623570711849636010664817 1216631698 326532002671535014699329485375999702230 0 0 80710054703952517336223123171789823554 92441430577956810800440641638774416100 0 0\",{    \n\n              _context2.next = 12;\n              return axios__WEBPACK_IMPORTED_MODULE_16___default.a.get(\"http://localhost:3001/createproof?witness=\" + witnessparams, {}).then(function (res) {\n                if (res.statusText == 'OK') {\n                  console.log(\"response:\", res);\n                  res2 = res;\n                } else {\n                  alert(\"error\");\n                  console.log(res);\n                }\n              })[\"catch\"](function (err) {\n                alert(\"err\");\n                console.log(err);\n              });\n\n            case 12:\n              console.log(res2.data.proof.a);\n              console.log(res2.data[\"in\"]); // const hash = await zkInstance.methods.claimNote(\n              //     res.data.proof.a,\n              //     res.data.proof.b,\n              //     res.data.proof.c,\n              //     res.data.proof.a,\n              //     \"20\"\n              // ).send({\n              //     from: accounts[0]\n              // });\n              // const hash = await zkInstance.methods.claimNote(\n              //     [\"0x168bab1bbbc15936beb565b51ce8fea998006a0fa9567417aa6261f46dcd16f9\", \"0x01e5c794ab8299705c319366d1bb2bee79b96f05fa08c9aa103f8dcb43a8806b\"],\n              //     [[\"0x1167f9740114fe14ddb0545c4118362589fd7e7ef0bcada02c0212b153755d51\", \"0x1b92451f7a2f8ce896171a8d5842f3455446f2b35e1fb81a1f5040cbcace54ed\"], [\"0x30583965a284f87f733cf0c57016d98446500f31559f810bc6aa6d0c44f2bdd5\", \"0x066b64dde5525d349011707b6f664cc1c1c4b58c3b822016381796675565fdf4\"]],\n              //     [\"0x12d79f5ac4c6cac84c97a113bfa9d2a0c27bbe818e4ca0aad4e9e7015f2ec24a\", \"0x17093bbb859ab53232b408b012e761b1dc87c0cc9d12d09e8d2c99243d1f17c7\"],\n              //     [\"0x000000000000000000000000000000007f11c426b5418e7f6d1577d332178438\", \"0x00000000000000000000000000000000ff825f2e5750acc639cf923b34f02371\", \"0x000000000000000000000000000000003cb830ed06f3d0e56d7d0ad35010de42\", \"0x00000000000000000000000000000000458b9269b0c07f752e592cd7832522e4\", \"0x000000000000000000000000000000007f11c426b5418e7f6d1577d332178438\", \"0x00000000000000000000000000000000ff825f2e5750acc639cf923b34f02371\", \"0x0000000000000000000000000000000000000000000000000000000000000001\"],\n              //     \"20\"\n              // ).send({\n              //     from: accounts[0]\n              // });\n              // console.log(\"Transaction hash: \", hash);\n\n              _context2.next = 19;\n              break;\n\n            case 16:\n              _context2.prev = 16;\n              _context2.t0 = _context2[\"catch\"](1);\n              console.log(_context2.t0);\n\n            case 19:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[1, 16]]);\n    })));\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_14__[\"default\"], null, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_11__[\"ToastContainer\"], null), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Container\"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Grid\"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Grid\"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"], {\n        onSubmit: this.ontransfer\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Button\"], null, \"transfer\"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Grid\"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"], {\n        onSubmit: this.onClaim\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Button\"], null, \"claim\"))))));\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiZ2V0RVJDQ29udHJhY3RJbnN0YW5jZSIsImRhaUluc3RhbmNlIiwibWV0aG9kcyIsImFwcHJvdmUiLCJzZW5kIiwiZnJvbSIsImFwcHJvdmVoYXNoIiwiY29uc29sZSIsImxvZyIsImdldFprU25hcmtJbnN0YW5jZSIsInprSW5zdGFuY2UiLCJ0cmFuc2Zlck5vdGVUb0NvbnRyYWN0IiwiaGFzaCIsIndpdG5lc3NwYXJhbXMiLCJnZXRXaXRuZXNzIiwiQXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwic3RhdHVzVGV4dCIsInJlczIiLCJhbGVydCIsImVyciIsImRhdGEiLCJwcm9vZiIsImEiLCJvbnRyYW5zZmVyIiwib25DbGFpbSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEs7Ozs7Ozs7Ozs7Ozs7Ozs7bVpBRVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1RDLG1CQUFLLENBQUNDLGNBQU47QUFEUztBQUFBO0FBQUEscUJBR2tCQyx5REFBSSxDQUFDQyxHQUFMLENBQVNDLFdBQVQsRUFIbEI7O0FBQUE7QUFHQ0Msc0JBSEQ7QUFBQTtBQUFBLHFCQUtxQkMsbUdBQXNCLENBQUNKLHlEQUFELENBTDNDOztBQUFBO0FBS0NLLHlCQUxEO0FBQUE7QUFBQSxxQkFNcUJBLFdBQVcsQ0FBQ0MsT0FBWixDQUFvQkMsT0FBcEIsQ0FDdEIsNENBRHNCLEVBRXRCLElBRnNCLEVBR3hCQyxJQUh3QixDQUduQjtBQUNIQyxvQkFBSSxFQUFFTixRQUFRLENBQUMsQ0FBRDtBQURYLGVBSG1CLENBTnJCOztBQUFBO0FBTUNPLHlCQU5EO0FBWUxDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCRixXQUE3QjtBQVpLO0FBQUEscUJBY29CRywrRkFBa0IsQ0FBQ2IseURBQUQsQ0FkdEM7O0FBQUE7QUFjQ2Msd0JBZEQ7QUFBQTtBQUFBLHFCQWVjQSxVQUFVLENBQUNSLE9BQVgsQ0FBbUJTLHNCQUFuQixDQUNmLElBRGUsRUFFZiw0Q0FGZSxFQUdqQlAsSUFIaUIsQ0FHWjtBQUNIQyxvQkFBSSxFQUFFTixRQUFRLENBQUMsQ0FBRDtBQURYLGVBSFksQ0FmZDs7QUFBQTtBQWVDYSxrQkFmRDtBQXFCTEwscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDSSxJQUFsQztBQXJCSztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXdCTEwscUJBQU8sQ0FBQ0MsR0FBUjs7QUF4Qks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSzs7Z1pBNEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNOZCxtQkFBSyxDQUFDQyxjQUFOO0FBRE07QUFBQTtBQUFBLHFCQUdxQkMseURBQUksQ0FBQ0MsR0FBTCxDQUFTQyxXQUFULEVBSHJCOztBQUFBO0FBR0lDLHNCQUhKO0FBQUE7QUFBQSxxQkFJdUJVLCtGQUFrQixDQUFDYix5REFBRCxDQUp6Qzs7QUFBQTtBQUlJYyx3QkFKSjtBQUtJRywyQkFMSixHQUtvQkMseUVBQVUsQ0FDNUIsNENBRDRCLEVBQ2tCO0FBQzlDLGlCQUY0QixFQUc1Qiw0Q0FINEIsRUFHa0I7QUFDOUMsaUJBSjRCLENBTDlCO0FBV0ZQLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUssYUFBWixFQVhFLENBYUY7QUFDQTtBQUNBOztBQWZFO0FBQUEscUJBaUJJRSw2Q0FBSyxDQUFDQyxHQUFOLENBQVUsK0NBQTZDSCxhQUF2RCxFQUFzRSxFQUF0RSxFQUNESSxJQURDLENBQ0ksVUFBQ0MsR0FBRCxFQUFTO0FBQ1gsb0JBQUlBLEdBQUcsQ0FBQ0MsVUFBSixJQUFrQixJQUF0QixFQUE0QjtBQUN4QloseUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJVLEdBQXpCO0FBQ0FFLHNCQUFJLEdBQUdGLEdBQVA7QUFDSCxpQkFIRCxNQUdPO0FBQ0hHLHVCQUFLLENBQUMsT0FBRCxDQUFMO0FBQ0FkLHlCQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNIO0FBQ0osZUFUQyxXQVVLLFVBQUNJLEdBQUQsRUFBUztBQUNaRCxxQkFBSyxDQUFDLEtBQUQsQ0FBTDtBQUNBZCx1QkFBTyxDQUFDQyxHQUFSLENBQVljLEdBQVo7QUFDUCxlQWJLLENBakJKOztBQUFBO0FBZ0NGZixxQkFBTyxDQUFDQyxHQUFSLENBQVlZLElBQUksQ0FBQ0csSUFBTCxDQUFVQyxLQUFWLENBQWdCQyxDQUE1QjtBQUNBbEIscUJBQU8sQ0FBQ0MsR0FBUixDQUFZWSxJQUFJLENBQUNHLElBQUwsTUFBWixFQWpDRSxDQW9DRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF2REU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUF5REZoQixxQkFBTyxDQUFDQyxHQUFSOztBQXpERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOzs7Ozs7OzZCQTZERDtBQUNMLGFBQ0UsTUFBQywyREFBRCxRQUNFLE1BQUMsOERBQUQsT0FERixFQUVFLE1BQUMsNERBQUQsUUFDSSxNQUFDLHVEQUFELFFBQ0ksTUFBQyx1REFBRCxDQUFNLEdBQU4sUUFDSSxNQUFDLHVEQUFEO0FBQU0sZ0JBQVEsRUFBRSxLQUFLa0I7QUFBckIsU0FDSSxNQUFDLHlEQUFELG1CQURKLENBREosQ0FESixFQU9JLE1BQUMsdURBQUQsQ0FBTSxHQUFOLFFBQ0ksTUFBQyx1REFBRDtBQUFNLGdCQUFRLEVBQUUsS0FBS0M7QUFBckIsU0FDSSxNQUFDLHlEQUFELGdCQURKLENBREosQ0FQSixDQURKLENBRkYsQ0FERjtBQW9CSDs7OztFQWhIZUMsK0M7O0FBbUhMbkMsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEZvcm0sIEJ1dHRvbiwgR3JpZCwgSW5wdXQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7Z2V0WmtTbmFya0luc3RhbmNlLCBnZXRFUkNDb250cmFjdEluc3RhbmNlfSBmcm9tICcuLi9jb25maWcvaW5zdGFuY2VzL2NvbnRyYWN0SW5zdGFuY2VzJztcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2NvbmZpZy93ZWIzL3dlYjMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQge2dldFdpdG5lc3N9IGZyb20gXCIuLi9mdW5jdGlvbnMvZ2V0V2l0bmVzc1wiO1xuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgb250cmFuc2ZlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblxuICAgICAgICAgICAgY29uc3QgZGFpSW5zdGFuY2UgPSBhd2FpdCBnZXRFUkNDb250cmFjdEluc3RhbmNlKHdlYjMpO1xuICAgICAgICAgICAgY29uc3QgYXBwcm92ZWhhc2ggPSBhd2FpdCBkYWlJbnN0YW5jZS5tZXRob2RzLmFwcHJvdmUoXG4gICAgICAgICAgICAgICAgXCIweEJFZTAyRkQxZTViOWUzQjM0QTg1NkZiMUU2NDkzZEZDODU0OTY4ZEJcIixcbiAgICAgICAgICAgICAgICBcIjEwXCJcbiAgICAgICAgICAgICkuc2VuZCh7XG4gICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcHByb3ZlSGFzaDogXCIsIGFwcHJvdmVoYXNoKTtcblxuICAgICAgICAgICAgY29uc3QgemtJbnN0YW5jZSA9IGF3YWl0IGdldFprU25hcmtJbnN0YW5jZSh3ZWIzKTtcbiAgICAgICAgICAgIGNvbnN0IGhhc2ggPSBhd2FpdCB6a0luc3RhbmNlLm1ldGhvZHMudHJhbnNmZXJOb3RlVG9Db250cmFjdChcbiAgICAgICAgICAgICAgICBcIjEwXCIsXG4gICAgICAgICAgICAgICAgXCIweEUzM2Y0QzIzMDZlRkU5QkY2NmE2NEEzYzQyNDA4ZDJGZTFDYjg5MGZcIixcbiAgICAgICAgICAgICkuc2VuZCh7XG4gICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUcmFuc2FjdGlvbiBoYXNoOiBcIiwgaGFzaCk7XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIG9uQ2xhaW0gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgICAgICBjb25zdCB6a0luc3RhbmNlID0gYXdhaXQgZ2V0WmtTbmFya0luc3RhbmNlKHdlYjMpO1xuICAgICAgICAgICAgY29uc3Qgd2l0bmVzc3BhcmFtcyA9IGdldFdpdG5lc3MoXG4gICAgICAgICAgICAgICAgJzB4QWVGMzdEYTFkYjY0N2JDMTg3YTQ2QUVCRUI2NjJDRjI2OTYzNmU1NCcsIC8vIHNlbmRlclxuICAgICAgICAgICAgICAgICc5JywgXG4gICAgICAgICAgICAgICAgJzB4RTMzZjRDMjMwNmVGRTlCRjY2YTY0QTNjNDI0MDhkMkZlMUNiODkwZicsIC8vIHJlY2VpdmVyXG4gICAgICAgICAgICAgICAgJzInXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc29sZS5sb2cod2l0bmVzc3BhcmFtcylcblxuICAgICAgICAgICAgLy8gY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvY3JlYXRlcHJvb2ZcIjtcbiAgICAgICAgICAgIC8vIGF3YWl0IEF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jcmVhdGVwcm9vZj93aXRuZXNzPTE2ODkwNDIwMjkzMDMyNzkzOTA4MDQ5MjIzMDk2OTAwNDYyMjkwNCAzMzk2MzAwNjgwMTcxOTM2MjM1NzA3MTE4NDk2MzYwMTA2NjQ4MTcgMTIxNjYzMTY5OCAzMjY1MzIwMDI2NzE1MzUwMTQ2OTkzMjk0ODUzNzU5OTk3MDIyMzAgMCAwIDgwNzEwMDU0NzAzOTUyNTE3MzM2MjIzMTIzMTcxNzg5ODIzNTU0IDkyNDQxNDMwNTc3OTU2ODEwODAwNDQwNjQxNjM4Nzc0NDE2MTAwIDM4MTI1NzYyOTEgOTIyMTA2Nzg4OTY4NDUxMzM1ODg3MDQ2NDEzMTg2MTU0NzI3OSAwIDAgMTY4OTA0MjAyOTMwMzI3OTM5MDgwNDkyMjMwOTY5MDA0NjIyOTA0IDMzOTYzMDA2ODAxNzE5MzYyMzU3MDcxMTg0OTYzNjAxMDY2NDgxNyAwIDBcIlxuICAgICAgICAgICAgLy8gYXdhaXQgQXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2NyZWF0ZXByb29mP3dpdG5lc3M9ODA3MTAwNTQ3MDM5NTI1MTczMzYyMjMxMjMxNzE3ODk4MjM1NTQgOTI0NDE0MzA1Nzc5NTY4MTA4MDA0NDA2NDE2Mzg3NzQ0MTYxMDAgMzgxMjU3NjI5MSA5MjIxMDY3ODg5Njg0NTEzMzU4ODcwNDY0MTMxODYxNTQ3Mjc5IDAgMCAxNjg5MDQyMDI5MzAzMjc5MzkwODA0OTIyMzA5NjkwMDQ2MjI5MDQgMzM5NjMwMDY4MDE3MTkzNjIzNTcwNzExODQ5NjM2MDEwNjY0ODE3IDEyMTY2MzE2OTggMzI2NTMyMDAyNjcxNTM1MDE0Njk5MzI5NDg1Mzc1OTk5NzAyMjMwIDAgMCA4MDcxMDA1NDcwMzk1MjUxNzMzNjIyMzEyMzE3MTc4OTgyMzU1NCA5MjQ0MTQzMDU3Nzk1NjgxMDgwMDQ0MDY0MTYzODc3NDQxNjEwMCAwIDBcIix7ICAgIFxuICAgICAgICAgICAgbGV0IHJlczI7ICAgIFxuICAgICAgICAgICAgYXdhaXQgQXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2NyZWF0ZXByb29mP3dpdG5lc3M9XCIrd2l0bmVzc3BhcmFtcywge30pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1c1RleHQgPT0gJ09LJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZTpcIiwgcmVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzMiA9IHJlc1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJlcnJvclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJlcnJcIilcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMyLmRhdGEucHJvb2YuYSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlczIuZGF0YS5pbilcblxuXG4gICAgICAgICAgICAvLyBjb25zdCBoYXNoID0gYXdhaXQgemtJbnN0YW5jZS5tZXRob2RzLmNsYWltTm90ZShcbiAgICAgICAgICAgIC8vICAgICByZXMuZGF0YS5wcm9vZi5hLFxuICAgICAgICAgICAgLy8gICAgIHJlcy5kYXRhLnByb29mLmIsXG4gICAgICAgICAgICAvLyAgICAgcmVzLmRhdGEucHJvb2YuYyxcbiAgICAgICAgICAgIC8vICAgICByZXMuZGF0YS5wcm9vZi5hLFxuICAgICAgICAgICAgLy8gICAgIFwiMjBcIlxuICAgICAgICAgICAgLy8gKS5zZW5kKHtcbiAgICAgICAgICAgIC8vICAgICBmcm9tOiBhY2NvdW50c1swXVxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNvbnN0IGhhc2ggPSBhd2FpdCB6a0luc3RhbmNlLm1ldGhvZHMuY2xhaW1Ob3RlKFxuICAgICAgICAgICAgLy8gICAgIFtcIjB4MTY4YmFiMWJiYmMxNTkzNmJlYjU2NWI1MWNlOGZlYTk5ODAwNmEwZmE5NTY3NDE3YWE2MjYxZjQ2ZGNkMTZmOVwiLCBcIjB4MDFlNWM3OTRhYjgyOTk3MDVjMzE5MzY2ZDFiYjJiZWU3OWI5NmYwNWZhMDhjOWFhMTAzZjhkY2I0M2E4ODA2YlwiXSxcbiAgICAgICAgICAgIC8vICAgICBbW1wiMHgxMTY3Zjk3NDAxMTRmZTE0ZGRiMDU0NWM0MTE4MzYyNTg5ZmQ3ZTdlZjBiY2FkYTAyYzAyMTJiMTUzNzU1ZDUxXCIsIFwiMHgxYjkyNDUxZjdhMmY4Y2U4OTYxNzFhOGQ1ODQyZjM0NTU0NDZmMmIzNWUxZmI4MWExZjUwNDBjYmNhY2U1NGVkXCJdLCBbXCIweDMwNTgzOTY1YTI4NGY4N2Y3MzNjZjBjNTcwMTZkOTg0NDY1MDBmMzE1NTlmODEwYmM2YWE2ZDBjNDRmMmJkZDVcIiwgXCIweDA2NmI2NGRkZTU1MjVkMzQ5MDExNzA3YjZmNjY0Y2MxYzFjNGI1OGMzYjgyMjAxNjM4MTc5NjY3NTU2NWZkZjRcIl1dLFxuICAgICAgICAgICAgLy8gICAgIFtcIjB4MTJkNzlmNWFjNGM2Y2FjODRjOTdhMTEzYmZhOWQyYTBjMjdiYmU4MThlNGNhMGFhZDRlOWU3MDE1ZjJlYzI0YVwiLCBcIjB4MTcwOTNiYmI4NTlhYjUzMjMyYjQwOGIwMTJlNzYxYjFkYzg3YzBjYzlkMTJkMDllOGQyYzk5MjQzZDFmMTdjN1wiXSxcbiAgICAgICAgICAgIC8vICAgICBbXCIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwN2YxMWM0MjZiNTQxOGU3ZjZkMTU3N2QzMzIxNzg0MzhcIiwgXCIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZmY4MjVmMmU1NzUwYWNjNjM5Y2Y5MjNiMzRmMDIzNzFcIiwgXCIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM2NiODMwZWQwNmYzZDBlNTZkN2QwYWQzNTAxMGRlNDJcIiwgXCIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNDU4YjkyNjliMGMwN2Y3NTJlNTkyY2Q3ODMyNTIyZTRcIiwgXCIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwN2YxMWM0MjZiNTQxOGU3ZjZkMTU3N2QzMzIxNzg0MzhcIiwgXCIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZmY4MjVmMmU1NzUwYWNjNjM5Y2Y5MjNiMzRmMDIzNzFcIiwgXCIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDFcIl0sXG4gICAgICAgICAgICAvLyAgICAgXCIyMFwiXG4gICAgICAgICAgICAvLyApLnNlbmQoe1xuICAgICAgICAgICAgLy8gICAgIGZyb206IGFjY291bnRzWzBdXG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVHJhbnNhY3Rpb24gaGFzaDogXCIsIGhhc2gpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyLz5cbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9udHJhbnNmZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+dHJhbnNmZXI8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25DbGFpbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5jbGFpbTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})