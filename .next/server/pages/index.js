module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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

/***/ "/j23":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("obVW");

const tooltipsStyle = {
  tooltip: {
    padding: "10px 15px",
    minWidth: "130px",
    color: styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "N"],
    lineHeight: "1.7em",
    background: "rgba(" + Object(styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "o"])(styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "n"][15]) + ",0.9)",
    border: "none",
    borderRadius: "3px",
    boxShadow: "0 8px 10px 1px rgba(" + Object(styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "o"])(styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.14), 0 3px 14px 2px rgba(" + Object(styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "o"])(styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.12), 0 5px 5px -3px rgba(" + Object(styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "o"])(styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "b"]) + ", 0.2)",
    maxWidth: "200px",
    textAlign: "center",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "0.875em",
    fontStyle: "normal",
    fontWeight: "400",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "normal",
    lineBreak: "auto"
  }
};
/* harmony default export */ __webpack_exports__["a"] = (tooltipsStyle);

/***/ }),

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Fm7H":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "HXcA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Footer; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");

// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__("Fm7H");

// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("obVW");

// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/components/footerStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const footerStyle = {
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  rightLinks: {
    float: "right!important",
    "& ul": {
      marginBottom: 0,
      marginTop: 10,
      padding: 0,
      listStyle: "none",
      height: 38,
      "& li": {
        display: "inline-block"
      }
    },
    "& i": {
      fontSize: "20px"
    }
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative",
    "& ul": {
      marginBottom: "0",
      padding: 0,
      listStyle: "none"
    }
  },
  big: {
    padding: "1.875rem 0",
    "& h5, & h4": {
      fontWeight: 700,
      fontFamily: "Roboto Slab,Times New Roman,serif",
      marginBottom: "15px"
    },
    "& p": {
      color: nextjs_material_kit_pro["n" /* grayColor */][0]
    }
  },
  content: {
    textAlign: "left"
  },
  a: {
    color: nextjs_material_kit_pro["A" /* primaryColor */][0],
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  dark: {
    background: "radial-gradient(ellipse at center," + nextjs_material_kit_pro["n" /* grayColor */][4] + " 0," + nextjs_material_kit_pro["n" /* grayColor */][5] + " 100%)",
    backgroundSize: "550% 450%",
    color: nextjs_material_kit_pro["N" /* whiteColor */],
    "& p": {
      color: nextjs_material_kit_pro["n" /* grayColor */][0]
    },
    "& i": {
      color: nextjs_material_kit_pro["N" /* whiteColor */]
    },
    "& a": {
      color: nextjs_material_kit_pro["N" /* whiteColor */],
      opacity: ".86",
      "&:visited": {
        color: nextjs_material_kit_pro["N" /* whiteColor */]
      },
      "&:focus, &:hover": {
        opacity: 1
      }
    },
    "& hr": {
      borderColor: "rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["N" /* whiteColor */]) + ",0.2)"
    },
    "& $btnTwitter, & $btnDribbble, & $btnInstagram": {
      color: nextjs_material_kit_pro["N" /* whiteColor */]
    }
  },
  white: {
    backgroundColor: nextjs_material_kit_pro["N" /* whiteColor */],
    color: nextjs_material_kit_pro["n" /* grayColor */][1],
    textDecoration: "none",
    "& a": {
      "&:visited": {
        color: nextjs_material_kit_pro["n" /* grayColor */][1]
      },
      "&:hover, &:focus": {
        color: nextjs_material_kit_pro["n" /* grayColor */][20]
      }
    }
  },
  container: nextjs_material_kit_pro["f" /* container */],
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  },
  iconSocial: {
    width: "41px",
    height: "41px",
    fontSize: "24px",
    minWidth: "41px",
    padding: 0,
    overflow: "hidden",
    position: "relative"
  },
  btnTwitter: _objectSpread(_objectSpread({}, nextjs_material_kit_pro["d" /* btnLink */]), {}, {
    color: nextjs_material_kit_pro["K" /* twitterColor */]
  }),
  btnDribbble: _objectSpread(_objectSpread({}, nextjs_material_kit_pro["d" /* btnLink */]), {}, {
    color: nextjs_material_kit_pro["k" /* dribbbleColor */]
  }),
  btnInstagram: _objectSpread(_objectSpread({}, nextjs_material_kit_pro["d" /* btnLink */]), {}, {
    color: nextjs_material_kit_pro["s" /* instagramColor */]
  }),
  footerBrand: {
    height: "50px",
    padding: "15px 15px",
    fontSize: "18px",
    lineHeight: "50px",
    marginLeft: "-15px",
    color: nextjs_material_kit_pro["n" /* grayColor */][1],
    textDecoration: "none",
    fontWeight: 700,
    fontFamily: "Roboto Slab,Times New Roman,serif"
  },
  pullCenter: {
    display: "inline-block",
    float: "none"
  },
  clearFix: {
    clear: "both"
  }
};
/* harmony default export */ var components_footerStyle = (footerStyle);
// CONCATENATED MODULE: ./components/Footer/Footer.js



