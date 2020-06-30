webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./functions/getWitness.js":
/*!*********************************!*\
  !*** ./functions/getWitness.js ***!
  \*********************************/
/*! exports provided: getWitness */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWitness", function() { return getWitness; });
// This compute witness script is inspired blockchain dev community from previous hackathon
var crypto = __webpack_require__(/*! crypto */ "./node_modules/crypto-browserify/index.js");

var BN = __webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js");

function getSecretParams(concat) {
  return [concat.slice(0, 32), concat.slice(32, 64), concat.slice(64, 96), concat.slice(96)];
}

function getPublicParams(payload) {
  var buffer = Buffer.from(payload, 'hex');
  var digest = crypto.createHash('sha256').update(buffer).digest('hex');
  return [digest.slice(0, 32), digest.slice(32)];
}

function getPayload(owner, owneramount) {
  var address = new BN(owner, 16).toString(16, 64);
  var amount = new BN(owneramount, 16).toString(16, 64);
  return address + amount;
}

function getParams(owner, amount) {
  var payload = getPayload(owner, amount);
  var zkParams = getPublicParams(payload).concat(getSecretParams(payload));
  return zkParams;
}

function formatWitness(params) {
  var command = "";
  params.forEach(function (param) {
    command += "".concat(new BN(param, 16).toString(10), " ");
  });
  console.log(command);
  return command;
}

