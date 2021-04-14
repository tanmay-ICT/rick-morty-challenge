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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vRNQ");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Import useState & useEffect hooks



const defaultEndpoint = 'https://rickandmortyapi.com/api/character/'; // Default API endpoint

async function getServerSideProps() {
  // Function to fetch all the characters data
  const res = await fetch(defaultEndpoint); // Setting the default API endpoint in the reponse

  const data = await res.json(); // Grab the data in JSON format

  return {
    props: {
      // Make data available in Props property.
      data
    }
  };
}
function Home({
  data
}) {
  // Create an argument 'home' and capture the data
  const {
    info,
    results: defaultResults = []
  } = data; // Destructure the results and send empty array value and destructure the same from data

  const {
    0: results,
    1: updateResults
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultResults); // Using React's useState we can store the results in state and the update the state with more results. Rename results to defaultResults to be used as the initial state.

  const {
    0: page,
    1: updatePage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_objectSpread(_objectSpread({}, info), {}, {
    current: defaultEndpoint // Define the defaultEndpoint as the current state of the page.

  }));
  const {
    current
  } = page; // Use the current value to be updated every page by destructuring the 'current' vale from the page

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // Use useEffct to make request of pagination updates
    if (current === defaultEndpoint) return; // check if the current value equals the default end point value

    async function request() {
      var _nextData$info;

      // Call the async function to request a response to update the current state of the page
      const res = await fetch(current);
      const nextData = await res.json(); // assign nextData the value of the response in JSON format

      updatePage(_objectSpread({
        // Pass the current, next data information attributes in the updatePage function
        current
      }, nextData.info));

      if (!((_nextData$info = nextData.info) !== null && _nextData$info !== void 0 && _nextData$info.prev)) {
        // check if the information does not have previous value therefore replace the current results
        updateResults(nextData.results);
        return;
      }

      updateResults(prev => {
        // Update the result and return the previous and new results
        return [...prev, ...nextData.results];
      });
    }

    request(); // Call a request function and pass 'current's' value through it
  }, [current]);

  function handleLoadMore() {
    // Load more button function
    updatePage(prev => {
      // Update the 'page' state with new current value with the 'next' value as the as the endpoint to fetch new results
      return _objectSpread(_objectSpread({}, prev), {}, {
        current: page === null || page === void 0 ? void 0 : page.next
      });
    });
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
        children: "Rick & Morty Challenge"
      }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "icon",
        href: "../tkfavicon.ico"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
      children: [" ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
        children: "Rick & Morty Challenge"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.description,
        children: [" ", "by Tanmay Kulkarni"]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.grid,
        children: [" ", results.map(results => {
          // By using map method create a new list of each character result
          const {
            id,
            name,
            image,
            gender,
            location,
            origin,
            species
          } = results; // map the results by id, name, image, gender, location, origin & species

          return (
            /*#__PURE__*/
            // Return a list by id as the key
            Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.card,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
                href: "#",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                  src: image,
                  alt: '${name}} Thumbnail'
                }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
                  children: name
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.ulimage,
                children: [" ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                    children: "Gender: "
                  }), " ", gender, " "]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                    children: "Location: "
                  }), " ", location === null || location === void 0 ? void 0 : location.name, " "]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                    children: "Origin: "
                  }), " ", origin === null || origin === void 0 ? void 0 : origin.name, " "]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                    children: "Species: "
                  }), " ", species, " "]
                })]
              })]
            }, id)
          );
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bouncy,
          onClick: handleLoadMore,
          children: "Load More"
        }), " "]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("footer", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
        href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        target: "_blank",
        rel: "noopener noreferrer",
        children: ["Powered by", ' ', /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
          src: "/vercel.svg",
          alt: "Vercel Logo",
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo
        })]
      })
    })]
  });
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "vRNQ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"ulimage": "Home_ulimage__1mLBP",
	"logo": "Home_logo__1YbrH",
	"bouncy": "Home_bouncy__2BwdA"
};


/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });