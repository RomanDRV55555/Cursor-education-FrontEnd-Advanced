/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./JS/analytics.js":
/*!*************************!*\
  !*** ./JS/analytics.js ***!
  \*************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\n\n    const timerShow = document.createElement('div'),\n    curTime = new Date();\n\n    document.body.appendChild(timerShow);\n    \n    setInterval(() => {\n\n        let msDiff = new Date() - curTime,\n            days = Math.floor(msDiff / (24 * 60 * 60 * 1000)),\n            hours = Math.floor((msDiff / (1000 * 60 * 60)) % 24),\n            minuts = Math.floor((msDiff / 1000 / 60) % 60),\n            seconds = Math.floor((msDiff / 1000) % 60);\n\n        let strTimer = `${Math.trunc(hours)} ${hours == 1 ? 'hour' : 'hours'} ${Math.trunc(minuts)} ${minuts == 1 ? 'minute' : 'minutes'} ${seconds} ${seconds == 1 ? 'second' : 'seconds'}`;\n        timerShow.innerHTML = `You've been here for ${strTimer}`;\n    }, 1000);\n\n})\n\n\n//# sourceURL=webpack:///./JS/analytics.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./JS/analytics.js"]();
/******/ 	
/******/ })()
;