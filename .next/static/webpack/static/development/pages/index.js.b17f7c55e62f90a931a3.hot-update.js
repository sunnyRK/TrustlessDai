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
      var accounts, zkInstance, witness, url;
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
              witness = Object(_functions_getWitness__WEBPACK_IMPORTED_MODULE_15__["getWitness"])('0x48845392F5a7c6b360A733e0ABE2EdcC74f1F4d6', // sender
              '9', '0xE33f4C2306eFE9BF66a64A3c42408d2Fe1Cb890f', // receiver
              '1');
              console.log(witness);
              url = "http://localhost:3001/createproof?witness=" + witness;
              axios__WEBPACK_IMPORTED_MODULE_16___default.a.get(url).then(function (res) {
                if (res.statusText == 'OK') {} else {
                  console.log(res);
                }
              })["catch"](function (err) {
                console.log(err);

                _this.setState({
                  shouldSwap: false,
                  blocking: false
                });
              });
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

              _context2.next = 18;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 15]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImdldEVSQ0NvbnRyYWN0SW5zdGFuY2UiLCJkYWlJbnN0YW5jZSIsIm1ldGhvZHMiLCJhcHByb3ZlIiwic2VuZCIsImZyb20iLCJhcHByb3ZlaGFzaCIsImNvbnNvbGUiLCJsb2ciLCJnZXRaa1NuYXJrSW5zdGFuY2UiLCJ6a0luc3RhbmNlIiwidHJhbnNmZXJOb3RlVG9Db250cmFjdCIsImhhc2giLCJ3aXRuZXNzIiwiZ2V0V2l0bmVzcyIsInVybCIsIkF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsInN0YXR1c1RleHQiLCJlcnIiLCJzZXRTdGF0ZSIsInNob3VsZFN3YXAiLCJibG9ja2luZyIsImFsZXJ0Iiwib250cmFuc2ZlciIsIm9uQ2xhaW0iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsSzs7Ozs7Ozs7Ozs7Ozs7OzttWkFFVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVEMsbUJBQUssQ0FBQ0MsY0FBTjtBQURTO0FBQUE7QUFBQSxxQkFHa0JDLHlEQUFJLENBQUNDLEdBQUwsQ0FBU0MsV0FBVCxFQUhsQjs7QUFBQTtBQUdDQyxzQkFIRDtBQUFBO0FBQUEscUJBS3FCQyxtR0FBc0IsQ0FBQ0oseURBQUQsQ0FMM0M7O0FBQUE7QUFLQ0sseUJBTEQ7QUFBQTtBQUFBLHFCQU1xQkEsV0FBVyxDQUFDQyxPQUFaLENBQW9CQyxPQUFwQixDQUN0Qiw0Q0FEc0IsRUFFdEIsSUFGc0IsRUFHeEJDLElBSHdCLENBR25CO0FBQ0hDLG9CQUFJLEVBQUVOLFFBQVEsQ0FBQyxDQUFEO0FBRFgsZUFIbUIsQ0FOckI7O0FBQUE7QUFNQ08seUJBTkQ7QUFZTEMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJGLFdBQTdCO0FBWks7QUFBQSxxQkFjb0JHLCtGQUFrQixDQUFDYix5REFBRCxDQWR0Qzs7QUFBQTtBQWNDYyx3QkFkRDtBQUFBO0FBQUEscUJBZWNBLFVBQVUsQ0FBQ1IsT0FBWCxDQUFtQlMsc0JBQW5CLENBQ2YsSUFEZSxFQUVmLDRDQUZlLEVBR2pCUCxJQUhpQixDQUdaO0FBQ0hDLG9CQUFJLEVBQUVOLFFBQVEsQ0FBQyxDQUFEO0FBRFgsZUFIWSxDQWZkOztBQUFBO0FBZUNhLGtCQWZEO0FBcUJMTCxxQkFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NJLElBQWxDO0FBckJLO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBd0JMTCxxQkFBTyxDQUFDQyxHQUFSOztBQXhCSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOztnWkE0Qkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ05kLG1CQUFLLENBQUNDLGNBQU47QUFETTtBQUFBO0FBQUEscUJBR3FCQyx5REFBSSxDQUFDQyxHQUFMLENBQVNDLFdBQVQsRUFIckI7O0FBQUE7QUFHSUMsc0JBSEo7QUFBQTtBQUFBLHFCQUl1QlUsK0ZBQWtCLENBQUNiLHlEQUFELENBSnpDOztBQUFBO0FBSUljLHdCQUpKO0FBS0lHLHFCQUxKLEdBS2NDLHlFQUFVLENBQ3RCLDRDQURzQixFQUN3QjtBQUM5QyxpQkFGc0IsRUFHdEIsNENBSHNCLEVBR3dCO0FBQzlDLGlCQUpzQixDQUx4QjtBQVdGUCxxQkFBTyxDQUFDQyxHQUFSLENBQVlLLE9BQVo7QUFFTUUsaUJBYkosR0FhVSwrQ0FBNkNGLE9BYnZEO0FBY0ZHLDJEQUFLLENBQUNDLEdBQU4sQ0FBVUYsR0FBVixFQUNLRyxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFTO0FBQ1gsb0JBQUlBLEdBQUcsQ0FBQ0MsVUFBSixJQUFrQixJQUF0QixFQUE0QixDQUMzQixDQURELE1BQ087QUFDSGIseUJBQU8sQ0FBQ0MsR0FBUixDQUFZVyxHQUFaO0FBQ0g7QUFDSixlQU5MLFdBT1csVUFBQ0UsR0FBRCxFQUFTO0FBQ2hCZCx1QkFBTyxDQUFDQyxHQUFSLENBQVlhLEdBQVo7O0FBQ0Esc0JBQUtDLFFBQUwsQ0FBYztBQUFFQyw0QkFBVSxFQUFFLEtBQWQ7QUFBcUJDLDBCQUFRLEVBQUU7QUFBL0IsaUJBQWQ7QUFDSCxlQVZEO0FBWUFDLG1CQUFLLENBQUMsTUFBRCxDQUFMLENBMUJFLENBNEJGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXJDRTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXVDRmxCLHFCQUFPLENBQUNDLEdBQVI7O0FBdkNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEs7Ozs7Ozs7NkJBMkNEO0FBQ0wsYUFDRSxNQUFDLDJEQUFELFFBQ0UsTUFBQyw4REFBRCxPQURGLEVBRUUsTUFBQyw0REFBRCxRQUNJLE1BQUMsdURBQUQsUUFDSSxNQUFDLHVEQUFELENBQU0sR0FBTixRQUNJLE1BQUMsdURBQUQ7QUFBTSxnQkFBUSxFQUFFLEtBQUtrQjtBQUFyQixTQUNJLE1BQUMseURBQUQsbUJBREosQ0FESixDQURKLEVBT0ksTUFBQyx1REFBRCxDQUFNLEdBQU4sUUFDSSxNQUFDLHVEQUFEO0FBQU0sZ0JBQVEsRUFBRSxLQUFLQztBQUFyQixTQUNJLE1BQUMseURBQUQsZ0JBREosQ0FESixDQVBKLENBREosQ0FGRixDQURGO0FBb0JIOzs7O0VBOUZlQywrQzs7QUFpR0xuQyxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYjE3ZjdjNTVlNjJmOTBhOTMxYTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgRm9ybSwgQnV0dG9uLCBHcmlkLCBJbnB1dCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7Z2V0WmtTbmFya0luc3RhbmNlLCBnZXRFUkNDb250cmFjdEluc3RhbmNlfSBmcm9tICcuLi9jb25maWcvaW5zdGFuY2VzL2NvbnRyYWN0SW5zdGFuY2VzJztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vY29uZmlnL3dlYjMvd2ViMyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQge2dldFdpdG5lc3N9IGZyb20gXCIuLi9mdW5jdGlvbnMvZ2V0V2l0bmVzc1wiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIG9udHJhbnNmZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYWlJbnN0YW5jZSA9IGF3YWl0IGdldEVSQ0NvbnRyYWN0SW5zdGFuY2Uod2ViMyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFwcHJvdmVoYXNoID0gYXdhaXQgZGFpSW5zdGFuY2UubWV0aG9kcy5hcHByb3ZlKFxyXG4gICAgICAgICAgICAgICAgXCIweEJFZTAyRkQxZTViOWUzQjM0QTg1NkZiMUU2NDkzZEZDODU0OTY4ZEJcIixcclxuICAgICAgICAgICAgICAgIFwiMTBcIlxyXG4gICAgICAgICAgICApLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwcm92ZUhhc2g6IFwiLCBhcHByb3ZlaGFzaCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB6a0luc3RhbmNlID0gYXdhaXQgZ2V0WmtTbmFya0luc3RhbmNlKHdlYjMpO1xyXG4gICAgICAgICAgICBjb25zdCBoYXNoID0gYXdhaXQgemtJbnN0YW5jZS5tZXRob2RzLnRyYW5zZmVyTm90ZVRvQ29udHJhY3QoXHJcbiAgICAgICAgICAgICAgICBcIjEwXCIsXHJcbiAgICAgICAgICAgICAgICBcIjB4RTMzZjRDMjMwNmVGRTlCRjY2YTY0QTNjNDI0MDhkMkZlMUNiODkwZlwiLFxyXG4gICAgICAgICAgICApLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVHJhbnNhY3Rpb24gaGFzaDogXCIsIGhhc2gpO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIG9uQ2xhaW0gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHprSW5zdGFuY2UgPSBhd2FpdCBnZXRaa1NuYXJrSW5zdGFuY2Uod2ViMyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpdG5lc3MgPSBnZXRXaXRuZXNzKFxyXG4gICAgICAgICAgICAgICAgJzB4NDg4NDUzOTJGNWE3YzZiMzYwQTczM2UwQUJFMkVkY0M3NGYxRjRkNicsIC8vIHNlbmRlclxyXG4gICAgICAgICAgICAgICAgJzknLCBcclxuICAgICAgICAgICAgICAgICcweEUzM2Y0QzIzMDZlRkU5QkY2NmE2NEEzYzQyNDA4ZDJGZTFDYjg5MGYnLCAvLyByZWNlaXZlclxyXG4gICAgICAgICAgICAgICAgJzEnXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpdG5lc3MpXHJcblxyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jcmVhdGVwcm9vZj93aXRuZXNzPVwiK3dpdG5lc3M7XHJcbiAgICAgICAgICAgIEF4aW9zLmdldCh1cmwpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXNUZXh0ID09ICdPSycpIHtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG91bGRTd2FwOiBmYWxzZSwgYmxvY2tpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRG9uZVwiKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY29uc3QgaGFzaCA9IGF3YWl0IHprSW5zdGFuY2UubWV0aG9kcy5jbGFpbU5vdGUoXHJcbiAgICAgICAgICAgIC8vICAgICBbXCIweDE2OGJhYjFiYmJjMTU5MzZiZWI1NjViNTFjZThmZWE5OTgwMDZhMGZhOTU2NzQxN2FhNjI2MWY0NmRjZDE2ZjlcIiwgXCIweDAxZTVjNzk0YWI4Mjk5NzA1YzMxOTM2NmQxYmIyYmVlNzliOTZmMDVmYTA4YzlhYTEwM2Y4ZGNiNDNhODgwNmJcIl0sXHJcbiAgICAgICAgICAgIC8vICAgICBbW1wiMHgxMTY3Zjk3NDAxMTRmZTE0ZGRiMDU0NWM0MTE4MzYyNTg5ZmQ3ZTdlZjBiY2FkYTAyYzAyMTJiMTUzNzU1ZDUxXCIsIFwiMHgxYjkyNDUxZjdhMmY4Y2U4OTYxNzFhOGQ1ODQyZjM0NTU0NDZmMmIzNWUxZmI4MWExZjUwNDBjYmNhY2U1NGVkXCJdLCBbXCIweDMwNTgzOTY1YTI4NGY4N2Y3MzNjZjBjNTcwMTZkOTg0NDY1MDBmMzE1NTlmODEwYmM2YWE2ZDBjNDRmMmJkZDVcIiwgXCIweDA2NmI2NGRkZTU1MjVkMzQ5MDExNzA3YjZmNjY0Y2MxYzFjNGI1OGMzYjgyMjAxNjM4MTc5NjY3NTU2NWZkZjRcIl1dLFxyXG4gICAgICAgICAgICAvLyAgICAgW1wiMHgxMmQ3OWY1YWM0YzZjYWM4NGM5N2ExMTNiZmE5ZDJhMGMyN2JiZTgxOGU0Y2EwYWFkNGU5ZTcwMTVmMmVjMjRhXCIsIFwiMHgxNzA5M2JiYjg1OWFiNTMyMzJiNDA4YjAxMmU3NjFiMWRjODdjMGNjOWQxMmQwOWU4ZDJjOTkyNDNkMWYxN2M3XCJdLFxyXG4gICAgICAgICAgICAvLyAgICAgW1wiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDdmMTFjNDI2YjU0MThlN2Y2ZDE1NzdkMzMyMTc4NDM4XCIsIFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmODI1ZjJlNTc1MGFjYzYzOWNmOTIzYjM0ZjAyMzcxXCIsIFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDNjYjgzMGVkMDZmM2QwZTU2ZDdkMGFkMzUwMTBkZTQyXCIsIFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDQ1OGI5MjY5YjBjMDdmNzUyZTU5MmNkNzgzMjUyMmU0XCIsIFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDdmMTFjNDI2YjU0MThlN2Y2ZDE1NzdkMzMyMTc4NDM4XCIsIFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmODI1ZjJlNTc1MGFjYzYzOWNmOTIzYjM0ZjAyMzcxXCIsIFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxXCJdLFxyXG4gICAgICAgICAgICAvLyAgICAgXCIyMFwiXHJcbiAgICAgICAgICAgIC8vICkuc2VuZCh7XHJcbiAgICAgICAgICAgIC8vICAgICBmcm9tOiBhY2NvdW50c1swXVxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJUcmFuc2FjdGlvbiBoYXNoOiBcIiwgaGFzaCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIvPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vbnRyYW5zZmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+dHJhbnNmZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uQ2xhaW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5jbGFpbTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==