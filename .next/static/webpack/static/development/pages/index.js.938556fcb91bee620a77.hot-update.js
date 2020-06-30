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
              return axios__WEBPACK_IMPORTED_MODULE_16___default.a.get(url, {
                params: {
                  witness: witnessparams
                }
              }).then(function (res) {
                if (res.statusText == 'OK') {
                  alert();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImdldEVSQ0NvbnRyYWN0SW5zdGFuY2UiLCJkYWlJbnN0YW5jZSIsIm1ldGhvZHMiLCJhcHByb3ZlIiwic2VuZCIsImZyb20iLCJhcHByb3ZlaGFzaCIsImNvbnNvbGUiLCJsb2ciLCJnZXRaa1NuYXJrSW5zdGFuY2UiLCJ6a0luc3RhbmNlIiwidHJhbnNmZXJOb3RlVG9Db250cmFjdCIsImhhc2giLCJ3aXRuZXNzcGFyYW1zIiwiZ2V0V2l0bmVzcyIsInVybCIsIkF4aW9zIiwiZ2V0IiwicGFyYW1zIiwid2l0bmVzcyIsInRoZW4iLCJyZXMiLCJzdGF0dXNUZXh0IiwiYWxlcnQiLCJlcnIiLCJzZXRTdGF0ZSIsInNob3VsZFN3YXAiLCJibG9ja2luZyIsIm9udHJhbnNmZXIiLCJvbkNsYWltIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEs7Ozs7Ozs7Ozs7Ozs7Ozs7bVpBRVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1RDLG1CQUFLLENBQUNDLGNBQU47QUFEUztBQUFBO0FBQUEscUJBR2tCQyx5REFBSSxDQUFDQyxHQUFMLENBQVNDLFdBQVQsRUFIbEI7O0FBQUE7QUFHQ0Msc0JBSEQ7QUFBQTtBQUFBLHFCQUtxQkMsbUdBQXNCLENBQUNKLHlEQUFELENBTDNDOztBQUFBO0FBS0NLLHlCQUxEO0FBQUE7QUFBQSxxQkFNcUJBLFdBQVcsQ0FBQ0MsT0FBWixDQUFvQkMsT0FBcEIsQ0FDdEIsNENBRHNCLEVBRXRCLElBRnNCLEVBR3hCQyxJQUh3QixDQUduQjtBQUNIQyxvQkFBSSxFQUFFTixRQUFRLENBQUMsQ0FBRDtBQURYLGVBSG1CLENBTnJCOztBQUFBO0FBTUNPLHlCQU5EO0FBWUxDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCRixXQUE3QjtBQVpLO0FBQUEscUJBY29CRywrRkFBa0IsQ0FBQ2IseURBQUQsQ0FkdEM7O0FBQUE7QUFjQ2Msd0JBZEQ7QUFBQTtBQUFBLHFCQWVjQSxVQUFVLENBQUNSLE9BQVgsQ0FBbUJTLHNCQUFuQixDQUNmLElBRGUsRUFFZiw0Q0FGZSxFQUdqQlAsSUFIaUIsQ0FHWjtBQUNIQyxvQkFBSSxFQUFFTixRQUFRLENBQUMsQ0FBRDtBQURYLGVBSFksQ0FmZDs7QUFBQTtBQWVDYSxrQkFmRDtBQXFCTEwscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDSSxJQUFsQztBQXJCSztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXdCTEwscUJBQU8sQ0FBQ0MsR0FBUjs7QUF4Qks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSzs7Z1pBNEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNOZCxtQkFBSyxDQUFDQyxjQUFOO0FBRE07QUFBQTtBQUFBLHFCQUdxQkMseURBQUksQ0FBQ0MsR0FBTCxDQUFTQyxXQUFULEVBSHJCOztBQUFBO0FBR0lDLHNCQUhKO0FBQUE7QUFBQSxxQkFJdUJVLCtGQUFrQixDQUFDYix5REFBRCxDQUp6Qzs7QUFBQTtBQUlJYyx3QkFKSjtBQUtJRywyQkFMSixHQUtvQkMseUVBQVUsQ0FDNUIsNENBRDRCLEVBQ2tCO0FBQzlDLGlCQUY0QixFQUc1Qiw0Q0FINEIsRUFHa0I7QUFDOUMsaUJBSjRCLENBTDlCO0FBV0ZQLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUssYUFBWjtBQUVNRSxpQkFiSixHQWFVLG1DQWJWO0FBQUE7QUFBQSxxQkFjSUMsNkNBQUssQ0FBQ0MsR0FBTixDQUFVRixHQUFWLEVBQWU7QUFDakJHLHNCQUFNLEVBQUU7QUFDSkMseUJBQU8sRUFBRU47QUFETDtBQURTLGVBQWYsRUFLRE8sSUFMQyxDQUtJLFVBQUNDLEdBQUQsRUFBUztBQUNYLG9CQUFJQSxHQUFHLENBQUNDLFVBQUosSUFBa0IsSUFBdEIsRUFBNEI7QUFDeEJDLHVCQUFLO0FBQ1IsaUJBRkQsTUFFTztBQUNIaEIseUJBQU8sQ0FBQ0MsR0FBUixDQUFZYSxHQUFaO0FBQ0g7QUFDSixlQVhDLFdBWUssVUFBQ0csR0FBRCxFQUFTO0FBQ2hCakIsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZZ0IsR0FBWjs7QUFDQSxzQkFBS0MsUUFBTCxDQUFjO0FBQUVDLDRCQUFVLEVBQUUsS0FBZDtBQUFxQkMsMEJBQVEsRUFBRTtBQUEvQixpQkFBZDtBQUNILGVBZkssQ0FkSjs7QUFBQTtBQStCRkosbUJBQUssQ0FBQyxNQUFELENBQUwsQ0EvQkUsQ0FpQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBMUNFO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBNENGaEIscUJBQU8sQ0FBQ0MsR0FBUjs7QUE1Q0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSzs7Ozs7Ozs2QkFnREQ7QUFDTCxhQUNFLE1BQUMsMkRBQUQsUUFDRSxNQUFDLDhEQUFELE9BREYsRUFFRSxNQUFDLDREQUFELFFBQ0ksTUFBQyx1REFBRCxRQUNJLE1BQUMsdURBQUQsQ0FBTSxHQUFOLFFBQ0ksTUFBQyx1REFBRDtBQUFNLGdCQUFRLEVBQUUsS0FBS29CO0FBQXJCLFNBQ0ksTUFBQyx5REFBRCxtQkFESixDQURKLENBREosRUFPSSxNQUFDLHVEQUFELENBQU0sR0FBTixRQUNJLE1BQUMsdURBQUQ7QUFBTSxnQkFBUSxFQUFFLEtBQUtDO0FBQXJCLFNBQ0ksTUFBQyx5REFBRCxnQkFESixDQURKLENBUEosQ0FESixDQUZGLENBREY7QUFvQkg7Ozs7RUFuR2VDLCtDOztBQXNHTHJDLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy45Mzg1NTZmY2I5MWJlZTYyMGE3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBGb3JtLCBCdXR0b24sIEdyaWQsIElucHV0IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHtnZXRaa1NuYXJrSW5zdGFuY2UsIGdldEVSQ0NvbnRyYWN0SW5zdGFuY2V9IGZyb20gJy4uL2NvbmZpZy9pbnN0YW5jZXMvY29udHJhY3RJbnN0YW5jZXMnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9jb25maWcvd2ViMy93ZWIzJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7Z2V0V2l0bmVzc30gZnJvbSBcIi4uL2Z1bmN0aW9ucy9nZXRXaXRuZXNzXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgb250cmFuc2ZlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhaUluc3RhbmNlID0gYXdhaXQgZ2V0RVJDQ29udHJhY3RJbnN0YW5jZSh3ZWIzKTtcclxuICAgICAgICAgICAgY29uc3QgYXBwcm92ZWhhc2ggPSBhd2FpdCBkYWlJbnN0YW5jZS5tZXRob2RzLmFwcHJvdmUoXHJcbiAgICAgICAgICAgICAgICBcIjB4QkVlMDJGRDFlNWI5ZTNCMzRBODU2RmIxRTY0OTNkRkM4NTQ5NjhkQlwiLFxyXG4gICAgICAgICAgICAgICAgXCIxMFwiXHJcbiAgICAgICAgICAgICkuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcHByb3ZlSGFzaDogXCIsIGFwcHJvdmVoYXNoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHprSW5zdGFuY2UgPSBhd2FpdCBnZXRaa1NuYXJrSW5zdGFuY2Uod2ViMyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhc2ggPSBhd2FpdCB6a0luc3RhbmNlLm1ldGhvZHMudHJhbnNmZXJOb3RlVG9Db250cmFjdChcclxuICAgICAgICAgICAgICAgIFwiMTBcIixcclxuICAgICAgICAgICAgICAgIFwiMHhFMzNmNEMyMzA2ZUZFOUJGNjZhNjRBM2M0MjQwOGQyRmUxQ2I4OTBmXCIsXHJcbiAgICAgICAgICAgICkuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUcmFuc2FjdGlvbiBoYXNoOiBcIiwgaGFzaCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgb25DbGFpbSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAgICAgY29uc3QgemtJbnN0YW5jZSA9IGF3YWl0IGdldFprU25hcmtJbnN0YW5jZSh3ZWIzKTtcclxuICAgICAgICAgICAgY29uc3Qgd2l0bmVzc3BhcmFtcyA9IGdldFdpdG5lc3MoXHJcbiAgICAgICAgICAgICAgICAnMHg0ODg0NTM5MkY1YTdjNmIzNjBBNzMzZTBBQkUyRWRjQzc0ZjFGNGQ2JywgLy8gc2VuZGVyXHJcbiAgICAgICAgICAgICAgICAnOScsIFxyXG4gICAgICAgICAgICAgICAgJzB4RTMzZjRDMjMwNmVGRTlCRjY2YTY0QTNjNDI0MDhkMkZlMUNiODkwZicsIC8vIHJlY2VpdmVyXHJcbiAgICAgICAgICAgICAgICAnMSdcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cod2l0bmVzc3BhcmFtcylcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2NyZWF0ZXByb29mXCI7XHJcbiAgICAgICAgICAgIGF3YWl0IEF4aW9zLmdldCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpdG5lc3M6IHdpdG5lc3NwYXJhbXNcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzVGV4dCA9PSAnT0snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KClcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG91bGRTd2FwOiBmYWxzZSwgYmxvY2tpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRG9uZVwiKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY29uc3QgaGFzaCA9IGF3YWl0IHprSW5zdGFuY2UubWV0aG9kcy5jbGFpbU5vdGUoXHJcbiAgICAgICAgICAgIC8vICAgICBbXCIweDE2OGJhYjFiYmJjMTU5MzZiZWI1NjViNTFjZThmZWE5OTgwMDZhMGZhOTU2NzQxN2FhNjI2MWY0NmRjZDE2ZjlcIiwgXCIweDAxZTVjNzk0YWI4Mjk5NzA1YzMxOTM2NmQxYmIyYmVlNzliOTZmMDVmYTA4YzlhYTEwM2Y4ZGNiNDNhODgwNmJcIl0sXHJcbiAgICAgICAgICAgIC8vICAgICBbW1wiMHgxMTY3Zjk3NDAxMTRmZTE0ZGRiMDU0NWM0MTE4MzYyNTg5ZmQ3ZTdlZjBiY2FkYTAyYzAyMTJiMTUzNzU1ZDUxXCIsIFwiMHgxYjkyNDUxZjdhMmY4Y2U4OTYxNzFhOGQ1ODQyZjM0NTU0NDZmMmIzNWUxZmI4MWExZjUwNDBjYmNhY2U1NGVkXCJdLCBbXCIweDMwNTgzOTY1YTI4NGY4N2Y3MzNjZjBjNTcwMTZkOTg0NDY1MDBmMzE1NTlmODEwYmM2YWE2ZDBjNDRmMmJkZDVcIiwgXCIweDA2NmI2NGRkZTU1MjVkMzQ5MDExNzA3YjZmNjY0Y2MxYzFjNGI1OGMzYjgyMjAxNjM4MTc5NjY3NTU2NWZkZjRcIl1dLFxyXG4gICAgICAgICAgICAvLyAgICAgW1wiMHgxMmQ3OWY1YWM0YzZjYWM4NGM5N2ExMTNiZmE5ZDJhMGMyN2JiZTgxOGU0Y2EwYWFkNGU5ZTcwMTVmMmVjMjRhXCIsIFwiMHgxNzA5M2JiYjg1OWFiNTMyMzJiNDA4YjAxMmU3NjFiMWRjODdjMGNjOWQxMmQwOWU4ZDJjOTkyNDNkMWYxN2M3XCJdLFxyXG4gICAgICAgICAgICAvLyAgICAgW1wiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDdmMTFjNDI2YjU0MThlN2Y2ZDE1NzdkMzMyMTc4NDM4XCIsIFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmODI1ZjJlNTc1MGFjYzYzOWNmOTIzYjM0ZjAyMzcxXCIsIFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDNjYjgzMGVkMDZmM2QwZTU2ZDdkMGFkMzUwMTBkZTQyXCIsIFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDQ1OGI5MjY5YjBjMDdmNzUyZTU5MmNkNzgzMjUyMmU0XCIsIFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDdmMTFjNDI2YjU0MThlN2Y2ZDE1NzdkMzMyMTc4NDM4XCIsIFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmODI1ZjJlNTc1MGFjYzYzOWNmOTIzYjM0ZjAyMzcxXCIsIFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxXCJdLFxyXG4gICAgICAgICAgICAvLyAgICAgXCIyMFwiXHJcbiAgICAgICAgICAgIC8vICkuc2VuZCh7XHJcbiAgICAgICAgICAgIC8vICAgICBmcm9tOiBhY2NvdW50c1swXVxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJUcmFuc2FjdGlvbiBoYXNoOiBcIiwgaGFzaCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIvPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vbnRyYW5zZmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+dHJhbnNmZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uQ2xhaW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5jbGFpbTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==