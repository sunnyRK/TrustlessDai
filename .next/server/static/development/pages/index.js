module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CommonHeader.js":
/*!************************************!*\
  !*** ./components/CommonHeader.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const getWidth = () => {
  const isSSR = true;
  return isSSR ? semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Responsive"].onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      merchantLoading: false,
      investorLoading: false
    });

    _defineProperty(this, "hideFixedMenu", () => this.setState({
      fixed: false
    }));

    _defineProperty(this, "showFixedMenu", () => this.setState({
      fixed: true
    }));

    _defineProperty(this, "HomePage", async event => {
      event.preventDefault();

      try {
        _routes__WEBPACK_IMPORTED_MODULE_3__["Router"].pushRoute(`/`);
      } catch (err) {}
    });
  }

  render() {
    const {
      children
    } = this.props;
    const {
      fixed
    } = this.state;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Responsive"], {
      getWidth: getWidth,
      minWidth: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Responsive"].onlyTablet.minWidth
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Visibility"], {
      once: false,
      onBottomPassed: this.showFixedMenu,
      onBottomPassedReverse: this.hideFixedMenu
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
      inverted: true,
      textAlign: "center",
      style: {
        minHeight: 65,
        padding: '0em 0em',
        marginBottom: "30px"
      },
      vertical: true
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
      fixed: fixed ? 'top' : null,
      inverted: !fixed,
      pointing: !fixed,
      secondary: !fixed,
      size: "large"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
      inverted: true,
      pointing: true,
      secondary: true,
      size: "large"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: this.HomePage
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      style: {
        marginLeft: '0em',
        color: "#000"
      }
    }, "InstCryp")))))))), children);
  }

}

DesktopContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node
};

class MobileContainer extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});

    _defineProperty(this, "handleSidebarHide", () => this.setState({
      sidebarOpened: false
    }));

    _defineProperty(this, "handleToggle", () => this.setState({
      sidebarOpened: true
    }));

    _defineProperty(this, "HomePage", async event => {
      event.preventDefault();

      try {
        _routes__WEBPACK_IMPORTED_MODULE_3__["Router"].pushRoute(`/`);
      } catch (err) {}
    });
  }

  render() {
    const {
      children
    } = this.props;
    const {
      sidebarOpened
    } = this.state;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Responsive"], {
      as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Sidebar"].Pushable,
      getWidth: getWidth,
      maxWidth: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Responsive"].onlyMobile.maxWidth
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
      inverted: true,
      textAlign: "center",
      style: {
        minHeight: 65,
        padding: '1em 0em',
        marginBottom: "30px"
      },
      vertical: true
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
      inverted: true,
      pointing: true,
      secondary: true,
      size: "large"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: this.HomePage
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      style: {
        marginLeft: '0em',
        color: "#000"
      }
    }, "InstCryp")))))), children);
  }

}

MobileContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node
};

const ResponsiveContainer = ({
  children
}) => __jsx("div", null, __jsx(DesktopContainer, null, children), __jsx(MobileContainer, null, children));

ResponsiveContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node
};

class CHeader extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(ResponsiveContainer, null);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CHeader);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CommonHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommonHeader */ "./components/CommonHeader.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/static/styles.css"
  })), !props.hideHeader && __jsx(_CommonHeader__WEBPACK_IMPORTED_MODULE_1__["default"], null), props.children, console.log('show sidebar======', props.showSidebar), !props.hideFooter && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
    inverted: true,
    vertical: true,
    style: {
      padding: '4em 4em',
      marginTop: "350px"
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    divided: true,
    inverted: true,
    stackable: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 3
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    inverted: true,
    as: "h4",
    content: "About"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"], {
    link: true,
    inverted: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
    as: "a"
  }, __jsx("a", {
    href: "https://www.linkedin.com/in/sunnyradadiya/",
    target: "_blank"
  }, "LinkedIn")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 3
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    inverted: true,
    as: "h4",
    content: "Contact Us"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"], {
    link: true,
    inverted: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
    as: "a"
  }, "radadiyasunny970@gmail.com"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
    as: "a"
  }, "+91 - 99090 97776"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 7
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    as: "h4",
    inverted: true
  }, "Location"), __jsx("p", null, "Bengaluru, India")))))));
});

/***/ }),

/***/ "./config/instances/contractInstances.js":
/*!***********************************************!*\
  !*** ./config/instances/contractInstances.js ***!
  \***********************************************/
/*! exports provided: getERCContractInstance, getZkSnarkInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getERCContractInstance", function() { return getERCContractInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZkSnarkInstance", function() { return getZkSnarkInstance; });
function getERCContractInstance(web3) {
  let abi;
  abi = '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]';
  const address = "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa";
  const jsonAbi = JSON.parse(abi);
  const contract = new web3.eth.Contract(jsonAbi, address);
  return contract;
}
function getZkSnarkInstance(web3) {
  const abi = '[{"constant":true,"inputs":[],"name":"daiAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"a","type":"uint256[2]"},{"name":"b","type":"uint256[2][2]"},{"name":"c","type":"uint256[2]"},{"name":"input","type":"uint256[7]"}],"name":"verifyTx","outputs":[{"name":"r","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"addr1","type":"address"},{"name":"addr2","type":"address"},{"name":"contractAddress","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"to","type":"address"}],"name":"transferNoteToContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"noteMapping","outputs":[{"name":"notes","type":"bytes32"},{"name":"isValid","type":"bool"},{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"a","type":"uint256[2]"},{"name":"b","type":"uint256[2][2]"},{"name":"c","type":"uint256[2]"},{"name":"input","type":"uint256[7]"},{"name":"amount","type":"uint256"}],"name":"claimNote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"addr","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"}],"name":"Verified","type":"event"}]';
  const address = "0xBEe02FD1e5b9e3B34A856Fb1E6493dFC854968dB";
  const jsonAbi = JSON.parse(abi);
  const contract = new web3.eth.Contract(jsonAbi, address);
  return contract;
}

/***/ }),

/***/ "./config/web3/web3.js":
/*!*****************************!*\
  !*** ./config/web3/web3.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Web3 = __webpack_require__(/*! web3 */ "web3");

let realweb3;
let provider;

if (false) {} else {
  // we are in the server and matamask is not using by user
  provider = new Web3.providers.HttpProvider('https://kovan.infura.io/v3/944f5399c18049d9920b3bc9c60583de');
} // typeof window.web3.enable();


realweb3 = new Web3(provider);
module.exports = realweb3;

/***/ }),

/***/ "./functions/getWitness.js":
/*!*********************************!*\
  !*** ./functions/getWitness.js ***!
  \*********************************/
/*! exports provided: getWitness */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWitness", function() { return getWitness; });
// This compute witness script is inspired blockchain dev community from previous hackathon
const crypto = __webpack_require__(/*! crypto */ "crypto");

const BN = __webpack_require__(/*! bn.js */ "bn.js");

function getSecretParams(concat) {
  return [concat.slice(0, 32), concat.slice(32, 64), concat.slice(64, 96), concat.slice(96)];
}