/* eslint-disable */
 // nodejs library to set properties for components

// nodejs library that concatenates classes
 // @material-ui/core components



 // @material-ui/icons



const useStyles = Object(styles_["makeStyles"])(components_footerStyle);
function Footer(props) {
  const {
    children,
    content,
    theme,
    big,
    className
  } = props;
  const classes = useStyles();
  const themeType = theme === "transparent" || theme == undefined ? false : true;
  const footerClasses = external_classnames_default()({
    [classes.footer]: true,
    [classes[theme]]: themeType,
    [classes.big]: big || children !== undefined,
    [className]: className !== undefined
  });
  const aClasses = external_classnames_default()({
    [classes.a]: true
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("footer", {
    className: footerClasses,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: classes.container,
      children: [children !== undefined ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: classes.content,
          children: children
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {})]
      }) : " ", content, /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: classes.clearFix
      })]
    })
  });
}

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "Kg+a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("obVW");

// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/components/buttonStyle.js

const buttonStyle = {
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: nextjs_material_kit_pro["n" /* grayColor */][0],
    color: nextjs_material_kit_pro["N" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["n" /* grayColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["n" /* grayColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["n" /* grayColor */][0]) + ", 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: nextjs_material_kit_pro["N" /* whiteColor */],
      backgroundColor: nextjs_material_kit_pro["n" /* grayColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["n" /* grayColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["n" /* grayColor */][0]) + ", 0.2)"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      marginTop: "-1em",
      marginBottom: "-1em",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginTop: "0px",
        marginRight: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  fullWidth: {
    width: "100%"
  },
  primary: {
    backgroundColor: nextjs_material_kit_pro["A" /* primaryColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["A" /* primaryColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["A" /* primaryColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["A" /* primaryColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["A" /* primaryColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["A" /* primaryColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["A" /* primaryColor */][0]) + ", 0.2)"
    }
  },
  secondary: {
    color: "rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ",.87)",
    backgroundColor: nextjs_material_kit_pro["E" /* secondaryColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["E" /* secondaryColor */][0]) + ",.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["E" /* secondaryColor */][0]) + ",.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["E" /* secondaryColor */][0]) + ",.12)",
    "&:hover,&:focus": {
      boxShdow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["E" /* secondaryColor */][0]) + ",.42), 0 4px 23px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ",.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["E" /* secondaryColor */][0]) + ",.2)",
      color: "rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ",.87)",
      backgroundColor: nextjs_material_kit_pro["n" /* grayColor */][19]
    }
  },
  info: {
    backgroundColor: nextjs_material_kit_pro["r" /* infoColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["r" /* infoColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["r" /* infoColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["r" /* infoColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["r" /* infoColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["r" /* infoColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["r" /* infoColor */][0]) + ", 0.2)"
    }
  },
  success: {
    backgroundColor: nextjs_material_kit_pro["G" /* successColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["G" /* successColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["G" /* successColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["G" /* successColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["G" /* successColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["G" /* successColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["G" /* successColor */][0]) + ", 0.2)"
    }
  },
  warning: {
    backgroundColor: nextjs_material_kit_pro["M" /* warningColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["M" /* warningColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["M" /* warningColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["M" /* warningColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["M" /* warningColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["M" /* warningColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["M" /* warningColor */][0]) + ", 0.2)"
    }
  },
  danger: {
    backgroundColor: nextjs_material_kit_pro["h" /* dangerColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["h" /* dangerColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["h" /* dangerColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["h" /* dangerColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["h" /* dangerColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["h" /* dangerColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["h" /* dangerColor */][0]) + ", 0.2)"
    }
  },
  rose: {
    backgroundColor: nextjs_material_kit_pro["D" /* roseColor */][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["D" /* roseColor */][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["D" /* roseColor */][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["D" /* roseColor */][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["D" /* roseColor */][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["D" /* roseColor */][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["D" /* roseColor */][0]) + ", 0.2)"
    }
  },
  white: {
    "&,&:focus,&:hover": {
      backgroundColor: nextjs_material_kit_pro["N" /* whiteColor */],
      color: nextjs_material_kit_pro["n" /* grayColor */][0]
    }
  },
  twitter: {
    backgroundColor: nextjs_material_kit_pro["K" /* twitterColor */],
    color: nextjs_material_kit_pro["N" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["K" /* twitterColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["K" /* twitterColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["K" /* twitterColor */]) + ", 0.12)",
    "&:hover,&:focus,&:visited": {
      backgroundColor: nextjs_material_kit_pro["K" /* twitterColor */],
      color: nextjs_material_kit_pro["N" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["K" /* twitterColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["K" /* twitterColor */]) + ", 0.2)"
    }
  },
  facebook: {
    backgroundColor: nextjs_material_kit_pro["l" /* facebookColor */],
    color: nextjs_material_kit_pro["N" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["l" /* facebookColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["l" /* facebookColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["l" /* facebookColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["l" /* facebookColor */],
      color: nextjs_material_kit_pro["N" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["l" /* facebookColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["l" /* facebookColor */]) + ", 0.2)"
    }
  },
  google: {
    backgroundColor: nextjs_material_kit_pro["m" /* googleColor */],
    color: nextjs_material_kit_pro["N" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["m" /* googleColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["m" /* googleColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["m" /* googleColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["m" /* googleColor */],
      color: nextjs_material_kit_pro["N" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["m" /* googleColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["m" /* googleColor */]) + ", 0.2)"
    }
  },
  linkedin: {
    backgroundColor: nextjs_material_kit_pro["t" /* linkedinColor */],
    color: nextjs_material_kit_pro["N" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["t" /* linkedinColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["t" /* linkedinColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["t" /* linkedinColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["t" /* linkedinColor */],
      color: nextjs_material_kit_pro["N" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["t" /* linkedinColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["t" /* linkedinColor */]) + ", 0.2)"
    }
  },
  pinterest: {
    backgroundColor: nextjs_material_kit_pro["y" /* pinterestColor */],
    color: nextjs_material_kit_pro["N" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["y" /* pinterestColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["y" /* pinterestColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["y" /* pinterestColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["y" /* pinterestColor */],
      color: nextjs_material_kit_pro["N" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["y" /* pinterestColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["y" /* pinterestColor */]) + ", 0.2)"
    }
  },
  youtube: {
    backgroundColor: nextjs_material_kit_pro["O" /* youtubeColor */],
    color: nextjs_material_kit_pro["N" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["O" /* youtubeColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["O" /* youtubeColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["O" /* youtubeColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["O" /* youtubeColor */],
      color: nextjs_material_kit_pro["N" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["O" /* youtubeColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["O" /* youtubeColor */]) + ", 0.2)"
    }
  },
  tumblr: {
    backgroundColor: nextjs_material_kit_pro["J" /* tumblrColor */],
    color: nextjs_material_kit_pro["N" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["J" /* tumblrColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["J" /* tumblrColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["J" /* tumblrColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["J" /* tumblrColor */],
      color: nextjs_material_kit_pro["N" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["J" /* tumblrColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["J" /* tumblrColor */]) + ", 0.2)"
    }
  },
  github: {
    backgroundColor: nextjs_material_kit_pro["n" /* grayColor */][8],
    color: nextjs_material_kit_pro["N" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["n" /* grayColor */][8]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["n" /* grayColor */][8]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["n" /* grayColor */][8]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["n" /* grayColor */][8],
      color: nextjs_material_kit_pro["N" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["n" /* grayColor */][8]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["n" /* grayColor */][8]) + ", 0.2)"
    }
  },
  behance: {
    backgroundColor: nextjs_material_kit_pro["a" /* behanceColor */],
    color: nextjs_material_kit_pro["N" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["a" /* behanceColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["a" /* behanceColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["a" /* behanceColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["a" /* behanceColor */],
      color: nextjs_material_kit_pro["N" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["a" /* behanceColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["a" /* behanceColor */]) + ", 0.2)"
    }
  },
  dribbble: {
    backgroundColor: nextjs_material_kit_pro["k" /* dribbbleColor */],
    color: nextjs_material_kit_pro["N" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["k" /* dribbbleColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["k" /* dribbbleColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["k" /* dribbbleColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["k" /* dribbbleColor */],
      color: nextjs_material_kit_pro["N" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["k" /* dribbbleColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["k" /* dribbbleColor */]) + ", 0.2)"
    }
  },
  reddit: {
    backgroundColor: nextjs_material_kit_pro["B" /* redditColor */],
    color: nextjs_material_kit_pro["N" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["B" /* redditColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["B" /* redditColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["B" /* redditColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["B" /* redditColor */],
      color: nextjs_material_kit_pro["N" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["B" /* redditColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["B" /* redditColor */]) + ", 0.2)"
    }
  },
  hudl: {
    backgroundColor: nextjs_material_kit_pro["p" /* hudlColor */],
    color: nextjs_material_kit_pro["N" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["p" /* hudlColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["p" /* hudlColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["p" /* hudlColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["p" /* hudlColor */],
      color: nextjs_material_kit_pro["N" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["p" /* hudlColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["p" /* hudlColor */]) + ", 0.2)"
    }
  },
  instagram: {
    backgroundColor: nextjs_material_kit_pro["s" /* instagramColor */],
    color: nextjs_material_kit_pro["N" /* whiteColor */],
    boxShadow: "0 2px 2px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["s" /* instagramColor */]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["s" /* instagramColor */]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["s" /* instagramColor */]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: nextjs_material_kit_pro["s" /* instagramColor */],
      color: nextjs_material_kit_pro["N" /* whiteColor */],
      boxShadow: "0 14px 26px -12px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["s" /* instagramColor */]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["s" /* instagramColor */]) + ", 0.2)"
    }
  },
  simple: {
    "&,&:focus,&:hover": {
      color: nextjs_material_kit_pro["N" /* whiteColor */],
      background: "transparent",
      boxShadow: "none"
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["A" /* primaryColor */][0]
      }
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["r" /* infoColor */][0]
      }
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["G" /* successColor */][0]
      }
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["M" /* warningColor */][0]
      }
    },
    "&$rose": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["D" /* roseColor */][0]
      }
    },
    "&$danger": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["h" /* dangerColor */][0]
      }
    },
    "&$twitter": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["K" /* twitterColor */]
      }
    },
    "&$facebook": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["l" /* facebookColor */]
      }
    },
    "&$google": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["m" /* googleColor */]
      }
    },
    "&$linkedin": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["t" /* linkedinColor */]
      }
    },
    "&$pinterest": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["y" /* pinterestColor */]
      }
    },
    "&$youtube": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["O" /* youtubeColor */]
      }
    },
    "&$tumblr": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["J" /* tumblrColor */]
      }
    },
    "&$github": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["n" /* grayColor */][8]
      }
    },
    "&$behance": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["a" /* behanceColor */]
      }
    },
    "&$dribbble": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["k" /* dribbbleColor */]
      }
    },
    "&$reddit": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["B" /* redditColor */]
      }
    },
    "&$instagram": {
      "&,&:focus,&:hover,&:visited": {
        color: nextjs_material_kit_pro["s" /* instagramColor */]
      }
    }
  },
  transparent: {
    "&,&:focus,&:hover": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none"
    }
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none"
  },
  lg: {
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
        marginTop: "-4px"
      }
    },
    padding: "1.125rem 2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    borderRadius: "0.2rem"
  },
  sm: {
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
        marginTop: "1px"
      }
    },
    padding: "0.40625rem 1.25rem",
    fontSize: "0.6875rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem"
  },
  round: {
    borderRadius: "30px"
  },
  block: {
    width: "100% !important"
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: nextjs_material_kit_pro["n" /* grayColor */][0],
      boxShadow: "none"
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px"
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px"
      },
      "& svg": {
        width: "32px",
        height: "32px"
      }
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px"
      },
      "& svg": {
        width: "17px",
        height: "17px"
      }
    }
  },
  fileButton: {// display: "inline-block"
  }
};
/* harmony default export */ var components_buttonStyle = (buttonStyle);
// CONCATENATED MODULE: ./components/CustomButtons/Button.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components



