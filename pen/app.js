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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("const span = document.querySelector('span');\r\nconst div = document.querySelector('div');\r\nconst input = document.querySelector('input');\r\n\r\ninput.value = '';\r\n\r\nfunction toggle() {\r\n  span.classList.toggle('clicked');\r\n  div.style.color = div.style.color === 'green' ? 'red' : 'green';\r\n}\r\n\r\nspan.addEventListener('click', toggle, false);\r\n\r\ninput.addEventListener(\r\n  'input',\r\n  (event) => {\r\n    if (/change/.test(event.currentTarget.value)) {\r\n      toggle();\r\n    } else if (/remove/.test(event.currentTarget.value)) {\r\n      span.remove();\r\n    }\r\n  },\r\n  false,\r\n);\r\n\n\n//# sourceURL=webpack://worker-dom-mfe/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;