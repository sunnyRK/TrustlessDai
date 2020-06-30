webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _config_instances_contractInstances__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config/instances/contractInstances */ "./config/instances/contractInstances.js");
/* harmony import */ var _config_web3_web3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config/web3/web3 */ "./config/web3/web3.js");
/* harmony import */ var _config_web3_web3__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_config_web3_web3__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _functions_getWitness__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../functions/getWitness */ "./functions/getWitness.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);









var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var Index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _Component);

  var _super = _createSuper(Index);

  function Index() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "ontransfer", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var accounts, daiInstance, approvehash, zkInstance, hash;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _context.prev = 1;
              _context.next = 4;
              return _config_web3_web3__WEBPACK_IMPORTED_MODULE_13___default.a.eth.getAccounts();

            case 4:
              accounts = _context.sent;
              _context.next = 7;
              return Object(_config_instances_contractInstances__WEBPACK_IMPORTED_MODULE_12__["getERCContractInstance"])(_config_web3_web3__WEBPACK_IMPORTED_MODULE_13___default.a);

            case 7:
              daiInstance = _context.sent;
              _context.next = 10;
              return daiInstance.methods.approve("0xBEe02FD1e5b9e3B34A856Fb1E6493dFC854968dB", "10").send({
                from: accounts[0]
              });

            case 10:
              approvehash = _context.sent;
              console.log("approveHash: ", approvehash);
              _context.next = 14;
              return Object(_config_instances_contractInstances__WEBPACK_IMPORTED_MODULE_12__["getZkSnarkInstance"])(_config_web3_web3__WEBPACK_IMPORTED_MODULE_13___default.a);

            case 14:
              zkInstance = _context.sent;
              _context.next = 17;
              return zkInstance.methods.transferNoteToContract("10", "0xE33f4C2306eFE9BF66a64A3c42408d2Fe1Cb890f").send({
                from: accounts[0]
              });

            case 17:
              hash = _context.sent;
              console.log("Transaction hash: ", hash);
              _context.next = 24;
              break;

            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 21]]);
    })));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onClaim", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var accounts, zkInstance, witnessparams, url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              _context2.prev = 1;
              _context2.next = 4;
              return _config_web3_web3__WEBPACK_IMPORTED_MODULE_13___default.a.eth.getAccounts();

            case 4:
              accounts = _context2.sent;
              _context2.next = 7;
              return Object(_config_instances_contractInstances__WEBPACK_IMPORTED_MODULE_12__["getZkSnarkInstance"])(_config_web3_web3__WEBPACK_IMPORTED_MODULE_13___default.a);

            case 7:
              zkInstance = _context2.sent;
              witnessparams = Object(_functions_getWitness__WEBPACK_IMPORTED_MODULE_15__["getWitness"])('0x48845392F5a7c6b360A733e0ABE2EdcC74f1F4d6', // sender
              '9', '0xE33f4C2306eFE9BF66a64A3c42408d2Fe1Cb890f', // receiver
              '1');
              console.log(witnessparams);
              url = "http://localhost:3001/createproof";
              _context2.next = 13;
              return axios__WEBPACK_IMPORTED_MODULE_16___default.a.get("http://localhost:3001/createproof?witness=168904202930327939080492230969004622904 339630068017193623570711849636010664817 1216631698 326532002671535014699329485375999702230 0 0 80710054703952517336223123171789823554 92441430577956810800440641638774416100 3812576291 9221067889684513358870464131861547279 0 0 168904202930327939080492230969004622904 339630068017193623570711849636010664817 0 0", {// params: {
                //     witness: witnessparams
                //   }
              }).then(function (res) {
                if (res.statusText == 'OK') {
                  console.log("response:", res);
                } else {
                  console.log(res);
                }
              })["catch"](function (err) {
                console.log(err);

                _this.setState({
                  shouldSwap: false,
                  blocking: false
                });
              });

            case 13:
              alert("Done"); // const hash = await zkInstance.methods.claimNote(
              //     ["0x168bab1bbbc15936beb565b51ce8fea998006a0fa9567417aa6261f46dcd16f9", "0x01e5c794ab8299705c319366d1bb2bee79b96f05fa08c9aa103f8dcb43a8806b"],
              //     [["0x1167f9740114fe14ddb0545c4118362589fd7e7ef0bcada02c0212b153755d51", "0x1b92451f7a2f8ce896171a8d5842f3455446f2b35e1fb81a1f5040cbcace54ed"], ["0x30583965a284f87f733cf0c57016d98446500f31559f810bc6aa6d0c44f2bdd5", "0x066b64dde5525d349011707b6f664cc1c1c4b58c3b822016381796675565fdf4"]],
              //     ["0x12d79f5ac4c6cac84c97a113bfa9d2a0c27bbe818e4ca0aad4e9e7015f2ec24a", "0x17093bbb859ab53232b408b012e761b1dc87c0cc9d12d09e8d2c99243d1f17c7"],
              //     ["0x000000000000000000000000000000007f11c426b5418e7f6d1577d332178438", "0x00000000000000000000000000000000ff825f2e5750acc639cf923b34f02371", "0x000000000000000000000000000000003cb830ed06f3d0e56d7d0ad35010de42", "0x00000000000000000000000000000000458b9269b0c07f752e592cd7832522e4", "0x000000000000000000000000000000007f11c426b5418e7f6d1577d332178438", "0x00000000000000000000000000000000ff825f2e5750acc639cf923b34f02371", "0x0000000000000000000000000000000000000000000000000000000000000001"],
              //     "20"
              // ).send({
              //     from: accounts[0]
              // });
              // console.log("Transaction hash: ", hash);

              _context2.next = 19;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 16]]);
    })));

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_14__["default"], null, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_11__["ToastContainer"], null), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Container"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        onSubmit: this.ontransfer
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], null, "transfer"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        onSubmit: this.onClaim
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], null, "claim"))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImdldEVSQ0NvbnRyYWN0SW5zdGFuY2UiLCJkYWlJbnN0YW5jZSIsIm1ldGhvZHMiLCJhcHByb3ZlIiwic2VuZCIsImZyb20iLCJhcHByb3ZlaGFzaCIsImNvbnNvbGUiLCJsb2ciLCJnZXRaa1NuYXJrSW5zdGFuY2UiLCJ6a0luc3RhbmNlIiwidHJhbnNmZXJOb3RlVG9Db250cmFjdCIsImhhc2giLCJ3aXRuZXNzcGFyYW1zIiwiZ2V0V2l0bmVzcyIsInVybCIsIkF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsInN0YXR1c1RleHQiLCJlcnIiLCJzZXRTdGF0ZSIsInNob3VsZFN3YXAiLCJibG9ja2luZyIsImFsZXJ0Iiwib250cmFuc2ZlciIsIm9uQ2xhaW0iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsSzs7Ozs7Ozs7Ozs7Ozs7OzttWkFFVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVEMsbUJBQUssQ0FBQ0MsY0FBTjtBQURTO0FBQUE7QUFBQSxxQkFHa0JDLHlEQUFJLENBQUNDLEdBQUwsQ0FBU0MsV0FBVCxFQUhsQjs7QUFBQTtBQUdDQyxzQkFIRDtBQUFBO0FBQUEscUJBS3FCQyxtR0FBc0IsQ0FBQ0oseURBQUQsQ0FMM0M7O0FBQUE7QUFLQ0sseUJBTEQ7QUFBQTtBQUFBLHFCQU1xQkEsV0FBVyxDQUFDQyxPQUFaLENBQW9CQyxPQUFwQixDQUN0Qiw0Q0FEc0IsRUFFdEIsSUFGc0IsRUFHeEJDLElBSHdCLENBR25CO0FBQ0hDLG9CQUFJLEVBQUVOLFFBQVEsQ0FBQyxDQUFEO0FBRFgsZUFIbUIsQ0FOckI7O0FBQUE7QUFNQ08seUJBTkQ7QUFZTEMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJGLFdBQTdCO0FBWks7QUFBQSxxQkFjb0JHLCtGQUFrQixDQUFDYix5REFBRCxDQWR0Qzs7QUFBQTtBQWNDYyx3QkFkRDtBQUFBO0FBQUEscUJBZWNBLFVBQVUsQ0FBQ1IsT0FBWCxDQUFtQlMsc0JBQW5CLENBQ2YsSUFEZSxFQUVmLDRDQUZlLEVBR2pCUCxJQUhpQixDQUdaO0FBQ0hDLG9CQUFJLEVBQUVOLFFBQVEsQ0FBQyxDQUFEO0FBRFgsZUFIWSxDQWZkOztBQUFBO0FBZUNhLGtCQWZEO0FBcUJMTCxxQkFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NJLElBQWxDO0FBckJLO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBd0JMTCxxQkFBTyxDQUFDQyxHQUFSOztBQXhCSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOztnWkE0Qkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ05kLG1CQUFLLENBQUNDLGNBQU47QUFETTtBQUFBO0FBQUEscUJBR3FCQyx5REFBSSxDQUFDQyxHQUFMLENBQVNDLFdBQVQsRUFIckI7O0FBQUE7QUFHSUMsc0JBSEo7QUFBQTtBQUFBLHFCQUl1QlUsK0ZBQWtCLENBQUNiLHlEQUFELENBSnpDOztBQUFBO0FBSUljLHdCQUpKO0FBS0lHLDJCQUxKLEdBS29CQyx5RUFBVSxDQUM1Qiw0Q0FENEIsRUFDa0I7QUFDOUMsaUJBRjRCLEVBRzVCLDRDQUg0QixFQUdrQjtBQUM5QyxpQkFKNEIsQ0FMOUI7QUFXRlAscUJBQU8sQ0FBQ0MsR0FBUixDQUFZSyxhQUFaO0FBRU1FLGlCQWJKLEdBYVUsbUNBYlY7QUFBQTtBQUFBLHFCQWNJQyw2Q0FBSyxDQUFDQyxHQUFOLENBQVUseVlBQVYsRUFBcVosQ0FDdlo7QUFDQTtBQUNBO0FBSHVaLGVBQXJaLEVBS0RDLElBTEMsQ0FLSSxVQUFDQyxHQUFELEVBQVM7QUFDWCxvQkFBSUEsR0FBRyxDQUFDQyxVQUFKLElBQWtCLElBQXRCLEVBQTRCO0FBQ3hCYix5QkFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QlcsR0FBekI7QUFDSCxpQkFGRCxNQUVPO0FBQ0haLHlCQUFPLENBQUNDLEdBQVIsQ0FBWVcsR0FBWjtBQUNIO0FBQ0osZUFYQyxXQVlLLFVBQUNFLEdBQUQsRUFBUztBQUNoQmQsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZYSxHQUFaOztBQUNBLHNCQUFLQyxRQUFMLENBQWM7QUFBRUMsNEJBQVUsRUFBRSxLQUFkO0FBQXFCQywwQkFBUSxFQUFFO0FBQS9CLGlCQUFkO0FBQ0gsZUFmSyxDQWRKOztBQUFBO0FBK0JGQyxtQkFBSyxDQUFDLE1BQUQsQ0FBTCxDQS9CRSxDQWlDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUExQ0U7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUE0Q0ZsQixxQkFBTyxDQUFDQyxHQUFSOztBQTVDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOzs7Ozs7OzZCQWdERDtBQUNMLGFBQ0UsTUFBQywyREFBRCxRQUNFLE1BQUMsOERBQUQsT0FERixFQUVFLE1BQUMsNERBQUQsUUFDSSxNQUFDLHVEQUFELFFBQ0ksTUFBQyx1REFBRCxDQUFNLEdBQU4sUUFDSSxNQUFDLHVEQUFEO0FBQU0sZ0JBQVEsRUFBRSxLQUFLa0I7QUFBckIsU0FDSSxNQUFDLHlEQUFELG1CQURKLENBREosQ0FESixFQU9JLE1BQUMsdURBQUQsQ0FBTSxHQUFOLFFBQ0ksTUFBQyx1REFBRDtBQUFNLGdCQUFRLEVBQUUsS0FBS0M7QUFBckIsU0FDSSxNQUFDLHlEQUFELGdCQURKLENBREosQ0FQSixDQURKLENBRkYsQ0FERjtBQW9CSDs7OztFQW5HZUMsK0M7O0FBc0dMbkMsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjY5MGUwMDFiNjgyOWE1ZGYzODRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEZvcm0sIEJ1dHRvbiwgR3JpZCwgSW5wdXQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQge2dldFprU25hcmtJbnN0YW5jZSwgZ2V0RVJDQ29udHJhY3RJbnN0YW5jZX0gZnJvbSAnLi4vY29uZmlnL2luc3RhbmNlcy9jb250cmFjdEluc3RhbmNlcyc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2NvbmZpZy93ZWIzL3dlYjMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHtnZXRXaXRuZXNzfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2dldFdpdG5lc3NcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbnRyYW5zZmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGFpSW5zdGFuY2UgPSBhd2FpdCBnZXRFUkNDb250cmFjdEluc3RhbmNlKHdlYjMpO1xyXG4gICAgICAgICAgICBjb25zdCBhcHByb3ZlaGFzaCA9IGF3YWl0IGRhaUluc3RhbmNlLm1ldGhvZHMuYXBwcm92ZShcclxuICAgICAgICAgICAgICAgIFwiMHhCRWUwMkZEMWU1YjllM0IzNEE4NTZGYjFFNjQ5M2RGQzg1NDk2OGRCXCIsXHJcbiAgICAgICAgICAgICAgICBcIjEwXCJcclxuICAgICAgICAgICAgKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFwcHJvdmVIYXNoOiBcIiwgYXBwcm92ZWhhc2gpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgemtJbnN0YW5jZSA9IGF3YWl0IGdldFprU25hcmtJbnN0YW5jZSh3ZWIzKTtcclxuICAgICAgICAgICAgY29uc3QgaGFzaCA9IGF3YWl0IHprSW5zdGFuY2UubWV0aG9kcy50cmFuc2Zlck5vdGVUb0NvbnRyYWN0KFxyXG4gICAgICAgICAgICAgICAgXCIxMFwiLFxyXG4gICAgICAgICAgICAgICAgXCIweEUzM2Y0QzIzMDZlRkU5QkY2NmE2NEEzYzQyNDA4ZDJGZTFDYjg5MGZcIixcclxuICAgICAgICAgICAgKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRyYW5zYWN0aW9uIGhhc2g6IFwiLCBoYXNoKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBvbkNsYWltID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgICAgICBjb25zdCB6a0luc3RhbmNlID0gYXdhaXQgZ2V0WmtTbmFya0luc3RhbmNlKHdlYjMpO1xyXG4gICAgICAgICAgICBjb25zdCB3aXRuZXNzcGFyYW1zID0gZ2V0V2l0bmVzcyhcclxuICAgICAgICAgICAgICAgICcweDQ4ODQ1MzkyRjVhN2M2YjM2MEE3MzNlMEFCRTJFZGNDNzRmMUY0ZDYnLCAvLyBzZW5kZXJcclxuICAgICAgICAgICAgICAgICc5JywgXHJcbiAgICAgICAgICAgICAgICAnMHhFMzNmNEMyMzA2ZUZFOUJGNjZhNjRBM2M0MjQwOGQyRmUxQ2I4OTBmJywgLy8gcmVjZWl2ZXJcclxuICAgICAgICAgICAgICAgICcxJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh3aXRuZXNzcGFyYW1zKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvY3JlYXRlcHJvb2ZcIjtcclxuICAgICAgICAgICAgYXdhaXQgQXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2NyZWF0ZXByb29mP3dpdG5lc3M9MTY4OTA0MjAyOTMwMzI3OTM5MDgwNDkyMjMwOTY5MDA0NjIyOTA0IDMzOTYzMDA2ODAxNzE5MzYyMzU3MDcxMTg0OTYzNjAxMDY2NDgxNyAxMjE2NjMxNjk4IDMyNjUzMjAwMjY3MTUzNTAxNDY5OTMyOTQ4NTM3NTk5OTcwMjIzMCAwIDAgODA3MTAwNTQ3MDM5NTI1MTczMzYyMjMxMjMxNzE3ODk4MjM1NTQgOTI0NDE0MzA1Nzc5NTY4MTA4MDA0NDA2NDE2Mzg3NzQ0MTYxMDAgMzgxMjU3NjI5MSA5MjIxMDY3ODg5Njg0NTEzMzU4ODcwNDY0MTMxODYxNTQ3Mjc5IDAgMCAxNjg5MDQyMDI5MzAzMjc5MzkwODA0OTIyMzA5NjkwMDQ2MjI5MDQgMzM5NjMwMDY4MDE3MTkzNjIzNTcwNzExODQ5NjM2MDEwNjY0ODE3IDAgMFwiLCB7XHJcbiAgICAgICAgICAgICAgICAvLyBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB3aXRuZXNzOiB3aXRuZXNzcGFyYW1zXHJcbiAgICAgICAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1c1RleHQgPT0gJ09LJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlOlwiLCByZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvdWxkU3dhcDogZmFsc2UsIGJsb2NraW5nOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhbGVydChcIkRvbmVcIilcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGhhc2ggPSBhd2FpdCB6a0luc3RhbmNlLm1ldGhvZHMuY2xhaW1Ob3RlKFxyXG4gICAgICAgICAgICAvLyAgICAgW1wiMHgxNjhiYWIxYmJiYzE1OTM2YmViNTY1YjUxY2U4ZmVhOTk4MDA2YTBmYTk1Njc0MTdhYTYyNjFmNDZkY2QxNmY5XCIsIFwiMHgwMWU1Yzc5NGFiODI5OTcwNWMzMTkzNjZkMWJiMmJlZTc5Yjk2ZjA1ZmEwOGM5YWExMDNmOGRjYjQzYTg4MDZiXCJdLFxyXG4gICAgICAgICAgICAvLyAgICAgW1tcIjB4MTE2N2Y5NzQwMTE0ZmUxNGRkYjA1NDVjNDExODM2MjU4OWZkN2U3ZWYwYmNhZGEwMmMwMjEyYjE1Mzc1NWQ1MVwiLCBcIjB4MWI5MjQ1MWY3YTJmOGNlODk2MTcxYThkNTg0MmYzNDU1NDQ2ZjJiMzVlMWZiODFhMWY1MDQwY2JjYWNlNTRlZFwiXSwgW1wiMHgzMDU4Mzk2NWEyODRmODdmNzMzY2YwYzU3MDE2ZDk4NDQ2NTAwZjMxNTU5ZjgxMGJjNmFhNmQwYzQ0ZjJiZGQ1XCIsIFwiMHgwNjZiNjRkZGU1NTI1ZDM0OTAxMTcwN2I2ZjY2NGNjMWMxYzRiNThjM2I4MjIwMTYzODE3OTY2NzU1NjVmZGY0XCJdXSxcclxuICAgICAgICAgICAgLy8gICAgIFtcIjB4MTJkNzlmNWFjNGM2Y2FjODRjOTdhMTEzYmZhOWQyYTBjMjdiYmU4MThlNGNhMGFhZDRlOWU3MDE1ZjJlYzI0YVwiLCBcIjB4MTcwOTNiYmI4NTlhYjUzMjMyYjQwOGIwMTJlNzYxYjFkYzg3YzBjYzlkMTJkMDllOGQyYzk5MjQzZDFmMTdjN1wiXSxcclxuICAgICAgICAgICAgLy8gICAgIFtcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA3ZjExYzQyNmI1NDE4ZTdmNmQxNTc3ZDMzMjE3ODQzOFwiLCBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBmZjgyNWYyZTU3NTBhY2M2MzljZjkyM2IzNGYwMjM3MVwiLCBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzY2I4MzBlZDA2ZjNkMGU1NmQ3ZDBhZDM1MDEwZGU0MlwiLCBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA0NThiOTI2OWIwYzA3Zjc1MmU1OTJjZDc4MzI1MjJlNFwiLCBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA3ZjExYzQyNmI1NDE4ZTdmNmQxNTc3ZDMzMjE3ODQzOFwiLCBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBmZjgyNWYyZTU3NTBhY2M2MzljZjkyM2IzNGYwMjM3MVwiLCBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMVwiXSxcclxuICAgICAgICAgICAgLy8gICAgIFwiMjBcIlxyXG4gICAgICAgICAgICAvLyApLnNlbmQoe1xyXG4gICAgICAgICAgICAvLyAgICAgZnJvbTogYWNjb3VudHNbMF1cclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVHJhbnNhY3Rpb24gaGFzaDogXCIsIGhhc2gpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyLz5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub250cmFuc2Zlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPnRyYW5zZmVyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vbkNsYWltfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+Y2xhaW08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=