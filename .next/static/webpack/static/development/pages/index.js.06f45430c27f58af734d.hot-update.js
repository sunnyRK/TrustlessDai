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
              url = "http://localhost:3001/createproof?witness=" + witness;
              Axios.get(url).then(function (res) {
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
              console.log(witness); // const hash = await zkInstance.methods.claimNote(
              //     ["0x168bab1bbbc15936beb565b51ce8fea998006a0fa9567417aa6261f46dcd16f9", "0x01e5c794ab8299705c319366d1bb2bee79b96f05fa08c9aa103f8dcb43a8806b"],
              //     [["0x1167f9740114fe14ddb0545c4118362589fd7e7ef0bcada02c0212b153755d51", "0x1b92451f7a2f8ce896171a8d5842f3455446f2b35e1fb81a1f5040cbcace54ed"], ["0x30583965a284f87f733cf0c57016d98446500f31559f810bc6aa6d0c44f2bdd5", "0x066b64dde5525d349011707b6f664cc1c1c4b58c3b822016381796675565fdf4"]],
              //     ["0x12d79f5ac4c6cac84c97a113bfa9d2a0c27bbe818e4ca0aad4e9e7015f2ec24a", "0x17093bbb859ab53232b408b012e761b1dc87c0cc9d12d09e8d2c99243d1f17c7"],
              //     ["0x000000000000000000000000000000007f11c426b5418e7f6d1577d332178438", "0x00000000000000000000000000000000ff825f2e5750acc639cf923b34f02371", "0x000000000000000000000000000000003cb830ed06f3d0e56d7d0ad35010de42", "0x00000000000000000000000000000000458b9269b0c07f752e592cd7832522e4", "0x000000000000000000000000000000007f11c426b5418e7f6d1577d332178438", "0x00000000000000000000000000000000ff825f2e5750acc639cf923b34f02371", "0x0000000000000000000000000000000000000000000000000000000000000001"],
              //     "20"
              // ).send({
              //     from: accounts[0]
              // });
              // console.log("Transaction hash: ", hash);

              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 14]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImdldEVSQ0NvbnRyYWN0SW5zdGFuY2UiLCJkYWlJbnN0YW5jZSIsIm1ldGhvZHMiLCJhcHByb3ZlIiwic2VuZCIsImZyb20iLCJhcHByb3ZlaGFzaCIsImNvbnNvbGUiLCJsb2ciLCJnZXRaa1NuYXJrSW5zdGFuY2UiLCJ6a0luc3RhbmNlIiwidHJhbnNmZXJOb3RlVG9Db250cmFjdCIsImhhc2giLCJ3aXRuZXNzIiwiZ2V0V2l0bmVzcyIsInVybCIsIkF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsInN0YXR1c1RleHQiLCJlcnIiLCJzZXRTdGF0ZSIsInNob3VsZFN3YXAiLCJibG9ja2luZyIsIm9udHJhbnNmZXIiLCJvbkNsYWltIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFDTUEsSzs7Ozs7Ozs7Ozs7Ozs7OzttWkFFVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVEMsbUJBQUssQ0FBQ0MsY0FBTjtBQURTO0FBQUE7QUFBQSxxQkFHa0JDLHlEQUFJLENBQUNDLEdBQUwsQ0FBU0MsV0FBVCxFQUhsQjs7QUFBQTtBQUdDQyxzQkFIRDtBQUFBO0FBQUEscUJBS3FCQyxtR0FBc0IsQ0FBQ0oseURBQUQsQ0FMM0M7O0FBQUE7QUFLQ0sseUJBTEQ7QUFBQTtBQUFBLHFCQU1xQkEsV0FBVyxDQUFDQyxPQUFaLENBQW9CQyxPQUFwQixDQUN0Qiw0Q0FEc0IsRUFFdEIsSUFGc0IsRUFHeEJDLElBSHdCLENBR25CO0FBQ0hDLG9CQUFJLEVBQUVOLFFBQVEsQ0FBQyxDQUFEO0FBRFgsZUFIbUIsQ0FOckI7O0FBQUE7QUFNQ08seUJBTkQ7QUFZTEMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJGLFdBQTdCO0FBWks7QUFBQSxxQkFjb0JHLCtGQUFrQixDQUFDYix5REFBRCxDQWR0Qzs7QUFBQTtBQWNDYyx3QkFkRDtBQUFBO0FBQUEscUJBZWNBLFVBQVUsQ0FBQ1IsT0FBWCxDQUFtQlMsc0JBQW5CLENBQ2YsSUFEZSxFQUVmLDRDQUZlLEVBR2pCUCxJQUhpQixDQUdaO0FBQ0hDLG9CQUFJLEVBQUVOLFFBQVEsQ0FBQyxDQUFEO0FBRFgsZUFIWSxDQWZkOztBQUFBO0FBZUNhLGtCQWZEO0FBcUJMTCxxQkFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NJLElBQWxDO0FBckJLO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBd0JMTCxxQkFBTyxDQUFDQyxHQUFSOztBQXhCSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOztnWkE0Qkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ05kLG1CQUFLLENBQUNDLGNBQU47QUFETTtBQUFBO0FBQUEscUJBR3FCQyx5REFBSSxDQUFDQyxHQUFMLENBQVNDLFdBQVQsRUFIckI7O0FBQUE7QUFHSUMsc0JBSEo7QUFBQTtBQUFBLHFCQUl1QlUsK0ZBQWtCLENBQUNiLHlEQUFELENBSnpDOztBQUFBO0FBSUljLHdCQUpKO0FBS0lHLHFCQUxKLEdBS2NDLHlFQUFVLENBQ3RCLDRDQURzQixFQUN3QjtBQUM5QyxpQkFGc0IsRUFHdEIsNENBSHNCLEVBR3dCO0FBQzlDLGlCQUpzQixDQUx4QjtBQVlJQyxpQkFaSixHQVlVLCtDQUE2Q0YsT0FadkQ7QUFhRkcsbUJBQUssQ0FBQ0MsR0FBTixDQUFVRixHQUFWLEVBQ1dHLElBRFgsQ0FDZ0IsVUFBQ0MsR0FBRCxFQUFTO0FBQ2Isb0JBQUlBLEdBQUcsQ0FBQ0MsVUFBSixJQUFrQixJQUF0QixFQUE0QixDQUMzQixDQURELE1BQ087QUFDTGIseUJBQU8sQ0FBQ0MsR0FBUixDQUFZVyxHQUFaO0FBQ0Q7QUFDRixlQU5YLFdBT2lCLFVBQUNFLEdBQUQsRUFBUztBQUNkZCx1QkFBTyxDQUFDQyxHQUFSLENBQVlhLEdBQVo7O0FBQ0Esc0JBQUtDLFFBQUwsQ0FBYztBQUFFQyw0QkFBVSxFQUFFLEtBQWQ7QUFBcUJDLDBCQUFRLEVBQUU7QUFBL0IsaUJBQWQ7QUFDWCxlQVZEO0FBYUFqQixxQkFBTyxDQUFDQyxHQUFSLENBQVlLLE9BQVosRUExQkUsQ0EyQkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBcENFO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBc0NGTixxQkFBTyxDQUFDQyxHQUFSOztBQXRDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOzs7Ozs7OzZCQTBDRDtBQUNMLGFBQ0UsTUFBQywyREFBRCxRQUNFLE1BQUMsOERBQUQsT0FERixFQUVFLE1BQUMsNERBQUQsUUFDSSxNQUFDLHVEQUFELFFBQ0ksTUFBQyx1REFBRCxDQUFNLEdBQU4sUUFDSSxNQUFDLHVEQUFEO0FBQU0sZ0JBQVEsRUFBRSxLQUFLaUI7QUFBckIsU0FDSSxNQUFDLHlEQUFELG1CQURKLENBREosQ0FESixFQU9JLE1BQUMsdURBQUQsQ0FBTSxHQUFOLFFBQ0ksTUFBQyx1REFBRDtBQUFNLGdCQUFRLEVBQUUsS0FBS0M7QUFBckIsU0FDSSxNQUFDLHlEQUFELGdCQURKLENBREosQ0FQSixDQURKLENBRkYsQ0FERjtBQW9CSDs7OztFQTdGZUMsK0M7O0FBZ0dMbEMsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjA2ZjQ1NDMwYzI3ZjU4YWY3MzRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEZvcm0sIEJ1dHRvbiwgR3JpZCwgSW5wdXQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQge2dldFprU25hcmtJbnN0YW5jZSwgZ2V0RVJDQ29udHJhY3RJbnN0YW5jZX0gZnJvbSAnLi4vY29uZmlnL2luc3RhbmNlcy9jb250cmFjdEluc3RhbmNlcyc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2NvbmZpZy93ZWIzL3dlYjMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHtnZXRXaXRuZXNzfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2dldFdpdG5lc3NcIjtcclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIG9udHJhbnNmZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYWlJbnN0YW5jZSA9IGF3YWl0IGdldEVSQ0NvbnRyYWN0SW5zdGFuY2Uod2ViMyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFwcHJvdmVoYXNoID0gYXdhaXQgZGFpSW5zdGFuY2UubWV0aG9kcy5hcHByb3ZlKFxyXG4gICAgICAgICAgICAgICAgXCIweEJFZTAyRkQxZTViOWUzQjM0QTg1NkZiMUU2NDkzZEZDODU0OTY4ZEJcIixcclxuICAgICAgICAgICAgICAgIFwiMTBcIlxyXG4gICAgICAgICAgICApLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwcm92ZUhhc2g6IFwiLCBhcHByb3ZlaGFzaCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB6a0luc3RhbmNlID0gYXdhaXQgZ2V0WmtTbmFya0luc3RhbmNlKHdlYjMpO1xyXG4gICAgICAgICAgICBjb25zdCBoYXNoID0gYXdhaXQgemtJbnN0YW5jZS5tZXRob2RzLnRyYW5zZmVyTm90ZVRvQ29udHJhY3QoXHJcbiAgICAgICAgICAgICAgICBcIjEwXCIsXHJcbiAgICAgICAgICAgICAgICBcIjB4RTMzZjRDMjMwNmVGRTlCRjY2YTY0QTNjNDI0MDhkMkZlMUNiODkwZlwiLFxyXG4gICAgICAgICAgICApLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVHJhbnNhY3Rpb24gaGFzaDogXCIsIGhhc2gpO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIG9uQ2xhaW0gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHprSW5zdGFuY2UgPSBhd2FpdCBnZXRaa1NuYXJrSW5zdGFuY2Uod2ViMyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpdG5lc3MgPSBnZXRXaXRuZXNzKFxyXG4gICAgICAgICAgICAgICAgJzB4NDg4NDUzOTJGNWE3YzZiMzYwQTczM2UwQUJFMkVkY0M3NGYxRjRkNicsIC8vIHNlbmRlclxyXG4gICAgICAgICAgICAgICAgJzknLCBcclxuICAgICAgICAgICAgICAgICcweEUzM2Y0QzIzMDZlRkU5QkY2NmE2NEEzYzQyNDA4ZDJGZTFDYjg5MGYnLCAvLyByZWNlaXZlclxyXG4gICAgICAgICAgICAgICAgJzEnXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jcmVhdGVwcm9vZj93aXRuZXNzPVwiK3dpdG5lc3M7XHJcbiAgICAgICAgICAgIEF4aW9zLmdldCh1cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzVGV4dCA9PSAnT0snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG91bGRTd2FwOiBmYWxzZSwgYmxvY2tpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh3aXRuZXNzKVxyXG4gICAgICAgICAgICAvLyBjb25zdCBoYXNoID0gYXdhaXQgemtJbnN0YW5jZS5tZXRob2RzLmNsYWltTm90ZShcclxuICAgICAgICAgICAgLy8gICAgIFtcIjB4MTY4YmFiMWJiYmMxNTkzNmJlYjU2NWI1MWNlOGZlYTk5ODAwNmEwZmE5NTY3NDE3YWE2MjYxZjQ2ZGNkMTZmOVwiLCBcIjB4MDFlNWM3OTRhYjgyOTk3MDVjMzE5MzY2ZDFiYjJiZWU3OWI5NmYwNWZhMDhjOWFhMTAzZjhkY2I0M2E4ODA2YlwiXSxcclxuICAgICAgICAgICAgLy8gICAgIFtbXCIweDExNjdmOTc0MDExNGZlMTRkZGIwNTQ1YzQxMTgzNjI1ODlmZDdlN2VmMGJjYWRhMDJjMDIxMmIxNTM3NTVkNTFcIiwgXCIweDFiOTI0NTFmN2EyZjhjZTg5NjE3MWE4ZDU4NDJmMzQ1NTQ0NmYyYjM1ZTFmYjgxYTFmNTA0MGNiY2FjZTU0ZWRcIl0sIFtcIjB4MzA1ODM5NjVhMjg0Zjg3ZjczM2NmMGM1NzAxNmQ5ODQ0NjUwMGYzMTU1OWY4MTBiYzZhYTZkMGM0NGYyYmRkNVwiLCBcIjB4MDY2YjY0ZGRlNTUyNWQzNDkwMTE3MDdiNmY2NjRjYzFjMWM0YjU4YzNiODIyMDE2MzgxNzk2Njc1NTY1ZmRmNFwiXV0sXHJcbiAgICAgICAgICAgIC8vICAgICBbXCIweDEyZDc5ZjVhYzRjNmNhYzg0Yzk3YTExM2JmYTlkMmEwYzI3YmJlODE4ZTRjYTBhYWQ0ZTllNzAxNWYyZWMyNGFcIiwgXCIweDE3MDkzYmJiODU5YWI1MzIzMmI0MDhiMDEyZTc2MWIxZGM4N2MwY2M5ZDEyZDA5ZThkMmM5OTI0M2QxZjE3YzdcIl0sXHJcbiAgICAgICAgICAgIC8vICAgICBbXCIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwN2YxMWM0MjZiNTQxOGU3ZjZkMTU3N2QzMzIxNzg0MzhcIiwgXCIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZmY4MjVmMmU1NzUwYWNjNjM5Y2Y5MjNiMzRmMDIzNzFcIiwgXCIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM2NiODMwZWQwNmYzZDBlNTZkN2QwYWQzNTAxMGRlNDJcIiwgXCIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNDU4YjkyNjliMGMwN2Y3NTJlNTkyY2Q3ODMyNTIyZTRcIiwgXCIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwN2YxMWM0MjZiNTQxOGU3ZjZkMTU3N2QzMzIxNzg0MzhcIiwgXCIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZmY4MjVmMmU1NzUwYWNjNjM5Y2Y5MjNiMzRmMDIzNzFcIiwgXCIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDFcIl0sXHJcbiAgICAgICAgICAgIC8vICAgICBcIjIwXCJcclxuICAgICAgICAgICAgLy8gKS5zZW5kKHtcclxuICAgICAgICAgICAgLy8gICAgIGZyb206IGFjY291bnRzWzBdXHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlRyYW5zYWN0aW9uIGhhc2g6IFwiLCBoYXNoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lci8+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9udHJhbnNmZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj50cmFuc2ZlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25DbGFpbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPmNsYWltPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9