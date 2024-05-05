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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/feedback/[feedbackId].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/feedback/[feedbackId].js":
/*!********************************************!*\
  !*** ./pages/api/feedback/[feedbackId].js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./pages/api/feedback/index.js");


function handler(req, res) {
  if (req.method === 'DELETE') {//
  }

  const feedbackId = req.query.feedbackId;
  console.log(feedbackId);
  const filePath = Object(_index__WEBPACK_IMPORTED_MODULE_0__["buildFeedbackPath"])();
  const feedbackData = Object(_index__WEBPACK_IMPORTED_MODULE_0__["extractFeedback"])(filePath);
  const selectedFeedback = feedbackData.find(feedback => feedback.id === feedbackId);
  res.status(200).json({
    feedback: selectedFeedback
  });
}

/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2ZlZWRiYWNrL1tmZWVkYmFja0lkXS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZmVlZGJhY2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImZlZWRiYWNrSWQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJmaWxlUGF0aCIsImJ1aWxkRmVlZGJhY2tQYXRoIiwiZmVlZGJhY2tEYXRhIiwiZXh0cmFjdEZlZWRiYWNrIiwic2VsZWN0ZWRGZWVkYmFjayIsImZpbmQiLCJmZWVkYmFjayIsImlkIiwic3RhdHVzIiwianNvbiIsInBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImZpbGVEYXRhIiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiZW1haWwiLCJib2R5IiwiZmVlZGJhY2tUZXh0IiwidGV4dCIsIm5ld0ZlZWRiYWNrIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwicHVzaCIsIndyaXRlRmlsZVN5bmMiLCJzdHJpbmdpZnkiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9E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LENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUgsY0FBUSxFQUFFVztBQUFaLEtBQXJCO0FBQ0Q7QUFDRjs7QUFFY3pCLHNFQUFmLEU7Ozs7Ozs7Ozs7O0FDcENBLCtCOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL2FwaS9mZWVkYmFjay9bZmVlZGJhY2tJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9mZWVkYmFjay9bZmVlZGJhY2tJZF0uanNcIik7XG4iLCJpbXBvcnQgeyBidWlsZEZlZWRiYWNrUGF0aCwgZXh0cmFjdEZlZWRiYWNrIH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcblxyXG4gIGlmIChyZXEubWV0aG9kID09PSAnREVMRVRFJykge1xyXG4gICAgLy9cclxuICB9XHJcbiAgY29uc3QgZmVlZGJhY2tJZCA9IHJlcS5xdWVyeS5mZWVkYmFja0lkO1xyXG4gIGNvbnNvbGUubG9nKGZlZWRiYWNrSWQpO1xyXG4gIGNvbnN0IGZpbGVQYXRoID0gYnVpbGRGZWVkYmFja1BhdGgoKTtcclxuICBjb25zdCBmZWVkYmFja0RhdGEgPSBleHRyYWN0RmVlZGJhY2soZmlsZVBhdGgpO1xyXG4gIGNvbnN0IHNlbGVjdGVkRmVlZGJhY2sgPSBmZWVkYmFja0RhdGEuZmluZChmZWVkYmFjayA9PiBmZWVkYmFjay5pZCA9PT0gZmVlZGJhY2tJZCk7XHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBmZWVkYmFjazogc2VsZWN0ZWRGZWVkYmFja30pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyIsImltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRmVlZGJhY2tQYXRoKCkge1xyXG4gIHJldHVybiBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2RhdGEnLCAnZmVlZGJhY2suanNvbicpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEZlZWRiYWNrKGZpbGVQYXRoKSB7XHJcbiAgY29uc3QgZmlsZURhdGEgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpO1xyXG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGZpbGVEYXRhKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIGNvbnN0IGVtYWlsID0gcmVxLmJvZHkuZW1haWw7XHJcbiAgICBjb25zdCBmZWVkYmFja1RleHQgPSByZXEuYm9keS50ZXh0O1xyXG5cclxuICAgIGNvbnN0IG5ld0ZlZWRiYWNrID0gIHtcclxuICAgICAgaWQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICB0ZXh0OiBmZWVkYmFja1RleHQsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZpbGVQYXRoID0gYnVpbGRGZWVkYmFja1BhdGgoKTtcclxuICAgIGNvbnN0IGRhdGEgPSBleHRyYWN0RmVlZGJhY2soZmlsZVBhdGgpO1xyXG4gICAgZGF0YS5wdXNoKG5ld0ZlZWRiYWNrKTtcclxuICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHttZXNzYWdlOiAnU3VjY2VzcyEnLCBmZWVkYmFjazogbmV3RmVlZGJhY2t9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IGJ1aWxkRmVlZGJhY2tQYXRoKCk7XHJcbiAgICBjb25zdCBkYXRhID0gZXh0cmFjdEZlZWRiYWNrKGZpbGVQYXRoKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZmVlZGJhY2s6IGRhdGEgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=