function getWitness(from, fAmount, to, tAmount) {
  from = from.slice(2);
  fAmount = fAmount.slice(2);
  to = to.slice(2);
  tAmount = tAmount.slice(2);
  var diff = parseInt(fAmount.slice(2), 16) - parseInt(tAmount.slice(2), 16);
  var params = getParams(from, fAmount).concat(getParams(to, tAmount));
  var leftOverWitness = getParams(from, diff);
  leftOverWitness.splice(2, 2);
  return formatWitness(params.concat(leftOverWitness));
} // getWitness(
//     // "0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c",
//     '0x48845392F5a7c6b360A733e0ABE2EdcC74f1F4d6', // sender
//     '9', // value of the secret note
//     '0xE33f4C2306eFE9BF66a64A3c42408d2Fe1Cb890f', // receiver
//     // "0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C",
//     '1' // value to be sent
//   );

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mdW5jdGlvbnMvZ2V0V2l0bmVzcy5qcyJdLCJuYW1lcyI6WyJjcnlwdG8iLCJyZXF1aXJlIiwiQk4iLCJnZXRTZWNyZXRQYXJhbXMiLCJjb25jYXQiLCJzbGljZSIsImdldFB1YmxpY1BhcmFtcyIsInBheWxvYWQiLCJidWZmZXIiLCJCdWZmZXIiLCJmcm9tIiwiZGlnZXN0IiwiY3JlYXRlSGFzaCIsInVwZGF0ZSIsImdldFBheWxvYWQiLCJvd25lciIsIm93bmVyYW1vdW50IiwiYWRkcmVzcyIsInRvU3RyaW5nIiwiYW1vdW50IiwiZ2V0UGFyYW1zIiwiemtQYXJhbXMiLCJmb3JtYXRXaXRuZXNzIiwicGFyYW1zIiwiY29tbWFuZCIsImZvckVhY2giLCJwYXJhbSIsImNvbnNvbGUiLCJsb2ciLCJnZXRXaXRuZXNzIiwiZkFtb3VudCIsInRvIiwidEFtb3VudCIsImRpZmYiLCJwYXJzZUludCIsImxlZnRPdmVyV2l0bmVzcyIsInNwbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyx5REFBRCxDQUF0Qjs7QUFDQSxJQUFNQyxFQUFFLEdBQUdELG1CQUFPLENBQUMsNkNBQUQsQ0FBbEI7O0FBR0EsU0FBU0UsZUFBVCxDQUF5QkMsTUFBekIsRUFBaUM7QUFDN0IsU0FBTyxDQUFDQSxNQUFNLENBQUNDLEtBQVAsQ0FBYSxDQUFiLEVBQWdCLEVBQWhCLENBQUQsRUFBc0JELE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLEVBQWIsRUFBaUIsRUFBakIsQ0FBdEIsRUFBNENELE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLEVBQWIsRUFBaUIsRUFBakIsQ0FBNUMsRUFBa0VELE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLEVBQWIsQ0FBbEUsQ0FBUDtBQUNIOztBQUVELFNBQVNDLGVBQVQsQ0FBeUJDLE9BQXpCLEVBQWtDO0FBQzlCLE1BQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFD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cGFnZXNcXGluZGV4LmpzLjc0MDQxNTkyNzZjNTY0MjI3ZDRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGNvbXB1dGUgd2l0bmVzcyBzY3JpcHQgaXMgaW5zcGlyZWQgYmxvY2tjaGFpbiBkZXYgY29tbXVuaXR5IGZyb20gcHJldmlvdXMgaGFja2F0aG9uXHJcblxyXG5jb25zdCBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcclxuY29uc3QgQk4gPSByZXF1aXJlKFwiYm4uanNcIik7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0U2VjcmV0UGFyYW1zKGNvbmNhdCkge1xyXG4gICAgcmV0dXJuIFtjb25jYXQuc2xpY2UoMCwgMzIpLCBjb25jYXQuc2xpY2UoMzIsIDY0KSwgY29uY2F0LnNsaWNlKDY0LCA5NiksIGNvbmNhdC5zbGljZSg5NildO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQdWJsaWNQYXJhbXMocGF5bG9hZCkge1xyXG4gICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20ocGF5bG9hZCwgJ2hleCcpO1xyXG4gICAgY29uc3QgZGlnZXN0ID0gY3J5cHRvLmNyZWF0ZUhhc2goJ3NoYTI1NicpLnVwZGF0ZShidWZmZXIpLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgICByZXR1cm4gW2RpZ2VzdC5zbGljZSgwLCAzMiksIGRpZ2VzdC5zbGljZSgzMildXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBheWxvYWQob3duZXIsIG93bmVyYW1vdW50KSB7XHJcbiAgbGV0IGFkZHJlc3MgPSBuZXcgQk4ob3duZXIsIDE2KS50b1N0cmluZygxNiwgNjQpO1xyXG4gIGxldCBhbW91bnQgPSBuZXcgQk4ob3duZXJhbW91bnQsIDE2KS50b1N0cmluZygxNiwgNjQpO1xyXG4gIHJldHVybiBhZGRyZXNzICsgYW1vdW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXJhbXMob3duZXIsIGFtb3VudCkge1xyXG4gICAgbGV0IHBheWxvYWQgPSBnZXRQYXlsb2FkKG93bmVyLCBhbW91bnQpXHJcbiAgICBsZXQgemtQYXJhbXMgPSBnZXRQdWJsaWNQYXJhbXMocGF5bG9hZCkuY29uY2F0KGdldFNlY3JldFBhcmFtcyhwYXlsb2FkKSk7XHJcbiAgICByZXR1cm4gemtQYXJhbXM7XHJcbn0gXHJcblxyXG5mdW5jdGlvbiBmb3JtYXRXaXRuZXNzKHBhcmFtcykge1xyXG4gICAgbGV0IGNvbW1hbmQgPVwiXCI7XHJcbiAgICBwYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XHJcbiAgICAgIGNvbW1hbmQgKz0gYCR7bmV3IEJOKHBhcmFtLCAxNikudG9TdHJpbmcoMTApfSBgXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coY29tbWFuZCk7XHJcbiAgICByZXR1cm4gY29tbWFuZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdpdG5lc3MoZnJvbSwgZkFtb3VudCwgdG8sIHRBbW91bnQpIHtcclxuICAgIGZyb20gPSBmcm9tLnNsaWNlKDIpXHJcbiAgICBmQW1vdW50ID0gZkFtb3VudC5zbGljZSgyKVxyXG4gICAgdG8gPSB0by5zbGljZSgyKVxyXG4gICAgdEFtb3VudCA9IHRBbW91bnQuc2xpY2UoMilcclxuICAgIHZhciBkaWZmID0gcGFyc2VJbnQoZkFtb3VudC5zbGljZSgyKSwgMTYpIC0gcGFyc2VJbnQodEFtb3VudC5zbGljZSgyKSwgMTYpXHJcbiAgICBjb25zdCBwYXJhbXMgPSBnZXRQYXJhbXMoZnJvbSwgZkFtb3VudCkuY29uY2F0KGdldFBhcmFtcyh0bywgdEFtb3VudCkpO1xyXG4gICAgbGV0IGxlZnRPdmVyV2l0bmVzcyA9IGdldFBhcmFtcyhmcm9tLCBkaWZmKTtcclxuICAgIGxlZnRPdmVyV2l0bmVzcy5zcGxpY2UoMiwgMik7XHJcbiAgICByZXR1cm4gZm9ybWF0V2l0bmVzcyhwYXJhbXMuY29uY2F0KGxlZnRPdmVyV2l0bmVzcykpO1xyXG59XHJcblxyXG5cclxuLy8gZ2V0V2l0bmVzcyhcclxuLy8gICAgIC8vIFwiMHhDQTM1YjdkOTE1NDU4RUY1NDBhRGU2MDY4ZEZlMkY0NEU4ZmE3MzNjXCIsXHJcbi8vICAgICAnMHg0ODg0NTM5MkY1YTdjNmIzNjBBNzMzZTBBQkUyRWRjQzc0ZjFGNGQ2JywgLy8gc2VuZGVyXHJcbi8vICAgICAnOScsIC8vIHZhbHVlIG9mIHRoZSBzZWNyZXQgbm90ZVxyXG4vLyAgICAgJzB4RTMzZjRDMjMwNmVGRTlCRjY2YTY0QTNjNDI0MDhkMkZlMUNiODkwZicsIC8vIHJlY2VpdmVyXHJcbi8vICAgICAvLyBcIjB4MTQ3MjNBMDlBQ2ZmNkQyQTYwRGNkRjdhQTRBRmYzMDhGRERDMTYwQ1wiLFxyXG4vLyAgICAgJzEnIC8vIHZhbHVlIHRvIGJlIHNlbnRcclxuLy8gICApO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==