const useStyles = Object(styles_["makeStyles"])(components_buttonStyle);
const RegularButton = /*#__PURE__*/external_react_default.a.forwardRef((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    fileButton,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["color", "round", "children", "fullWidth", "disabled", "simple", "size", "block", "link", "justIcon", "fileButton", "className"]);

  const classes = useStyles();
  const btnClasses = external_classnames_default()({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [classes.fileButton]: fileButton,
    [className]: className
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, _objectSpread(_objectSpread({}, rest), {}, {
    ref: ref,
    className: btnClasses,
    children: children
  }));
});
/* harmony default export */ var Button = __webpack_exports__["a"] = (RegularButton);

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ProfilePage; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./components/Footer/Footer.js + 1 modules
var Footer = __webpack_require__("HXcA");

// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__("mtPR");

// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__("i4t8");

// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__("obVW");

// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/components/parallaxStyle.js

const parallaxStyle = {
  parallax: {
    height: "100vh",
    maxHeight: "1600px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center"
  },
  filter: {},
  primaryColor: {
    "&:before": {
      background: "rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["A" /* primaryColor */][4]) + ",.56),rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["A" /* primaryColor */][5]) + ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  roseColor: {
    "&:before": {
      background: "rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["D" /* roseColor */][3]) + ",.56),rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["D" /* roseColor */][4]) + ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  darkColor: {
    "&:before": {
      background: "rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.5)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  infoColor: {
    "&:before": {
      background: "rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["r" /* infoColor */][6]) + ",.56),rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["r" /* infoColor */][7]) + ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  successColor: {
    "&:before": {
      background: "rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["G" /* successColor */][6]) + ",.56),rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["G" /* successColor */][7]) + ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  warningColor: {
    "&:before": {
      background: "rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["M" /* warningColor */][6]) + ",.56),rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["M" /* warningColor */][7]) + ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  dangerColor: {
    "&:before": {
      background: "rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["h" /* dangerColor */][6]) + ",.56),rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["h" /* dangerColor */][7]) + ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "65vh",
    minHeight: "65vh",
    maxHeight: "650px"
  }
};
/* harmony default export */ var components_parallaxStyle = (parallaxStyle);
// CONCATENATED MODULE: ./components/Parallax/Parallax.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // core components