function getPublicParams(payload) {
  const buffer = Buffer.from(payload, 'hex');
  const digest = crypto.createHash('sha256').update(buffer).digest('hex');
  return [digest.slice(0, 32), digest.slice(32)];
}

function getPayload(owner, owneramount) {
  let address = new BN(owner, 16).toString(16, 64);
  let amount = new BN(owneramount, 16).toString(16, 64);
  return address + amount;
}

function getParams(owner, amount) {
  let payload = getPayload(owner, amount);
  let zkParams = getPublicParams(payload).concat(getSecretParams(payload));
  return zkParams;
}

function formatWitness(params) {
  let command = "";
  params.forEach(param => {
    command += `${new BN(param, 16).toString(10)} `;
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
  const params = getParams(from, fAmount).concat(getParams(to, tAmount));
  let leftOverWitness = getParams(from, diff);
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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_instances_contractInstances__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/instances/contractInstances */ "./config/instances/contractInstances.js");
/* harmony import */ var _config_web3_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/web3/web3 */ "./config/web3/web3.js");
/* harmony import */ var _config_web3_web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config_web3_web3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _functions_getWitness__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/getWitness */ "./functions/getWitness.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "ontransfer", async () => {
      event.preventDefault();

      try {
        const accounts = await _config_web3_web3__WEBPACK_IMPORTED_MODULE_4___default.a.eth.getAccounts();
        const daiInstance = await Object(_config_instances_contractInstances__WEBPACK_IMPORTED_MODULE_3__["getERCContractInstance"])(_config_web3_web3__WEBPACK_IMPORTED_MODULE_4___default.a);
        const approvehash = await daiInstance.methods.approve("0xBEe02FD1e5b9e3B34A856Fb1E6493dFC854968dB", "10").send({
          from: accounts[0]
        });
        console.log("approveHash: ", approvehash);
        const zkInstance = await Object(_config_instances_contractInstances__WEBPACK_IMPORTED_MODULE_3__["getZkSnarkInstance"])(_config_web3_web3__WEBPACK_IMPORTED_MODULE_4___default.a);
        const hash = await zkInstance.methods.transferNoteToContract("10", "0xE33f4C2306eFE9BF66a64A3c42408d2Fe1Cb890f").send({
          from: accounts[0]
        });
        console.log("Transaction hash: ", hash);
      } catch (error) {
        console.log(error);
      }
    });

    _defineProperty(this, "onClaim", async () => {
      event.preventDefault();

      try {
        const accounts = await _config_web3_web3__WEBPACK_IMPORTED_MODULE_4___default.a.eth.getAccounts();
        const zkInstance = await Object(_config_instances_contractInstances__WEBPACK_IMPORTED_MODULE_3__["getZkSnarkInstance"])(_config_web3_web3__WEBPACK_IMPORTED_MODULE_4___default.a);
        const witnessparams = Object(_functions_getWitness__WEBPACK_IMPORTED_MODULE_6__["getWitness"])('0x48845392F5a7c6b360A733e0ABE2EdcC74f1F4d6', // sender
        '9', '0xE33f4C2306eFE9BF66a64A3c42408d2Fe1Cb890f', // receiver
        '1');
        console.log(witnessparams);
        const url = "http://localhost:3001/createproof";
        await axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("http://localhost:3001/createproof?witness=168904202930327939080492230969004622904 339630068017193623570711849636010664817 1216631698 326532002671535014699329485375999702230 0 0 80710054703952517336223123171789823554 92441430577956810800440641638774416100 3812576291 9221067889684513358870464131861547279 0 0 168904202930327939080492230969004622904 339630068017193623570711849636010664817 0 0", {// params: {
          //     witness: witnessparams
          //   }
        }).then(res => {
          if (res.statusText == 'OK') {
            console.log("response:", res);
          } else {
            console.log(res);
          }
        }).catch(err => {
          console.log(err);
          this.setState({
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
      } catch (error) {
        console.log(error);
      }
    });
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"], null), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: this.ontransfer
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "transfer"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: this.onClaim
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "claim"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes")();

routes.add('/transactionHistory', 'transactionHistory'); // export default routes; 

module.exports = routes;

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\A Computer\Blockchain\ETHGlobal\Gitcoin\MakerDao\TrustlessDai\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "bn.js":
/*!************************!*\
  !*** external "bn.js" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bn.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21tb25IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2luc3RhbmNlcy9jb250cmFjdEluc3RhbmNlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvd2ViMy93ZWIzLmpzIiwid2VicGFjazovLy8uL2Z1bmN0aW9ucy9nZXRXaXRuZXNzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJuLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3J5cHRvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yb3V0ZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2ViM1wiIl0sIm5hbWVzIjpbImdldFdpZHRoIiwiaXNTU1IiLCJSZXNwb25zaXZlIiwib25seVRhYmxldCIsIm1pbldpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIkRlc2t0b3BDb250YWluZXIiLCJDb21wb25lbnQiLCJtZXJjaGFudExvYWRpbmciLCJpbnZlc3RvckxvYWRpbmciLCJzZXRTdGF0ZSIsImZpeGVkIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIlJvdXRlciIsInB1c2hSb3V0ZSIsImVyciIsInJlbmRlciIsImNoaWxkcmVuIiwicHJvcHMiLCJzdGF0ZSIsInNob3dGaXhlZE1lbnUiLCJoaWRlRml4ZWRNZW51IiwibWluSGVpZ2h0IiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsIkhvbWVQYWdlIiwibWFyZ2luTGVmdCIsImNvbG9yIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsIk1vYmlsZUNvbnRhaW5lciIsInNpZGViYXJPcGVuZWQiLCJTaWRlYmFyIiwiUHVzaGFibGUiLCJvbmx5TW9iaWxlIiwibWF4V2lkdGgiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwiQ0hlYWRlciIsImhpZGVIZWFkZXIiLCJjb25zb2xlIiwibG9nIiwic2hvd1NpZGViYXIiLCJoaWRlRm9vdGVyIiwibWFyZ2luVG9wIiwiZ2V0RVJDQ29udHJhY3RJbnN0YW5jZSIsIndlYjMiLCJhYmkiLCJhZGRyZXNzIiwianNvbkFiaSIsIkpTT04iLCJwYXJzZSIsImNvbnRyYWN0IiwiZXRoIiwiQ29udHJhY3QiLCJnZXRaa1NuYXJrSW5zdGFuY2UiLCJXZWIzIiwicmVxdWlyZSIsInJlYWx3ZWIzIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3J5cHRvIiwiQk4iLCJnZXRTZWNyZXRQYXJhbXMiLCJjb25jYXQiLCJzbGljZSIsImdldFB1YmxpY1BhcmFtcyIsInBheWxvYWQiLCJidWZmZXIiLCJCdWZmZXIiLCJmcm9tIiwiZGlnZXN0IiwiY3JlYXRlSGFzaCIsInVwZGF0ZSIsImdldFBheWxvYWQiLCJvd25lciIsIm93bmVyYW1vdW50IiwidG9TdHJpbmciLCJhbW91bnQiLCJnZXRQYXJhbXMiLCJ6a1BhcmFtcyIsImZvcm1hdFdpdG5lc3MiLCJwYXJhbXMiLCJjb21tYW5kIiwiZm9yRWFjaCIsInBhcmFtIiwiZ2V0V2l0bmVzcyIsImZBbW91bnQiLCJ0byIsInRBbW91bnQiLCJkaWZmIiwicGFyc2VJbnQiLCJsZWZ0T3ZlcldpdG5lc3MiLCJzcGxpY2UiLCJJbmRleCIsImFjY291bnRzIiwiZ2V0QWNjb3VudHMiLCJkYWlJbnN0YW5jZSIsImFwcHJvdmVoYXNoIiwibWV0aG9kcyIsImFwcHJvdmUiLCJzZW5kIiwiemtJbnN0YW5jZSIsImhhc2giLCJ0cmFuc2Zlck5vdGVUb0NvbnRyYWN0IiwiZXJyb3IiLCJ3aXRuZXNzcGFyYW1zIiwidXJsIiwiQXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwic3RhdHVzVGV4dCIsImNhdGNoIiwic2hvdWxkU3dhcCIsImJsb2NraW5nIiwiYWxlcnQiLCJvbnRyYW5zZmVyIiwib25DbGFpbSIsInJvdXRlcyIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBUUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFDbkIsUUFBTUMsS0FBSyxPQUFY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OEUxQjVGLFFBQU0sR0FBRztBQUNMLFdBQ0UsTUFBQywwREFBRCxRQUNFLE1BQUMsNkRBQUQsT0FERixFQUVFLE1BQUMsMkRBQUQsUUFDSSxNQUFDLHNEQUFELFFBQ0ksTUFBQyxzREFBRCxDQUFNLEdBQU4sUUFDSSxNQUFDLHNEQUFEO0FBQU0sY0FBUSxFQUFFLEtBQUt3RztBQUFyQixPQUNJLE1BQUMsd0RBQUQsbUJBREosQ0FESixDQURKLEVBT0ksTUFBQyxzREFBRCxDQUFNLEdBQU4sUUFDSSxNQUFDLHNEQUFEO0FBQU0sY0FBUSxFQUFFLEtBQUtDO0FBQXJCLE9BQ0ksTUFBQyx3REFBRCxnQkFESixDQURKLENBUEosQ0FESixDQUZGLENBREY7QUFvQkg7O0FBbkd5Qjs7QUFzR2Z4QixvRUFBZixFOzs7Ozs7Ozs7OztBQy9HQSxNQUFNeUIsTUFBTSxHQUFHakUsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFQLEVBQWY7O0FBRUFpRSxNQUFNLENBQ0RDLEdBREwsQ0FDUyxxQkFEVCxFQUNnQyxvQkFEaEMsRSxDQUVBOztBQUNBN0QsTUFBTSxDQUFDQyxPQUFQLEdBQWlCMkQsTUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sXHJcbiAgICBGb3JtLFxyXG4gICAgQ29udGFpbmVyLFxyXG4gICAgTWVudSxcclxuICAgIFJlc3BvbnNpdmUsXHJcbiAgICBTZWdtZW50LFxyXG4gICAgU2lkZWJhcixcclxuICAgIFZpc2liaWxpdHksIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9yb3V0ZXMnO1xyXG5cclxuY29uc3QgZ2V0V2lkdGggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpc1NTUiA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXHJcbiAgICByZXR1cm4gaXNTU1IgPyBSZXNwb25zaXZlLm9ubHlUYWJsZXQubWluV2lkdGggOiB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gIH1cclxuXHJcbmNsYXNzIERlc2t0b3BDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgIG1lcmNoYW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGludmVzdG9yTG9hZGluZzogZmFsc2VcclxuICAgIH1cclxuICBcclxuICAgIGhpZGVGaXhlZE1lbnUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZml4ZWQ6IGZhbHNlIH0pXHJcbiAgICBzaG93Rml4ZWRNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZpeGVkOiB0cnVlIH0pXHJcbiAgXHJcbiAgICAgIEhvbWVQYWdlID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvYCk7XHJcbiAgICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgXHJcbiAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgICAgY29uc3QgeyBmaXhlZCB9ID0gdGhpcy5zdGF0ZVxyXG4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZXNwb25zaXZlIGdldFdpZHRoPXtnZXRXaWR0aH0gbWluV2lkdGg9e1Jlc3BvbnNpdmUub25seVRhYmxldC5taW5XaWR0aH0+XHJcbiAgICAgICAgICA8VmlzaWJpbGl0eVxyXG4gICAgICAgICAgICBvbmNlPXtmYWxzZX1cclxuICAgICAgICAgICAgb25Cb3R0b21QYXNzZWQ9e3RoaXMuc2hvd0ZpeGVkTWVudX1cclxuICAgICAgICAgICAgb25Cb3R0b21QYXNzZWRSZXZlcnNlPXt0aGlzLmhpZGVGaXhlZE1lbnV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTZWdtZW50XHJcbiAgICAgICAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6IDY1LCBwYWRkaW5nOiAnMGVtIDBlbScsIG1hcmdpbkJvdHRvbTogXCIzMHB4XCIgfX1cclxuICAgICAgICAgICAgICB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgIGZpeGVkPXtmaXhlZCA/ICd0b3AnIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIGludmVydGVkPXshZml4ZWR9XHJcbiAgICAgICAgICAgICAgICBwb2ludGluZz17IWZpeGVkfVxyXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXshZml4ZWR9XHJcbiAgICAgICAgICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudSBpbnZlcnRlZCBwb2ludGluZyBzZWNvbmRhcnkgc2l6ZT0nbGFyZ2UnPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5Ib21lUGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcwZW0nLCBjb2xvcjogXCIjMDAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEluc3RDcnlwXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgIDwvVmlzaWJpbGl0eT5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1Jlc3BvbnNpdmU+XHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgRGVza3RvcENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgfVxyXG5cclxuICBjbGFzcyBNb2JpbGVDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIFxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2lkZWJhckhpZGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2lkZWJhck9wZW5lZDogZmFsc2UgfSlcclxuICAgIGhhbmRsZVRvZ2dsZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzaWRlYmFyT3BlbmVkOiB0cnVlIH0pXHJcbiAgXHJcbiAgICBIb21lUGFnZSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL2ApO1xyXG4gICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICBjb25zdCB7IHNpZGViYXJPcGVuZWQgfSA9IHRoaXMuc3RhdGVcclxuICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxSZXNwb25zaXZlXHJcbiAgICAgICAgICAgICAgYXM9e1NpZGViYXIuUHVzaGFibGV9XHJcbiAgICAgICAgICAgICAgZ2V0V2lkdGg9e2dldFdpZHRofVxyXG4gICAgICAgICAgICAgIG1heFdpZHRoPXtSZXNwb25zaXZlLm9ubHlNb2JpbGUubWF4V2lkdGh9PlxyXG4gICAgICAgICAgICA8U2VnbWVudFxyXG4gICAgICAgICAgICAgIGludmVydGVkXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiA2NSwgcGFkZGluZzogJzFlbSAwZW0nLCBtYXJnaW5Cb3R0b206IFwiMzBweFwifX1cclxuICAgICAgICAgICAgICB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUgaW52ZXJ0ZWQgcG9pbnRpbmcgc2Vjb25kYXJ5IHNpemU9J2xhcmdlJz5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5Ib21lUGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcwZW0nLCBjb2xvcjogXCIjMDAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEluc3RDcnlwXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvUmVzcG9uc2l2ZT5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBNb2JpbGVDb250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIH1cclxuICBcclxuICBjb25zdCBSZXNwb25zaXZlQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPERlc2t0b3BDb250YWluZXI+e2NoaWxkcmVufTwvRGVza3RvcENvbnRhaW5lcj5cclxuICAgICAgPE1vYmlsZUNvbnRhaW5lcj57Y2hpbGRyZW59PC9Nb2JpbGVDb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbiAgXHJcbiAgUmVzcG9uc2l2ZUNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgfVxyXG5cclxuY2xhc3MgQ0hlYWRlciBleHRlbmRzIENvbXBvbmVudHtcclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDSGVhZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkZXJzIGZyb20gJy4vQ29tbW9uSGVhZGVyJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBMaXN0LCBIZWFkZXIsIEdyaWQsIFNlZ21lbnQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9wcyA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi40LjAvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCI+PC9saW5rPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL3N0eWxlcy5jc3NcIj48L2xpbms+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgeyAhcHJvcHMuaGlkZUhlYWRlciAmJiA8SGVhZGVycy8+IH1cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICB7Y29uc29sZS5sb2coJ3Nob3cgc2lkZWJhcj09PT09PScsIHByb3BzLnNob3dTaWRlYmFyKX1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIXByb3BzLmhpZGVGb290ZXIgJiZcclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCBpbnZlcnRlZCB2ZXJ0aWNhbCBzdHlsZT17eyBwYWRkaW5nOiAnNGVtIDRlbScsIG1hcmdpblRvcDogXCIzNTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBkaXZpZGVkIGludmVydGVkIHN0YWNrYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBpbnZlcnRlZCBhcz0naDQnIGNvbnRlbnQ9J0Fib3V0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IGxpbmsgaW52ZXJ0ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zdW5ueXJhZGFkaXlhL1wiIHRhcmdldD1cIl9ibGFua1wiPkxpbmtlZEluPC9hPjwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgaW52ZXJ0ZWQgYXM9J2g0JyBjb250ZW50PSdDb250YWN0IFVzJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IGxpbmsgaW52ZXJ0ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+cmFkYWRpeWFzdW5ueTk3MEBnbWFpbC5jb208L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJz4rOTEgLSA5OTA5MCA5Nzc3NjwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2g0JyBpbnZlcnRlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2NhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJlbmdhbHVydSwgSW5kaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIGdldEVSQ0NvbnRyYWN0SW5zdGFuY2Uod2ViMykge1xyXG4gICAgbGV0IGFiaTtcclxuICAgIGFiaSA9J1t7XCJjb25zdGFudFwiOnRydWUsXCJpbnB1dHNcIjpbXSxcIm5hbWVcIjpcIm5hbWVcIixcIm91dHB1dHNcIjpbe1wibmFtZVwiOlwiXCIsXCJ0eXBlXCI6XCJzdHJpbmdcIn1dLFwicGF5YWJsZVwiOmZhbHNlLFwic3RhdGVNdXRhYmlsaXR5XCI6XCJ2aWV3XCIsXCJ0eXBlXCI6XCJmdW5jdGlvblwifSx7XCJjb25zdGFudFwiOmZhbHNlLFwiaW5wdXRzXCI6W3tcIm5hbWVcIjpcIl9zcGVuZGVyXCIsXCJ0eXBlXCI6XCJhZGRyZXNzXCJ9LHtcIm5hbWVcIjpcIl92YWx1ZVwiLFwidHlwZVwiOlwidWludDI1NlwifV0sXCJuYW1lXCI6XCJhcHByb3ZlXCIsXCJvdXRwdXRzXCI6W3tcIm5hbWVcIjpcIlwiLFwidHlwZVwiOlwiYm9vbFwifV0sXCJwYXlhYmxlXCI6ZmFsc2UsXCJzdGF0ZU11dGFiaWxpdHlcIjpcIm5vbnBheWFibGVcIixcInR5cGVcIjpcImZ1bmN0aW9uXCJ9LHtcImNvbnN0YW50XCI6dHJ1ZSxcImlucHV0c1wiOltdLFwibmFtZVwiOlwidG90YWxTdXBwbHlcIixcIm91dHB1dHNcIjpbe1wibmFtZVwiOlwiXCIsXCJ0eXBlXCI6XCJ1aW50MjU2XCJ9XSxcInBheWFibGVcIjpmYWxzZSxcInN0YXRlTXV0YWJpbGl0eVwiOlwidmlld1wiLFwidHlwZVwiOlwiZnVuY3Rpb25cIn0se1wiY29uc3RhbnRcIjpmYWxzZSxcImlucHV0c1wiOlt7XCJuYW1lXCI6XCJfZnJvbVwiLFwidHlwZVwiOlwiYWRkcmVzc1wifSx7XCJuYW1lXCI6XCJfdG9cIixcInR5cGVcIjpcImFkZHJlc3NcIn0se1wibmFtZVwiOlwiX3ZhbHVlXCIsXCJ0eXBlXCI6XCJ1aW50MjU2XCJ9XSxcIm5hbWVcIjpcInRyYW5zZmVyRnJvbVwiLFwib3V0cHV0c1wiOlt7XCJuYW1lXCI6XCJcIixcInR5cGVcIjpcImJvb2xcIn1dLFwicGF5YWJsZVwiOmZhbHNlLFwic3RhdGVNdXRhYmlsaXR5XCI6XCJub25wYXlhYmxlXCIsXCJ0eXBlXCI6XCJmdW5jdGlvblwifSx7XCJjb25zdGFudFwiOnRydWUsXCJpbnB1dHNcIjpbXSxcIm5hbWVcIjpcImRlY2ltYWxzXCIsXCJvdXRwdXRzXCI6W3tcIm5hbWVcIjpcIlwiLFwidHlwZVwiOlwidWludDhcIn1dLFwicGF5YWJsZVwiOmZhbHNlLFwic3RhdGVNdXRhYmlsaXR5XCI6XCJ2aWV3XCIsXCJ0eXBlXCI6XCJmdW5jdGlvblwifSx7XCJjb25zdGFudFwiOnRydWUsXCJpbnB1dHNcIjpbe1wibmFtZVwiOlwiX293bmVyXCIsXCJ0eXBlXCI6XCJhZGRyZXNzXCJ9XSxcIm5hbWVcIjpcImJhbGFuY2VPZlwiLFwib3V0cHV0c1wiOlt7XCJuYW1lXCI6XCJiYWxhbmNlXCIsXCJ0eXBlXCI6XCJ1aW50MjU2XCJ9XSxcInBheWFibGVcIjpmYWxzZSxcInN0YXRlTXV0YWJpbGl0eVwiOlwidmlld1wiLFwidHlwZVwiOlwiZnVuY3Rpb25cIn0se1wiY29uc3RhbnRcIjp0cnVlLFwiaW5wdXRzXCI6W10sXCJuYW1lXCI6XCJzeW1ib2xcIixcIm91dHB1dHNcIjpbe1wibmFtZVwiOlwiXCIsXCJ0eXBlXCI6XCJzdHJpbmdcIn1dLFwicGF5YWJsZVwiOmZhbHNlLFwic3RhdGVNdXRhYmlsaXR5XCI6XCJ2aWV3XCIsXCJ0eXBlXCI6XCJmdW5jdGlvblwifSx7XCJjb25zdGFudFwiOmZhbHNlLFwiaW5wdXRzXCI6W3tcIm5hbWVcIjpcIl90b1wiLFwidHlwZVwiOlwiYWRkcmVzc1wifSx7XCJuYW1lXCI6XCJfdmFsdWVcIixcInR5cGVcIjpcInVpbnQyNTZcIn1dLFwibmFtZVwiOlwidHJhbnNmZXJcIixcIm91dHB1dHNcIjpbe1wibmFtZVwiOlwiXCIsXCJ0eXBlXCI6XCJib29sXCJ9XSxcInBheWFibGVcIjpmYWxzZSxcInN0YXRlTXV0YWJpbGl0eVwiOlwibm9ucGF5YWJsZVwiLFwidHlwZVwiOlwiZnVuY3Rpb25cIn0se1wiY29uc3RhbnRcIjp0cnVlLFwiaW5wdXRzXCI6W3tcIm5hbWVcIjpcIl9vd25lclwiLFwidHlwZVwiOlwiYWRkcmVzc1wifSx7XCJuYW1lXCI6XCJfc3BlbmRlclwiLFwidHlwZVwiOlwiYWRkcmVzc1wifV0sXCJuYW1lXCI6XCJhbGxvd2FuY2VcIixcIm91dHB1dHNcIjpbe1wibmFtZVwiOlwiXCIsXCJ0eXBlXCI6XCJ1aW50MjU2XCJ9XSxcInBheWFibGVcIjpmYWxzZSxcInN0YXRlTXV0YWJpbGl0eVwiOlwidmlld1wiLFwidHlwZVwiOlwiZnVuY3Rpb25cIn0se1wicGF5YWJsZVwiOnRydWUsXCJzdGF0ZU11dGFiaWxpdHlcIjpcInBheWFibGVcIixcInR5cGVcIjpcImZhbGxiYWNrXCJ9LHtcImFub255bW91c1wiOmZhbHNlLFwiaW5wdXRzXCI6W3tcImluZGV4ZWRcIjp0cnVlLFwibmFtZVwiOlwib3duZXJcIixcInR5cGVcIjpcImFkZHJlc3NcIn0se1wiaW5kZXhlZFwiOnRydWUsXCJuYW1lXCI6XCJzcGVuZGVyXCIsXCJ0eXBlXCI6XCJhZGRyZXNzXCJ9LHtcImluZGV4ZWRcIjpmYWxzZSxcIm5hbWVcIjpcInZhbHVlXCIsXCJ0eXBlXCI6XCJ1aW50MjU2XCJ9XSxcIm5hbWVcIjpcIkFwcHJvdmFsXCIsXCJ0eXBlXCI6XCJldmVudFwifSx7XCJhbm9ueW1vdXNcIjpmYWxzZSxcImlucHV0c1wiOlt7XCJpbmRleGVkXCI6dHJ1ZSxcIm5hbWVcIjpcImZyb21cIixcInR5cGVcIjpcImFkZHJlc3NcIn0se1wiaW5kZXhlZFwiOnRydWUsXCJuYW1lXCI6XCJ0b1wiLFwidHlwZVwiOlwiYWRkcmVzc1wifSx7XCJpbmRleGVkXCI6ZmFsc2UsXCJuYW1lXCI6XCJ2YWx1ZVwiLFwidHlwZVwiOlwidWludDI1NlwifV0sXCJuYW1lXCI6XCJUcmFuc2ZlclwiLFwidHlwZVwiOlwiZXZlbnRcIn1dJztcclxuICAgIGNvbnN0IGFkZHJlc3MgPSBcIjB4NGY5NmZlM2I3YTZjZjk3MjVmNTlkMzUzZjcyM2MxYmRiNjRjYTZhYVwiO1xyXG4gICAgY29uc3QganNvbkFiaSA9IEpTT04ucGFyc2UoYWJpKTtcclxuICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KGpzb25BYmksIGFkZHJlc3MpOyAgICBcclxuICAgIHJldHVybiBjb250cmFjdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFprU25hcmtJbnN0YW5jZSh3ZWIzKSB7XHJcbiAgICBjb25zdCBhYmkgPSAnW3tcImNvbnN0YW50XCI6dHJ1ZSxcImlucHV0c1wiOltdLFwibmFtZVwiOlwiZGFpQWRkcmVzc1wiLFwib3V0cHV0c1wiOlt7XCJuYW1lXCI6XCJcIixcInR5cGVcIjpcImFkZHJlc3NcIn1dLFwicGF5YWJsZVwiOmZhbHNlLFwic3RhdGVNdXRhYmlsaXR5XCI6XCJ2aWV3XCIsXCJ0eXBlXCI6XCJmdW5jdGlvblwifSx7XCJjb25zdGFudFwiOmZhbHNlLFwiaW5wdXRzXCI6W3tcIm5hbWVcIjpcImFcIixcInR5cGVcIjpcInVpbnQyNTZbMl1cIn0se1wibmFtZVwiOlwiYlwiLFwidHlwZVwiOlwidWludDI1NlsyXVsyXVwifSx7XCJuYW1lXCI6XCJjXCIsXCJ0eXBlXCI6XCJ1aW50MjU2WzJdXCJ9LHtcIm5hbWVcIjpcImlucHV0XCIsXCJ0eXBlXCI6XCJ1aW50MjU2WzddXCJ9XSxcIm5hbWVcIjpcInZlcmlmeVR4XCIsXCJvdXRwdXRzXCI6W3tcIm5hbWVcIjpcInJcIixcInR5cGVcIjpcImJvb2xcIn1dLFwicGF5YWJsZVwiOmZhbHNlLFwic3RhdGVNdXRhYmlsaXR5XCI6XCJub25wYXlhYmxlXCIsXCJ0eXBlXCI6XCJmdW5jdGlvblwifSx7XCJjb25zdGFudFwiOnRydWUsXCJpbnB1dHNcIjpbe1wibmFtZVwiOlwiYWRkcjFcIixcInR5cGVcIjpcImFkZHJlc3NcIn0se1wibmFtZVwiOlwiYWRkcjJcIixcInR5cGVcIjpcImFkZHJlc3NcIn0se1wibmFtZVwiOlwiY29udHJhY3RBZGRyZXNzXCIsXCJ0eXBlXCI6XCJhZGRyZXNzXCJ9XSxcIm5hbWVcIjpcImJhbGFuY2VPZlwiLFwib3V0cHV0c1wiOlt7XCJuYW1lXCI6XCJcIixcInR5cGVcIjpcInVpbnQyNTZcIn0se1wibmFtZVwiOlwiXCIsXCJ0eXBlXCI6XCJ1aW50MjU2XCJ9LHtcIm5hbWVcIjpcIlwiLFwidHlwZVwiOlwidWludDI1NlwifV0sXCJwYXlhYmxlXCI6ZmFsc2UsXCJzdGF0ZU11dGFiaWxpdHlcIjpcInZpZXdcIixcInR5cGVcIjpcImZ1bmN0aW9uXCJ9LHtcImNvbnN0YW50XCI6ZmFsc2UsXCJpbnB1dHNcIjpbe1wibmFtZVwiOlwiYW1vdW50XCIsXCJ0eXBlXCI6XCJ1aW50MjU2XCJ9LHtcIm5hbWVcIjpcInRvXCIsXCJ0eXBlXCI6XCJhZGRyZXNzXCJ9XSxcIm5hbWVcIjpcInRyYW5zZmVyTm90ZVRvQ29udHJhY3RcIixcIm91dHB1dHNcIjpbXSxcInBheWFibGVcIjpmYWxzZSxcInN0YXRlTXV0YWJpbGl0eVwiOlwibm9ucGF5YWJsZVwiLFwidHlwZVwiOlwiZnVuY3Rpb25cIn0se1wiY29uc3RhbnRcIjp0cnVlLFwiaW5wdXRzXCI6W3tcIm5hbWVcIjpcIlwiLFwidHlwZVwiOlwiYWRkcmVzc1wifV0sXCJuYW1lXCI6XCJub3RlTWFwcGluZ1wiLFwib3V0cHV0c1wiOlt7XCJuYW1lXCI6XCJub3Rlc1wiLFwidHlwZVwiOlwiYnl0ZXMzMlwifSx7XCJuYW1lXCI6XCJpc1ZhbGlkXCIsXCJ0eXBlXCI6XCJib29sXCJ9LHtcIm5hbWVcIjpcImFtb3VudFwiLFwidHlwZVwiOlwidWludDI1NlwifV0sXCJwYXlhYmxlXCI6ZmFsc2UsXCJzdGF0ZU11dGFiaWxpdHlcIjpcInZpZXdcIixcInR5cGVcIjpcImZ1bmN0aW9uXCJ9LHtcImNvbnN0YW50XCI6ZmFsc2UsXCJpbnB1dHNcIjpbe1wibmFtZVwiOlwiYVwiLFwidHlwZVwiOlwidWludDI1NlsyXVwifSx7XCJuYW1lXCI6XCJiXCIsXCJ0eXBlXCI6XCJ1aW50MjU2WzJdWzJdXCJ9LHtcIm5hbWVcIjpcImNcIixcInR5cGVcIjpcInVpbnQyNTZbMl1cIn0se1wibmFtZVwiOlwiaW5wdXRcIixcInR5cGVcIjpcInVpbnQyNTZbN11cIn0se1wibmFtZVwiOlwiYW1vdW50XCIsXCJ0eXBlXCI6XCJ1aW50MjU2XCJ9XSxcIm5hbWVcIjpcImNsYWltTm90ZVwiLFwib3V0cHV0c1wiOltdLFwicGF5YWJsZVwiOmZhbHNlLFwic3RhdGVNdXRhYmlsaXR5XCI6XCJub25wYXlhYmxlXCIsXCJ0eXBlXCI6XCJmdW5jdGlvblwifSx7XCJpbnB1dHNcIjpbe1wibmFtZVwiOlwiYWRkclwiLFwidHlwZVwiOlwiYWRkcmVzc1wifV0sXCJwYXlhYmxlXCI6ZmFsc2UsXCJzdGF0ZU11dGFiaWxpdHlcIjpcIm5vbnBheWFibGVcIixcInR5cGVcIjpcImNvbnN0cnVjdG9yXCJ9LHtcImFub255bW91c1wiOmZhbHNlLFwiaW5wdXRzXCI6W3tcImluZGV4ZWRcIjpmYWxzZSxcIm5hbWVcIjpcInNcIixcInR5cGVcIjpcInN0cmluZ1wifV0sXCJuYW1lXCI6XCJWZXJpZmllZFwiLFwidHlwZVwiOlwiZXZlbnRcIn1dJztcclxuICAgIGNvbnN0IGFkZHJlc3MgPSBcIjB4QkVlMDJGRDFlNWI5ZTNCMzRBODU2RmIxRTY0OTNkRkM4NTQ5NjhkQlwiO1xyXG4gICAgY29uc3QganNvbkFiaSA9IEpTT04ucGFyc2UoYWJpKTtcclxuICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KGpzb25BYmksIGFkZHJlc3MpOyAgICBcclxuICAgIHJldHVybiBjb250cmFjdDtcclxufSIsImNvbnN0IFdlYjMgPSByZXF1aXJlKCd3ZWIzJyk7XHJcblxyXG5sZXQgcmVhbHdlYjM7XHJcbmxldCBwcm92aWRlcjtcclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LndlYjMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBcclxuICAgIHByb3ZpZGVyID0gd2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyO1xyXG5cclxufSBlbHNlIHtcclxuICAgIC8vIHdlIGFyZSBpbiB0aGUgc2VydmVyIGFuZCBtYXRhbWFzayBpcyBub3QgdXNpbmcgYnkgdXNlclxyXG4gICAgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyIChcclxuICAgICAgICAnaHR0cHM6Ly9rb3Zhbi5pbmZ1cmEuaW8vdjMvOTQ0ZjUzOTljMTgwNDlkOTkyMGIzYmM5YzYwNTgzZGUnXHJcbiAgICApO1xyXG59XHJcbi8vIHR5cGVvZiB3aW5kb3cud2ViMy5lbmFibGUoKTtcclxucmVhbHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7XHJcbm1vZHVsZS5leHBvcnRzID0gcmVhbHdlYjNcclxuXHJcblxyXG5cclxuIiwiLy8gVGhpcyBjb21wdXRlIHdpdG5lc3Mgc2NyaXB0IGlzIGluc3BpcmVkIGJsb2NrY2hhaW4gZGV2IGNvbW11bml0eSBmcm9tIHByZXZpb3VzIGhhY2thdGhvblxyXG5cclxuY29uc3QgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XHJcbmNvbnN0IEJOID0gcmVxdWlyZShcImJuLmpzXCIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFNlY3JldFBhcmFtcyhjb25jYXQpIHtcclxuICAgIHJldHVybiBbY29uY2F0LnNsaWNlKDAsIDMyKSwgY29uY2F0LnNsaWNlKDMyLCA2NCksIGNvbmNhdC5zbGljZSg2NCwgOTYpLCBjb25jYXQuc2xpY2UoOTYpXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHVibGljUGFyYW1zKHBheWxvYWQpIHtcclxuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKHBheWxvYWQsICdoZXgnKTtcclxuICAgIGNvbnN0IGRpZ2VzdCA9IGNyeXB0by5jcmVhdGVIYXNoKCdzaGEyNTYnKS51cGRhdGUoYnVmZmVyKS5kaWdlc3QoJ2hleCcpO1xyXG4gICAgcmV0dXJuIFtkaWdlc3Quc2xpY2UoMCwgMzIpLCBkaWdlc3Quc2xpY2UoMzIpXVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXlsb2FkKG93bmVyLCBvd25lcmFtb3VudCkge1xyXG4gIGxldCBhZGRyZXNzID0gbmV3IEJOKG93bmVyLCAxNikudG9TdHJpbmcoMTYsIDY0KTtcclxuICBsZXQgYW1vdW50ID0gbmV3IEJOKG93bmVyYW1vdW50LCAxNikudG9TdHJpbmcoMTYsIDY0KTtcclxuICByZXR1cm4gYWRkcmVzcyArIGFtb3VudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGFyYW1zKG93bmVyLCBhbW91bnQpIHtcclxuICAgIGxldCBwYXlsb2FkID0gZ2V0UGF5bG9hZChvd25lciwgYW1vdW50KVxyXG4gICAgbGV0IHprUGFyYW1zID0gZ2V0UHVibGljUGFyYW1zKHBheWxvYWQpLmNvbmNhdChnZXRTZWNyZXRQYXJhbXMocGF5bG9hZCkpO1xyXG4gICAgcmV0dXJuIHprUGFyYW1zO1xyXG59IFxyXG5cclxuZnVuY3Rpb24gZm9ybWF0V2l0bmVzcyhwYXJhbXMpIHtcclxuICAgIGxldCBjb21tYW5kID0gXCJcIjtcclxuICAgIHBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcclxuICAgICAgY29tbWFuZCArPSBgJHtuZXcgQk4ocGFyYW0sIDE2KS50b1N0cmluZygxMCl9IGBcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhjb21tYW5kKTtcclxuICAgIHJldHVybiBjb21tYW5kO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2l0bmVzcyhmcm9tLCBmQW1vdW50LCB0bywgdEFtb3VudCkge1xyXG4gICAgZnJvbSA9IGZyb20uc2xpY2UoMilcclxuICAgIGZBbW91bnQgPSBmQW1vdW50LnNsaWNlKDIpXHJcbiAgICB0byA9IHRvLnNsaWNlKDIpXHJcbiAgICB0QW1vdW50ID0gdEFtb3VudC5zbGljZSgyKVxyXG4gICAgdmFyIGRpZmYgPSBwYXJzZUludChmQW1vdW50LnNsaWNlKDIpLCAxNikgLSBwYXJzZUludCh0QW1vdW50LnNsaWNlKDIpLCAxNilcclxuICAgIGNvbnN0IHBhcmFtcyA9IGdldFBhcmFtcyhmcm9tLCBmQW1vdW50KS5jb25jYXQoZ2V0UGFyYW1zKHRvLCB0QW1vdW50KSk7XHJcbiAgICBsZXQgbGVmdE92ZXJXaXRuZXNzID0gZ2V0UGFyYW1zKGZyb20sIGRpZmYpO1xyXG4gICAgbGVmdE92ZXJXaXRuZXNzLnNwbGljZSgyLCAyKTtcclxuICAgIHJldHVybiBmb3JtYXRXaXRuZXNzKHBhcmFtcy5jb25jYXQobGVmdE92ZXJXaXRuZXNzKSk7XHJcbn1cclxuXHJcblxyXG4vLyBnZXRXaXRuZXNzKFxyXG4vLyAgICAgLy8gXCIweENBMzViN2Q5MTU0NThFRjU0MGFEZTYwNjhkRmUyRjQ0RThmYTczM2NcIixcclxuLy8gICAgICcweDQ4ODQ1MzkyRjVhN2M2YjM2MEE3MzNlMEFCRTJFZGNDNzRmMUY0ZDYnLCAvLyBzZW5kZXJcclxuLy8gICAgICc5JywgLy8gdmFsdWUgb2YgdGhlIHNlY3JldCBub3RlXHJcbi8vICAgICAnMHhFMzNmNEMyMzA2ZUZFOUJGNjZhNjRBM2M0MjQwOGQyRmUxQ2I4OTBmJywgLy8gcmVjZWl2ZXJcclxuLy8gICAgIC8vIFwiMHgxNDcyM0EwOUFDZmY2RDJBNjBEY2RGN2FBNEFGZjMwOEZEREMxNjBDXCIsXHJcbi8vICAgICAnMScgLy8gdmFsdWUgdG8gYmUgc2VudFxyXG4vLyAgICk7XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEZvcm0sIEJ1dHRvbiwgR3JpZCwgSW5wdXQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQge2dldFprU25hcmtJbnN0YW5jZSwgZ2V0RVJDQ29udHJhY3RJbnN0YW5jZX0gZnJvbSAnLi4vY29uZmlnL2luc3RhbmNlcy9jb250cmFjdEluc3RhbmNlcyc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2NvbmZpZy93ZWIzL3dlYjMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHtnZXRXaXRuZXNzfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2dldFdpdG5lc3NcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbnRyYW5zZmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGFpSW5zdGFuY2UgPSBhd2FpdCBnZXRFUkNDb250cmFjdEluc3RhbmNlKHdlYjMpO1xyXG4gICAgICAgICAgICBjb25zdCBhcHByb3ZlaGFzaCA9IGF3YWl0IGRhaUluc3RhbmNlLm1ldGhvZHMuYXBwcm92ZShcclxuICAgICAgICAgICAgICAgIFwiMHhCRWUwMkZEMWU1YjllM0IzNEE4NTZGYjFFNjQ5M2RGQzg1NDk2OGRCXCIsXHJcbiAgICAgICAgICAgICAgICBcIjEwXCJcclxuICAgICAgICAgICAgKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFwcHJvdmVIYXNoOiBcIiwgYXBwcm92ZWhhc2gpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgemtJbnN0YW5jZSA9IGF3YWl0IGdldFprU25hcmtJbnN0YW5jZSh3ZWIzKTtcclxuICAgICAgICAgICAgY29uc3QgaGFzaCA9IGF3YWl0IHprSW5zdGFuY2UubWV0aG9kcy50cmFuc2Zlck5vdGVUb0NvbnRyYWN0KFxyXG4gICAgICAgICAgICAgICAgXCIxMFwiLFxyXG4gICAgICAgICAgICAgICAgXCIweEUzM2Y0QzIzMDZlRkU5QkY2NmE2NEEzYzQyNDA4ZDJGZTFDYjg5MGZcIixcclxuICAgICAgICAgICAgKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRyYW5zYWN0aW9uIGhhc2g6IFwiLCBoYXNoKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBvbkNsYWltID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgICAgICBjb25zdCB6a0luc3RhbmNlID0gYXdhaXQgZ2V0WmtTbmFya0luc3RhbmNlKHdlYjMpO1xyXG4gICAgICAgICAgICBjb25zdCB3aXRuZXNzcGFyYW1zID0gZ2V0V2l0bmVzcyhcclxuICAgICAgICAgICAgICAgICcweDQ4ODQ1MzkyRjVhN2M2YjM2MEE3MzNlMEFCRTJFZGNDNzRmMUY0ZDYnLCAvLyBzZW5kZXJcclxuICAgICAgICAgICAgICAgICc5JywgXHJcbiAgICAgICAgICAgICAgICAnMHhFMzNmNEMyMzA2ZUZFOUJGNjZhNjRBM2M0MjQwOGQyRmUxQ2I4OTBmJywgLy8gcmVjZWl2ZXJcclxuICAgICAgICAgICAgICAgICcxJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh3aXRuZXNzcGFyYW1zKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvY3JlYXRlcHJvb2ZcIjtcclxuICAgICAgICAgICAgYXdhaXQgQXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2NyZWF0ZXByb29mP3dpdG5lc3M9MTY4OTA0MjAyOTMwMzI3OTM5MDgwNDkyMjMwOTY5MDA0NjIyOTA0IDMzOTYzMDA2ODAxNzE5MzYyMzU3MDcxMTg0OTYzNjAxMDY2NDgxNyAxMjE2NjMxNjk4IDMyNjUzMjAwMjY3MTUzNTAxNDY5OTMyOTQ4NTM3NTk5OTcwMjIzMCAwIDAgODA3MTAwNTQ3MDM5NTI1MTczMzYyMjMxMjMxNzE3ODk4MjM1NTQgOTI0NDE0MzA1Nzc5NTY4MTA4MDA0NDA2NDE2Mzg3NzQ0MTYxMDAgMzgxMjU3NjI5MSA5MjIxMDY3ODg5Njg0NTEzMzU4ODcwNDY0MTMxODYxNTQ3Mjc5IDAgMCAxNjg5MDQyMDI5MzAzMjc5MzkwODA0OTIyMzA5NjkwMDQ2MjI5MDQgMzM5NjMwMDY4MDE3MTkzNjIzNTcwNzExODQ5NjM2MDEwNjY0ODE3IDAgMFwiLCB7XHJcbiAgICAgICAgICAgICAgICAvLyBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB3aXRuZXNzOiB3aXRuZXNzcGFyYW1zXHJcbiAgICAgICAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1c1RleHQgPT0gJ09LJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlOlwiLCByZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvdWxkU3dhcDogZmFsc2UsIGJsb2NraW5nOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhbGVydChcIkRvbmVcIilcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGhhc2ggPSBhd2FpdCB6a0luc3RhbmNlLm1ldGhvZHMuY2xhaW1Ob3RlKFxyXG4gICAgICAgICAgICAvLyAgICAgW1wiMHgxNjhiYWIxYmJiYzE1OTM2YmViNTY1YjUxY2U4ZmVhOTk4MDA2YTBmYTk1Njc0MTdhYTYyNjFmNDZkY2QxNmY5XCIsIFwiMHgwMWU1Yzc5NGFiODI5OTcwNWMzMTkzNjZkMWJiMmJlZTc5Yjk2ZjA1ZmEwOGM5YWExMDNmOGRjYjQzYTg4MDZiXCJdLFxyXG4gICAgICAgICAgICAvLyAgICAgW1tcIjB4MTE2N2Y5NzQwMTE0ZmUxNGRkYjA1NDVjNDExODM2MjU4OWZkN2U3ZWYwYmNhZGEwMmMwMjEyYjE1Mzc1NWQ1MVwiLCBcIjB4MWI5MjQ1MWY3YTJmOGNlODk2MTcxYThkNTg0MmYzNDU1NDQ2ZjJiMzVlMWZiODFhMWY1MDQwY2JjYWNlNTRlZFwiXSwgW1wiMHgzMDU4Mzk2NWEyODRmODdmNzMzY2YwYzU3MDE2ZDk4NDQ2NTAwZjMxNTU5ZjgxMGJjNmFhNmQwYzQ0ZjJiZGQ1XCIsIFwiMHgwNjZiNjRkZGU1NTI1ZDM0OTAxMTcwN2I2ZjY2NGNjMWMxYzRiNThjM2I4MjIwMTYzODE3OTY2NzU1NjVmZGY0XCJdXSxcclxuICAgICAgICAgICAgLy8gICAgIFtcIjB4MTJkNzlmNWFjNGM2Y2FjODRjOTdhMTEzYmZhOWQyYTBjMjdiYmU4MThlNGNhMGFhZDRlOWU3MDE1ZjJlYzI0YVwiLCBcIjB4MTcwOTNiYmI4NTlhYjUzMjMyYjQwOGIwMTJlNzYxYjFkYzg3YzBjYzlkMTJkMDllOGQyYzk5MjQzZDFmMTdjN1wiXSxcclxuICAgICAgICAgICAgLy8gICAgIFtcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA3ZjExYzQyNmI1NDE4ZTdmNmQxNTc3ZDMzMjE3ODQzOFwiLCBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBmZjgyNWYyZTU3NTBhY2M2MzljZjkyM2IzNGYwMjM3MVwiLCBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzY2I4MzBlZDA2ZjNkMGU1NmQ3ZDBhZDM1MDEwZGU0MlwiLCBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA0NThiOTI2OWIwYzA3Zjc1MmU1OTJjZDc4MzI1MjJlNFwiLCBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA3ZjExYzQyNmI1NDE4ZTdmNmQxNTc3ZDMzMjE3ODQzOFwiLCBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBmZjgyNWYyZTU3NTBhY2M2MzljZjkyM2IzNGYwMjM3MVwiLCBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMVwiXSxcclxuICAgICAgICAgICAgLy8gICAgIFwiMjBcIlxyXG4gICAgICAgICAgICAvLyApLnNlbmQoe1xyXG4gICAgICAgICAgICAvLyAgICAgZnJvbTogYWNjb3VudHNbMF1cclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVHJhbnNhY3Rpb24gaGFzaDogXCIsIGhhc2gpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyLz5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub250cmFuc2Zlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPnRyYW5zZmVyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vbkNsYWltfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+Y2xhaW08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJ25leHQtcm91dGVzJykoKTtcclxuXHJcbnJvdXRlc1xyXG4gICAgLmFkZCgnL3RyYW5zYWN0aW9uSGlzdG9yeScsICd0cmFuc2FjdGlvbkhpc3RvcnknKVxyXG4vLyBleHBvcnQgZGVmYXVsdCByb3V0ZXM7IFxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlczsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJibi5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTsiXSwic291cmNlUm9vdCI6IiJ9