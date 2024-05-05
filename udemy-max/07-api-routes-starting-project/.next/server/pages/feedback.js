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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/feedback/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/feedback/index.js":
/*!*************************************!*\
  !*** ./pages/api/feedback/index.js ***!
  \*************************************/
/*! exports provided: buildFeedbackPath, extractFeedback, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildFeedbackPath", function() { return buildFeedbackPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractFeedback", function() { return extractFeedback; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


function buildFeedbackPath() {
  return path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), 'data', 'feedback.json');
}
function extractFeedback(filePath) {
  const fileData = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;
    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText
    };
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({
      message: 'Success!',
      feedback: newFeedback
    });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({
      feedback: data
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "./pages/feedback/index.js":
/*!*********************************!*\
  !*** ./pages/feedback/index.js ***!
  \*********************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_feedback_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/feedback/index */ "./pages/api/feedback/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/madindo/codespace/references/next/07-api-routes-starting-project/pages/feedback/index.js";



function FeedbackPage(props) {
  const {
    0: feedbackData,
    1: setFeedbackData
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();

  function loadFeedbackHandler(id) {
    fetch(`/api/feedback/${id}`).then(response => response.json()).then(data => {
      setFeedbackData(data.feedback);
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [feedbackData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: feedbackData.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: props.feedbackItems.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: [item.text, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: loadFeedbackHandler.bind(null, item.id),
          children: "Show Detail"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 25
        }, this)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

async function getStaticProps() {
  const filePath = Object(_api_feedback_index__WEBPACK_IMPORTED_MODULE_1__["buildFeedbackPath"])();
  const data = Object(_api_feedback_index__WEBPACK_IMPORTED_MODULE_1__["extractFeedback"])(filePath);
  return {
    props: {
      feedbackItems: data
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (FeedbackPage);

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2ZlZWRiYWNrL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2ZlZWRiYWNrL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiYnVpbGRGZWVkYmFja1BhdGgiLCJwYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJleHRyYWN0RmVlZGJhY2siLCJmaWxlUGF0aCIsImZpbGVEYXRhIiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImVtYWlsIiwiYm9keSIsImZlZWRiYWNrVGV4dCIsInRleHQiLCJuZXdGZWVkYmFjayIsImlkIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwicHVzaCIsIndyaXRlRmlsZVN5bmMiLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImZlZWRiYWNrIiwiRmVlZGJhY2tQYWdlIiwicHJvcHMiLCJmZWVkYmFja0RhdGEiLCJzZXRGZWVkYmFja0RhdGEiLCJ1c2VTdGF0ZSIsImxvYWRGZWVkYmFja0hhbmRsZXIiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImZlZWRiYWNrSXRlbXMiLCJtYXAiLCJpdGVtIiwiYmluZCIsImdldFN0YXRpY1Byb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7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RUFFQ1UsSUFGRCxDQUVNN0IsSUFBSSxJQUFJO0FBQ1p5QixxQkFBZSxDQUFDekIsSUFBSSxDQUFDcUIsUUFBTixDQUFmO0FBQ0QsS0FKRDtBQUtEOztBQUVELHNCQUNFLHFFQUFDLDhDQUFEO0FBQUEsZUFDSUcsWUFBWSxpQkFBSTtBQUFBLGdCQUFJQSxZQUFZLENBQUNqQjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRHBCLGVBRUU7QUFBQSxnQkFDR2dCLEtBQUssQ0FBQ1EsYUFBTixDQUFvQkMsR0FBcEIsQ0FBd0JDLElBQUksaUJBQzNCO0FBQUEsbUJBQ0dBLElBQUksQ0FBQ3ZCLElBRFIsb0JBQ2M7QUFBUSxpQkFBTyxFQUFFaUIsbUJBQW1CLENBQUNPLElBQXBCLENBQXlCLElBQXpCLEVBQStCRCxJQUFJLENBQUNyQixFQUFwQyxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEZDtBQUFBLFNBQVNxQixJQUFJLENBQUNyQixFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztBQUVNLGVBQWV1QixjQUFmLEdBQWdDO0FBQ3JDLFFBQU12QyxRQUFRLEdBQUdOLDZFQUFpQixFQUFsQztBQUNBLFFBQU1VLElBQUksR0FBR0wsMkVBQWUsQ0FBQ0MsUUFBRCxDQUE1QjtBQUNBLFNBQU87QUFDTDJCLFNBQUssRUFBRTtBQUNMUSxtQkFBYSxFQUFFL0I7QUFEVjtBQURGLEdBQVA7QUFLRDtBQUVjc0IsMkVBQWYsRTs7Ozs7Ozs7Ozs7QUNyQ0EsK0I7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvZmVlZGJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2ZlZWRiYWNrL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRGZWVkYmFja1BhdGgoKSB7XHJcbiAgcmV0dXJuIHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScsICdmZWVkYmFjay5qc29uJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0RmVlZGJhY2soZmlsZVBhdGgpIHtcclxuICBjb25zdCBmaWxlRGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCk7XHJcbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZmlsZURhdGEpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgY29uc3QgZW1haWwgPSByZXEuYm9keS5lbWFpbDtcclxuICAgIGNvbnN0IGZlZWRiYWNrVGV4dCA9IHJlcS5ib2R5LnRleHQ7XHJcblxyXG4gICAgY29uc3QgbmV3RmVlZGJhY2sgPSAge1xyXG4gICAgICBpZDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIHRleHQ6IGZlZWRiYWNrVGV4dCxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZmlsZVBhdGggPSBidWlsZEZlZWRiYWNrUGF0aCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IGV4dHJhY3RGZWVkYmFjayhmaWxlUGF0aCk7XHJcbiAgICBkYXRhLnB1c2gobmV3RmVlZGJhY2spO1xyXG4gICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe21lc3NhZ2U6ICdTdWNjZXNzIScsIGZlZWRiYWNrOiBuZXdGZWVkYmFja30pXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGZpbGVQYXRoID0gYnVpbGRGZWVkYmFja1BhdGgoKTtcclxuICAgIGNvbnN0IGRhdGEgPSBleHRyYWN0RmVlZGJhY2soZmlsZVBhdGgpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBmZWVkYmFjazogZGF0YSB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiIsImltcG9ydCB7IGJ1aWxkRmVlZGJhY2tQYXRoLCBleHRyYWN0RmVlZGJhY2sgfSBmcm9tICcuLi9hcGkvZmVlZGJhY2svaW5kZXgnO1xyXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBGZWVkYmFja1BhZ2UocHJvcHMpIHtcclxuICBjb25zdCBbZmVlZGJhY2tEYXRhLCBzZXRGZWVkYmFja0RhdGFdID0gdXNlU3RhdGUoKTtcclxuICBmdW5jdGlvbiBsb2FkRmVlZGJhY2tIYW5kbGVyKGlkKSB7XHJcbiAgICBmZXRjaChgL2FwaS9mZWVkYmFjay8ke2lkfWApXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgc2V0RmVlZGJhY2tEYXRhKGRhdGEuZmVlZGJhY2spO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICB7IGZlZWRiYWNrRGF0YSAmJiA8cD57ZmVlZGJhY2tEYXRhLmVtYWlsfTwvcD59XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7cHJvcHMuZmVlZGJhY2tJdGVtcy5tYXAoaXRlbSA9PlxyXG4gICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgIHtpdGVtLnRleHR9IDxidXR0b24gb25DbGljaz17bG9hZEZlZWRiYWNrSGFuZGxlci5iaW5kKG51bGwsIGl0ZW0uaWQpfT5TaG93IERldGFpbDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBmaWxlUGF0aCA9IGJ1aWxkRmVlZGJhY2tQYXRoKCk7XHJcbiAgY29uc3QgZGF0YSA9IGV4dHJhY3RGZWVkYmFjayhmaWxlUGF0aCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGZlZWRiYWNrSXRlbXM6IGRhdGEsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWVkYmFja1BhZ2U7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==