const useStyles = Object(styles_["makeStyles"])(components_parallaxStyle);
function Parallax(props) {
  let windowScrollTop = 0;
  const [transform, setTransform] = external_react_default.a.useState("translate3d(0," + windowScrollTop + "px,0)");
  external_react_default.a.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }

    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });

  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };

  const {
    filter,
    className,
    children,
    style,
    image,
    small
  } = props;
  const classes = useStyles();
  const parallaxClasses = external_classnames_default()({
    [classes.parallax]: true,
    [classes[filter + "Color"]]: filter !== undefined,
    [classes.small]: small,
    [className]: className !== undefined
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: parallaxClasses,
    style: _objectSpread(_objectSpread({}, style), {}, {
      backgroundImage: "url(" + image + ")",
      transform: transform
    }),
    children: children
  });
}
// CONCATENATED MODULE: ./components/Clearfix/Clearfix.js

 // mterial-ui components


const styles = {
  clearfix: {
    "&:after,&:before": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  }
};
const Clearfix_useStyles = Object(styles_["makeStyles"])(styles);
function Clearfix() {
  const classes = Clearfix_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.clearfix
  });
}
// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__("Kg+a");

// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/imagesStyles.js

const imagesStyles = {
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  imgRounded: {
    borderRadius: "6px !important"
  },
  imgRoundedCircle: {
    borderRadius: "50% !important"
  },
  imgRaised: {
    boxShadow: "0 5px 15px -8px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.24), 0 8px 10px -5px rgba(" + Object(nextjs_material_kit_pro["o" /* hexToRgb */])(nextjs_material_kit_pro["b" /* blackColor */]) + ", 0.2)"
  },
  imgGallery: {
    width: "100%",
    marginBottom: "2.142rem"
  },
  imgCardTop: {
    width: "100%",
    borderTopLeftRadius: "calc(.25rem - 1px)",
    borderTopRightRadius: "calc(.25rem - 1px)"
  },
  imgCardBottom: {
    width: "100%",
    borderBottomLeftRadius: "calc(.25rem - 1px)",
    borderBottomRightRadius: "calc(.25rem - 1px)"
  },
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)"
  },
  imgCardOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem"
  }
};
/* harmony default export */ var nextjs_material_kit_pro_imagesStyles = (imagesStyles);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/tooltipsStyle.js
var tooltipsStyle = __webpack_require__("/j23");

// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/profilePageStyle.js
function profilePageStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function profilePageStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { profilePageStyle_ownKeys(Object(source), true).forEach(function (key) { profilePageStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { profilePageStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function profilePageStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const profilePageStyle = profilePageStyle_objectSpread(profilePageStyle_objectSpread(profilePageStyle_objectSpread({
  container: nextjs_material_kit_pro["f" /* container */]
}, nextjs_material_kit_pro_imagesStyles), tooltipsStyle["a" /* default */]), {}, {
  cardTitleWhite: profilePageStyle_objectSpread(profilePageStyle_objectSpread({}, nextjs_material_kit_pro["e" /* cardTitle */]), {}, {
    color: nextjs_material_kit_pro["N" /* whiteColor */] + "  !important"
  }),
  cardTitle: nextjs_material_kit_pro["e" /* cardTitle */],
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: nextjs_material_kit_pro["n" /* grayColor */][0]
  },
  textCenter: {
    textAlign: "center !important"
  },
  name: {
    marginTop: "-80px"
  },
  main: profilePageStyle_objectSpread({}, nextjs_material_kit_pro["u" /* main */]),
  mainRaised: profilePageStyle_objectSpread(profilePageStyle_objectSpread({}, nextjs_material_kit_pro["v" /* mainRaised */]), {}, {
    "@media (max-width: 576px)": {
      marginTop: "120px"
    },
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px"
    },
    margin: "120px 30px 0px"
  }),
  title: profilePageStyle_objectSpread(profilePageStyle_objectSpread({}, nextjs_material_kit_pro["H" /* title */]), {}, {
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  follow: {
    position: "absolute",
    top: "0",
    right: "0"
  },
  followIcon: {
    width: "20px",
    height: "20px"
  },
  followButton: {
    marginTop: "-28px !important"
  },
  gridItem: profilePageStyle_objectSpread(profilePageStyle_objectSpread({}, nextjs_material_kit_pro["w" /* mlAuto */]), nextjs_material_kit_pro["x" /* mrAuto */]),
  collections: {
    marginTop: "20px"
  },
  cardBody: {
    display: "flex",
    boxOrient: "vertical",
    boxDirection: "normal",
    flexDirection: "column",
    boxPack: "center",
    justifyContent: "center"
  },
  badge: {
    display: "inline-table",
    margin: "0 auto"
  },
  listUnstyled: {
    paddingLeft: "0",
    listStyle: "none",
    "& > li": {
      padding: "5px 0px",
      fontSize: "1em"
    }
  },
  profileTabs: {
    marginTop: "4.284rem",
    marginBottom: "50px"
  },
  card: {
    textAlign: "left !important"
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  },
  parallax: {
    height: "380px",
    backgroundPosition: "top center"
  }
});

/* harmony default export */ var pages_profilePageStyle = (profilePageStyle);
// CONCATENATED MODULE: ./pages/index.js



/*eslint-disable*/
 // nodejs library that concatenates classes

 // @material-ui/core components

 // core components








const pages_useStyles = Object(styles_["makeStyles"])(pages_profilePageStyle);
function ProfilePage(_ref) {
  let rest = Object.assign({}, _ref);
  external_react_default.a.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = pages_useStyles();
  const imageClasses = external_classnames_default()(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  const navImageClasses = external_classnames_default()(classes.imgRounded, classes.imgGallery);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: external_classnames_default()(classes.main, classes.mainRaised),
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: classes.container,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(GridContainer["a" /* default */], {
          justify: "center",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(GridItem["a" /* default */], {
            xs: 12,
            sm: 12,
            md: 6,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: classes.profile,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: "/img/jibril/jibril-profile-lax.jpg",
                  alt: "...",
                  className: imageClasses
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: classes.name,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                  className: classes.title,
                  children: "Jibril Hartford"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                  children: "Lacrosse/Football Player"
                })]
              })]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GridContainer["a" /* default */], {
          justify: "center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Button["a" /* default */], {
              color: "hudl",
              style: {
                minWidth: '300px'
              },
              onClick: () => {
                window.open('https://www.hudl.com/profile/9389123/jibril-hartford', '_blank');
              },
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("object", {
                data: "/img/jibril/hudl-icon.svg",
                type: "image/svg+xml",
                height: "20px"
              }), "\xA0\xA0View On Hudl"]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Button["a" /* default */], {
              color: "twitter",
              style: {
                minWidth: '300px'
              },
              onClick: () => {
                window.open('https://twitter.com/JibrilHartford', '_blank');
              },
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: "fab fa-twitter"
              }), " Connect on twitter"]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Button["a" /* default */], {
              color: "youtube",
              style: {
                minWidth: '300px'
              },
              onClick: () => {
                window.open('https://www.youtube.com/channel/UCOeA4NU8uPT6QwCFXspvATQ', '_blank');
              },
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: "fab fa-youtube"
              }), " View On Youtube"]
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Clearfix, {})]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer["a" /* default */], {
      content: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: classes.center,
          children: ["\xA9 ", 1900 + new Date().getYear(), " , Jibril Hartford"]
        })
      })
    })]
  });
}

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "i4t8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridItem; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library to set properties for components

// @material-ui/core components


const styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px"
    /* flexBasis: "auto" */

  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(styles);
function GridItem(props) {
  const {
    children,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "className"]);

  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread(_objectSpread({
    item: true
  }, rest), {}, {
    className: classes.grid + " " + className,
    children: children
  }));
}
GridItem.defaultProps = {
  className: ""
};

/***/ }),

/***/ "mtPR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridContainer; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library to set properties for components

// @material-ui/core components


const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(styles);
function GridContainer(props) {
  const {
    children,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "className"]);

  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread(_objectSpread({
    container: true
  }, rest), {}, {
    className: classes.grid + " " + className,
    children: children
  }));
}
GridContainer.defaultProps = {
  className: ""
};

/***/ }),

/***/ "obVW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return drawerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return container; });
/* unused harmony export containerFluid */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return boxShadow; });
/* unused harmony export card */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return defaultFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return secondaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return warningColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return dangerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return successColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return infoColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return roseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return grayColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return whiteColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return blackColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return twitterColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return facebookColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return googleColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return linkedinColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return pinterestColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return youtubeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return tumblrColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return behanceColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return dribbbleColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return redditColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return hudlColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return instagramColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return primaryBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return infoBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return successBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return warningBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return dangerBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return roseBoxShadow; });
/* unused harmony export warningCardHeader */
/* unused harmony export successCardHeader */
/* unused harmony export dangerCardHeader */
/* unused harmony export infoCardHeader */
/* unused harmony export primaryCardHeader */
/* unused harmony export roseCardHeader */
/* unused harmony export cardActions */
/* unused harmony export cardHeader */
/* unused harmony export defaultBoxShadow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return cardTitle; });
/* unused harmony export description */
/* unused harmony export cardLink */
/* unused harmony export cardSubtitle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return mainRaised; });
/* unused harmony export section */
/* unused harmony export sectionDark */
/* unused harmony export sectionDescription */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return mlAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return mrAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return btnLink; });
/* unused harmony export coloredShadow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return hexToRgb; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!

=========================================================
* NextJS Material Kit PRO v1.2.0 based on Material Kit PRO - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit PRO React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-kit-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// ##############################
// // // Function that converts from hex color to rgb color
// // // Example: input = #9c27b0 => output = 156, 39, 176
// // // Example: input = 9c27b0 => output = 156, 39, 176
// // // Example: input = #999 => output = 153, 153, 153
// // // Example: input = 999 => output = 153, 153, 153
// #############################
const hexToRgb = input => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;

  if (!hexRegex.test(input) || input.length !== 3 && input.length !== 6) {
    throw new Error("input is not a valid hex color.");
  }

  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }

  input = input.toUpperCase(input);
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return parseInt(first, 16) + ", " + parseInt(second, 16) + ", " + parseInt(last, 16);
}; // ##############################
// // // Variables - Styles that are used on more than one component
// #############################


const drawerWidth = 260;
const primaryColor = ["#9c27b0", "#ab47bc", "#8e24aa", "#af2cc5", "#e1bee7", "#ba68c8"];
const secondaryColor = ["#fafafa"];
const warningColor = ["#ff9800", "#ffa726", "#fb8c00", "#ffa21a", "#fcf8e3", "#faf2cc", "#ffe0b2", "#ffb74d"];
const dangerColor = ["#f44336", "#ef5350", "#e53935", "#f55a4e", "#f2dede", "#ebcccc", "ef9a9a", "#ef5350"];
const successColor = ["#4caf50", "#66bb6a", "#43a047", "#5cb860", "#dff0d8", "#d0e9c6", "#a5d6a7", "#66bb6a"];
const infoColor = ["#00acc1", "#26c6da", "#00acc1", "#00d3ee", "#d9edf7", "#c4e3f3", "#b2ebf2", "#4dd0e1"];
const roseColor = ["#e91e63", "#ec407a", "#d81b60", "#f8bbd0", "#f06292"];
const grayColor = ["#999", "#3C4858", "#eee", "#343434", "#585858", "#232323", "#ddd", "#6c757d", "#333", "#212121", "#777", "#D2D2D2", "#AAA", "#495057", "#e5e5e5", "#555", "#f9f9f9", "#ccc", "#444", "#f2f2f2", "#89229b", "#c0c1c2", "#9a9a9a", "#f5f5f5", "#505050", "#1f1f1f"];
const whiteColor = "#FFF";
const blackColor = "#000";
const twitterColor = "#55acee";
const facebookColor = "#3b5998";
const googleColor = "#dd4b39";
const linkedinColor = "#0976b4";
const pinterestColor = "#cc2127";
const youtubeColor = "#e52d27";
const tumblrColor = "#35465c";
const behanceColor = "#1769ff";
const dribbbleColor = "#ea4c89";
const redditColor = "#ff4500";
const instagramColor = "#E1306C";
const hudlColor = "#ff6300";
const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};

const container = _objectSpread(_objectSpread({}, containerFluid), {}, {
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
});

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
  borderRadius: "3px",
  color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
  background: whiteColor
};
const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};
const boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 4px 25px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)"
};
const primaryBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(primaryColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(primaryColor[0]) + ", 0.2)"
};
const infoBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(infoColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(infoColor[0]) + ", 0.2)"
};
const successBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(successColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(successColor[0]) + ", 0.2)"
};
const warningBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(warningColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(warningColor[0]) + ", 0.2)"
};
const dangerBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(dangerColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(dangerColor[0]) + ", 0.2)"
};
const roseBoxShadow = {
  boxShadow: "0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.14), 0 7px 10px -5px rgba(" + hexToRgb(roseColor[0]) + ", 0.4)"
};

const warningCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + warningColor[1] + ", " + warningColor[2] + ")"
}, warningBoxShadow);

const successCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + successColor[1] + ", " + successColor[2] + ")"
}, successBoxShadow);

const dangerCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + dangerColor[1] + ", " + dangerColor[2] + ")"
}, dangerBoxShadow);

const infoCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + infoColor[1] + ", " + infoColor[2] + ")"
}, infoBoxShadow);

const primaryCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + primaryColor[1] + ", " + primaryColor[2] + ")"
}, primaryBoxShadow);

const roseCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + roseColor[1] + ", " + roseColor[2] + ")"
}, roseBoxShadow);

const cardActions = _objectSpread({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid  " + grayColor[2],
  height: "auto"
}, defaultFont);

const cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 3px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
const title = {
  color: grayColor[1],
  textDecoration: "none",
  fontWeight: "700",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: `"Roboto Slab", "Times New Roman", serif`
};
const cardTitle = {
  "&, & a": _objectSpread(_objectSpread({}, title), {}, {
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto"
  })
};
const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};
const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem"
};
const main = {
  background: whiteColor,
  position: "relative",
  zIndex: "3"
};
const mainRaised = {
  "@media (max-width: 576px)": {
    marginTop: "-30px"
  },
  "@media (max-width: 830px)": {
    marginLeft: "10px",
    marginRight: "10px"
  },
  margin: "-60px 30px 0px",
  borderRadius: "6px",
  boxShadow: "0 16px 24px 2px rgba(" + hexToRgb(blackColor) + ", 0.14), 0 6px 30px 5px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)"
};
const section = {
  backgroundPosition: "50%",
  backgroundSize: "cover"
};
const sectionDark = {
  backgroundColor: grayColor[3],
  background: "radial-gradient(ellipse at center," + grayColor[4] + " 0," + grayColor[5] + " 100%)"
};
const sectionDescription = {
  marginTop: "130px"
};
const description = {
  color: grayColor[0]
};
const mlAuto = {
  marginLeft: "auto"
};
const mrAuto = {
  marginRight: "auto"
};
const btnLink = {
  backgroundColor: "transparent",
  boxShdow: "none",
  marginTop: "5px",
  marginBottom: "5px"
};
const coloredShadow = {
  // some jss/css to make the cards look a bit better on Internet Explorer
  "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
    display: "none !important"
  },
  transform: "scale(0.94)",
  top: "12px",
  filter: "blur(12px)",
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  zIndex: "-1",
  transition: "opacity .45s",
  opacity: "0"
};


/***/ })

/******/ });